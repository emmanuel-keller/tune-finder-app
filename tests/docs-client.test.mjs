import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {runInNewContext} from 'node:vm';
import * as behavior from '../docs-behavior.mjs';
const article=(overrides={})=>({title:'PDF import',summary:'Import your PDF',headings:['Start'],text:'Read the PDF and review OCR titles.',url:'/docs/import-pdf/',...overrides});
test('tokenization accepts punctuation and accents and preserves error references',()=>{
 assert.deepEqual(behavior.queryTerms('PDF, OCR; Google Drive!'),['pdf','ocr','google','drive']);
 assert.deepEqual(behavior.queryTerms('Détecter — TF-SYNC-4613'),['detecter','tf-sync-4613']);
 assert.deepEqual(behavior.queryTerms(' , … ! '),[]);
});
test('prepared search matches all terms and ranks title matches before body matches',()=>{
 const index=behavior.prepareIndex([article({title:'General guide'}),article()]);
 assert.equal(index[0].bodySearch,'read the pdf and review ocr titles.');
 assert.equal(behavior.searchIndex(index,['pdf'])[0].title,'PDF import');
 assert.equal(behavior.searchIndex(index,['pdf','ocr']).length,2);
 assert.equal(behavior.searchIndex(index,['pdf','missing']).length,0);
 assert.equal(behavior.searchIndex(index,[]).length,0);
 // Searching uses the prepared text, not a repeated normalization of mutable source fields.
 index[0].text='Changed after preparation';assert.equal(behavior.searchIndex(index,['ocr']).length,2);
});
test('snippets use metadata fallback or a specific body word without cutting words',()=>{
 const [metadata]=behavior.prepareIndex([article({title:'Unique heading',text:'Plain introduction.'})]);
 assert.equal(behavior.snippetFor(metadata,['unique']),metadata.summary);
 const text='the beginning '+('longcontextword '.repeat(25))+'specificneedle '+('continuationword '.repeat(25));
 const [body]=behavior.prepareIndex([article({text})]);
 const snippet=behavior.snippetFor(body,['the','specificneedle']);
 assert.match(snippet,/specificneedle/);assert.ok(snippet.startsWith('…longcontextword'));assert.ok(snippet.endsWith('continuationword…'));
 const [accent]=behavior.prepareIndex([article({text:('e\u0301té '.repeat(30))+'specificneedle '+('more words '.repeat(20))})]);
 assert.match(behavior.snippetFor(accent,['specificneedle']),/specificneedle/);
});
test('platform preferences survive navigation, storage failure is safe, and direct headings select their platform',()=>{
 const values=new Map(), storage={getItem:k=>values.get(k),setItem:(k,v)=>values.set(k,v)};
 assert.equal(behavior.readPlatform(storage),'all');behavior.savePlatform(storage,'android');assert.equal(behavior.readPlatform(storage),'android');
 assert.equal(behavior.platformForHeading('android','ios'),'ios');assert.equal(behavior.platformForHeading('android',undefined),'android');
 const broken={getItem(){throw Error('Denied');},setItem(){throw Error('Denied');}};
 assert.equal(behavior.readPlatform(broken),'all');assert.doesNotThrow(()=>behavior.savePlatform(broken,'ios'));
});
function historyFor(location) {
 return {paths:[],replaceState(_state,_title,path){
  assert.equal(typeof path,'string');
  const url=new URL(path,'https://tunefinder.app');
  assert.equal(url.origin,'https://tunefinder.app');
  this.paths.push(url.pathname+url.search+url.hash);
  Object.assign(location,{pathname:url.pathname,search:url.search,hash:url.hash});
 }};
}
test('actual client controller renders comma queries and synchronizes radio selection with heading visibility',async()=>{
 class Element {
  constructor(){this.dataset={};this.listeners={};this.children=[];this.value='';this.textContent='';this.hidden=false;this.checked=false;}
  addEventListener(event,callback){this.listeners[event]=callback;}
  replaceChildren(){this.children=[];}
  append(...children){this.children.push(...children);}
 }
 const menu=new Element(), picker=new Element(), panel=new Element(), input=new Element(), list=new Element(), status=new Element();
 const radios=['all','ios','android'].map(value=>Object.assign(new Element(),{value}));
 const sections=['ios','android'].map(platform=>Object.assign(new Element(),{dataset:{platform}}));
 picker.querySelectorAll=()=>radios;
 panel.querySelector=selector=>({'input':input,'ul':list,'[role=status]':status}[selector]);
 const document={body:{dataset:{locale:'en',count:'guides found',empty:'None',error:'Unavailable'}},querySelector:selector=>({'.guide-menu':menu,'.platform-picker':picker,'[data-search]':panel}[selector]),querySelectorAll:()=>sections,getElementById:id=>id==='share-ios'?{closest:()=>sections[0]}:null,createElement:()=>new Element()};
 const values=new Map([['tunefinder-docs-platform','android']]),localStorage={getItem:k=>values.get(k),setItem:(k,v)=>values.set(k,v)};
 const location={hash:'#share-ios',pathname:'/docs/import-pdf/',search:''};
 const layout={matches:false,addEventListener(type,callback){this.change=callback;}};
 const window={matchMedia:()=>layout,addEventListener(){}};
 const history=historyFor(location);
 let requested;
 const fetch=url=>{requested=url;return Promise.resolve({ok:true,json:async()=>[article()]});};
 // Execute the actual DOM controller with its imported production helpers supplied by the VM.
 const source=(await readFile(new URL('../docs.js',import.meta.url),'utf8')).replace(/^import[^\n]+\n/,'');
 runInNewContext(source,{...behavior,document,window,localStorage,location,history,fetch,URLSearchParams});
 assert.equal(sections[0].hidden,false);assert.equal(sections[1].hidden,true);assert.equal(radios[1].checked,true);
 picker.listeners.change({target:{value:'all'}});assert.equal(location.hash,'');assert.equal(sections[0].hidden,false);assert.equal(sections[1].hidden,false);assert.equal(radios[0].checked,true);
 layout.change({matches:true});assert.equal(menu.open,true);
 picker.listeners.change({target:{value:'android'}});assert.equal(location.hash,'');assert.equal(sections[0].hidden,true);assert.equal(radios[2].checked,true);assert.equal(values.get('tunefinder-docs-platform'),'android');
 await new Promise(resolve=>setImmediate(resolve));assert.equal(requested,'/docs/search-index.json');
 input.value='PDF, OCR';input.listeners.input();assert.equal(list.children.length,1);assert.equal(status.textContent,'1 guides found');
 input.value='!!!';input.listeners.input();assert.equal(list.children.length,0);assert.equal(status.textContent,'');
});

test('app platform hints accept only supported platforms',()=>{
 assert.equal(behavior.platformFromQuery('?platform=ios'),'ios');
 assert.equal(behavior.platformFromQuery('?platform=android'),'android');
 for(const query of ['','?platform=all','?platform=unknown','?platform=IOS']) assert.equal(behavior.platformFromQuery(query),null);
});

async function platformController({search='',hash='',headingPlatform,saved='android',values=new Map([['tunefinder-docs-platform',saved]]),pickerPresent=true,blocked=false}={}) {
 const radios=['all','ios','android'].map(value=>({value,checked:false}));
 const sections=['ios','android'].map(platform=>({dataset:{platform},hidden:false}));
 const picker={hidden:true,listeners:{},querySelectorAll:()=>radios,addEventListener(event,callback){this.listeners[event]=callback;}};
 const location={pathname:'/docs/import-pdf/',search,hash};
 const headings={'share-ios':'ios','share-android':'android',...(headingPlatform?{[hash.slice(1)]:headingPlatform}:{})};
 const document={body:{dataset:{locale:'en'}},querySelector:selector=>selector==='.platform-picker'&&pickerPresent?picker:null,querySelectorAll:()=>sections,getElementById:id=>({closest:()=>sections.find(section=>section.dataset.platform===headings[id])})};
 const localStorage={getItem(key){if(blocked)throw new Error('Blocked');return values.get(key);},setItem(key,value){if(blocked)throw new Error('Blocked');values.set(key,value);}};
 const history=historyFor(location);
 const window={listeners:{},addEventListener(event,callback){this.listeners[event]=callback;}};
 const source=(await readFile(new URL('../docs.js',import.meta.url),'utf8')).replace(/^import[^\n]+\n/,'');
 runInNewContext(source,{...behavior,document,window,localStorage,location,history,URLSearchParams});
 return {radios,sections,picker,location,values,history,window};
}
test('app platform overrides saved preference; manual choice clears hint and persists across guides',async()=>{
 const page=await platformController({search:'?platform=ios&keep=value'});
 assert.equal(page.radios.find(r=>r.checked).value,'ios');
 assert.equal(page.sections[1].hidden,true);
 assert.equal(page.values.get('tunefinder-docs-platform'),'ios');
 page.picker.listeners.change({target:{value:'android'}});
 assert.equal(page.location.search,'?keep=value');
 assert.equal(page.radios.find(r=>r.checked).value,'android');
 const next=await platformController({values:page.values});
 assert.equal(next.radios.find(r=>r.checked).value,'android');
});
test('documentation landing remembers app hints; invalid hints and blocked storage are safe',async()=>{
 const landing=await platformController({search:'?platform=ios',pickerPresent:false});
 const guide=await platformController({values:landing.values});
 assert.equal(guide.radios.find(r=>r.checked).value,'ios');
 const invalid=await platformController({search:'?platform=invalid'});
 assert.equal(invalid.radios.find(r=>r.checked).value,'android');
 const blocked=await platformController({search:'?platform=ios',blocked:true});
 assert.equal(blocked.radios.find(r=>r.checked).value,'ios');
});

test('platform-specific hashes temporarily override preference and neutral hashes restore it',async()=>{
 for(const saved of ['all','android']) {
  const page=await platformController({saved});
  page.location.hash='#share-ios';page.window.listeners.hashchange();
  assert.equal(page.radios.find(r=>r.checked).value,'ios');
  assert.equal(page.values.get('tunefinder-docs-platform'),saved);
  page.location.hash='#overview';page.window.listeners.hashchange();
  assert.equal(page.radios.find(r=>r.checked).value,saved);
  assert.equal(page.sections[0].hidden,saved==='android');
 }
});
test('manual selection strips app hint while retaining neutral or matching section fragments',async()=>{
 for(const [hash,headingPlatform,selected] of [['#overview',undefined,'android'],['#share-ios','ios','ios']]) {
  const page=await platformController({search:'?platform=ios&keep=1',hash,headingPlatform});
  page.picker.listeners.change({target:{value:selected}});
  assert.deepEqual(page.history.paths,[`/docs/import-pdf/?keep=1${hash}`]);
  assert.equal(page.location.hash,hash);assert.equal(page.location.search,'?keep=1');
  assert.equal(page.values.get('tunefinder-docs-platform'),selected);
 }
});
test('manual selection clears conflicting sections and app hints without losing unrelated query data',async()=>{
 for(const selected of ['android','all']) {
  const page=await platformController({search:'?platform=ios&keep=1',hash:'#share-ios',headingPlatform:'ios'});
  page.picker.listeners.change({target:{value:selected}});
  assert.deepEqual(page.history.paths,['/docs/import-pdf/?keep=1']);
  assert.equal(page.location.hash,'');assert.equal(page.location.search,'?keep=1');
  assert.equal(page.radios.find(r=>r.checked).value,selected);
  const reload=await platformController({search:page.location.search,hash:page.location.hash,values:page.values});
  assert.equal(reload.radios.find(r=>r.checked).value,selected);
 }
});
