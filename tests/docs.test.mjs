import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile, readdir} from 'node:fs/promises';
import {execFileSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
import {parseArticle,renderMarkdown,inline,route,loadArticles,normalize,safeUrl} from '../scripts/docs-core.mjs';
const root=fileURLToPath(new URL('../',import.meta.url));
const sample={id:'sample',title:'Example',summary:'Help',section:'Books',order:1,platforms:['ios','android'],minVersion:'1.5.5',verifiedRelease:'1.5.5',related:[]};
const source=meta=>`---\n${JSON.stringify(meta)}\n---\n## Title {#title}\nText`;
test('metadata rejects unsafe routes and malformed release/platform fields',()=>{
 assert.equal(parseArticle(source(sample),'en','sample.md').id,'sample');
 for(const override of [{id:'../escape'},{platforms:['web']},{order:0},{verifiedRelease:'latest'},{related:['../other']},{summary:''}]) assert.throws(()=>parseArticle(source({...sample,...override}),'en','sample.md'));
});
test('Markdown escapes text, rejects unsafe links and requires stable anchors',()=>{
 assert.equal(inline('<script>'), '&lt;script&gt;');
 assert.throws(()=>inline('[click](javascript:alert)'));
 assert.throws(()=>safeUrl('//evil.example'));
 assert.throws(()=>renderMarkdown('## Heading','en'));
 assert.throws(()=>renderMarkdown('## Title {#same}\n## Other {#same}','en'));
 assert.throws(()=>renderMarkdown('::: ios\nText','en'));
 assert.throws(()=>renderMarkdown('![Alt](/screenshots/fr/index-editor.png)','en'));
 const r=renderMarkdown('## Title {#title}\n\n1. One\n2. Two\n\n::: ios\n### iOS {#ios}\n**Bold**\n:::','en');
 assert.match(r.html,/<ol><li>One<\/li><li>Two<\/li><\/ol>/);assert.match(r.html,/data-platform="ios"/);
});
test('all planned 1.5.5 guides have corresponding translations and navigation',async()=>{
 const articles=await loadArticles(root);assert.equal(articles.length,22);
 const coverage=['getting-started','import-pdf','manage-books','detect-titles','manual-index','search-reading','playlists','android-drive','settings-purchases','troubleshooting','release-1-5-5'];
 for(const locale of ['en','fr']) assert.deepEqual(articles.filter(a=>a.locale===locale).map(a=>a.id),coverage);
 for(const a of articles) {assert.equal(a.verifiedRelease,'1.5.5');assert.equal(a.related.length,2);}
 for (const english of articles.filter(a=>a.locale==='en')) {const french=articles.find(a=>a.locale==='fr'&&a.id===english.id); assert.deepEqual(renderMarkdown(english.body,'en').headings.map(h=>h.id),renderMarkdown(french.body,'fr').headings.map(h=>h.id));}
 assert.equal(route('fr','import-pdf'),'/fr/docs/import-pdf/');
});
test('search data contains accented terms and support references in the selected language',async()=>{
 const index=JSON.parse(await readFile(root+'fr/docs/search-index.json','utf8'));
 const find=q=>index.filter(a=>normalize(`${a.title} ${a.text}`).includes(normalize(q)));
 assert.ok(find('détection').length);assert.ok(find('TF-SYNC-4613').some(a=>a.id==='import-pdf'));assert.ok(find('Google Drive').length);
 assert.ok(index.every(a=>a.url.startsWith('/fr/docs/')));
});
test('translation placeholders are clearly identified and excluded from sitemap',async()=>{
 const html=await readFile(root+'pt/docs/import-pdf/index.html','utf8');
 assert.match(html,/ainda não está traduzido/);assert.match(html,/noindex,follow/);assert.match(html,/href="\/fr\/docs\/import-pdf\/"/);
 assert.doesNotMatch(await readFile(root+'sitemap.xml','utf8'),/\/pt\/docs\//);
});
test('generated pages and sitemap are reproducible and keep privacy anchors',async()=>{
 const files=['sitemap.xml','index.html','fr/index.html','docs/import-pdf/index.html','fr/docs/detect-titles/index.html'];
 const before=await Promise.all(files.map(f=>readFile(root+f,'utf8')));
 execFileSync(process.execPath,[root+'build-locales.mjs']);execFileSync(process.execPath,[root+'scripts/build-docs.mjs']);
 const after=await Promise.all(files.map(f=>readFile(root+f,'utf8')));assert.deepEqual(after,before);
 assert.match(after[1],/id="privacy"/);assert.match(after[2],/href="\/fr\/docs\/"/);
});

test('inline links encode raw query separators exactly once without exposing HTML',()=>{
 assert.equal(inline('[A & B](https://example.com/?a=1&b=2)'),'<a href="https://example.com/?a=1&amp;b=2">A &amp; B</a>');
 assert.equal(inline('[Support](mailto:contact@tunefinder.app?subject=Help&body=PDF)'),'<a href="mailto:contact@tunefinder.app?subject=Help&amp;body=PDF">Support</a>');
 assert.equal(inline('[<b> & **help**](https://example.com/)'),'<a href="https://example.com/">&lt;b&gt; &amp; <strong>help</strong></a>');
 assert.throws(()=>inline('[Link](https://example.com/"onclick=x)'));
});
test('all supported locales provide localized image actions and navigation labels',async()=>{
 const {ui}=await import('../scripts/docs-ui.mjs');
 for(const locale of ['en','fr','pt','de','es','it']) {
  const figure=renderMarkdown(`![PDF](/screenshots/${locale}/index-editor.png)`,locale).html;
  assert.ok(figure.includes(ui[locale].openImage));
  const html=await readFile(root+route(locale)+'index.html','utf8');
  assert.ok(html.includes(`aria-label="${ui[locale].language}"`));
  assert.ok(html.includes(`aria-label="${ui[locale].breadcrumb}"`));
  if(['en','fr'].includes(locale)) assert.match(html,/<a aria-current="page" href="[^\"]+">/);
  else {assert.doesNotMatch(html,/class="guide-menu"/);assert.doesNotMatch(html,/<ul><\/ul>/);}
 }
 const article=await readFile(root+'fr/docs/import-pdf/index.html','utf8');
 assert.match(article,/<span aria-current="page">Importer et partager un PDF<\/span>/);
});
test('CI clean-check detects forgotten new generated files as well as tracked edits',async()=>{
 const {mkdtemp,writeFile,rm}=await import('node:fs/promises');
 const {tmpdir}=await import('node:os');
 const {join}=await import('node:path');
 const dir=await mkdtemp(join(tmpdir(),'tf-generated-check-'));
 const git=(...args)=>execFileSync('git',args,{cwd:dir,stdio:'pipe'});
 const check=()=>execFileSync(process.execPath,[root+'scripts/check-generated.mjs'],{cwd:dir,stdio:'pipe'});
 try {
  git('init');await writeFile(join(dir,'tracked.html'),'original');git('add','tracked.html');
  git('-c','user.name=Test','-c','user.email=test@example.com','commit','-m','fixture');check();
  await writeFile(join(dir,'new-guide.html'),'forgotten output');assert.throws(check);
  await rm(join(dir,'new-guide.html'));check();
  await writeFile(join(dir,'tracked.html'),'changed output');assert.throws(check);
 } finally {await rm(dir,{recursive:true,force:true});}
});

test('synchronization guides pair each platform with its matching instructions and image',async()=>{
 const articles=await loadArticles(root);
 for (const locale of ['en','fr']) {
  const guide=articles.find(a=>a.locale===locale&&a.id==='android-drive');
  assert.deepEqual(guide.platforms,['ios','android']);
  assert.equal(guide.title,locale==='en'?'Synchronization':'Synchronisation');
  const html=renderMarkdown(guide.body,locale).html;
  const ios=html.match(/<section data-platform="ios"[\s\S]*?<\/section>/)[0];
  const android=html.match(/<section data-platform="android"[\s\S]*?<\/section>/)[0];
  assert.match(ios,/iCloud/);assert.ok(ios.includes(`/screenshots/${locale}/device-sync.png`));assert.doesNotMatch(ios,/device-sync-android/);
  assert.match(android,/Google Drive/);assert.ok(android.includes(`/screenshots/${locale}/device-sync-android.png`));
 }
});

test('all guide PNG assets are readable and HTML reserves their intrinsic dimensions',async()=>{
 const {pngDimensions}=await import('../scripts/docs-images.mjs');
 const {inflateSync}=await import('node:zlib');
 const articles=await loadArticles(root);
 const checked=new Set();
 for(const a of articles) {
  const html=await readFile(root+route(a.locale,a.id)+'index.html','utf8');
  for(const [,url] of a.body.matchAll(/^!\[[^\]]+\]\((\/screenshots\/[^)]+)\)$/gm)) {
   const bytes=await readFile(root+url),{width,height}=pngDimensions(bytes);
   assert.ok(html.includes(`src="${url}"`));
   assert.ok(html.includes(`loading="lazy" width="${width}" height="${height}"`));
   if(checked.has(url))continue;checked.add(url);
   const chunks=[];let offset=8,ended=false;
   while(offset<bytes.length) {
    assert.ok(offset+12<=bytes.length,'Truncated PNG chunk');
    const length=bytes.readUInt32BE(offset),type=bytes.toString('ascii',offset+4,offset+8);
    assert.ok(offset+12+length<=bytes.length,'Truncated PNG payload');
    if(type==='IDAT')chunks.push(bytes.subarray(offset+8,offset+8+length));
    offset+=length+12;
    if(type==='IEND'){ended=true;break;}
   }
   assert.ok(ended && chunks.length,'Missing PNG image data/end');
   assert.equal(bytes[24],8,'Screenshots must use 8-bit channels');
   const channels=({2:3,6:4})[bytes[25]];assert.ok(channels,'Unsupported screenshot color type');
   assert.equal(bytes[28],0,'Screenshots must not be interlaced');
   const pixels=inflateSync(Buffer.concat(chunks));const stride=width*channels+1;
   assert.equal(pixels.length,stride*height);
   for(let row=0;row<height;row++)assert.ok(pixels[row*stride]<=4,'Invalid PNG row filter');
  }
 }
 assert.ok(checked.has('/screenshots/en/device-sync-android.png'));
 assert.deepEqual(pngDimensions(await readFile(root+'screenshots/en/device-sync-android.png')),{width:1080,height:1920});
 assert.throws(()=>pngDimensions(Buffer.from('broken image')));
 const invalid=Buffer.from(await readFile(root+'screenshots/en/device-sync-android.png'));invalid.writeUInt32BE(0,16);assert.throws(()=>pngDimensions(invalid));
});
test('shared synchronization guidance and search suggestions cover both providers',async()=>{
 const {ui}=await import('../scripts/docs-ui.mjs');
 for(const locale of ['en','fr']) {
  const article=(await loadArticles(root)).find(a=>a.locale===locale&&a.id==='android-drive');
  const troubleshooting=article.body.split('{#troubleshooting}')[1];
  assert.match(troubleshooting,/iCloud/);assert.match(troubleshooting,/Google/);
  assert.ok(troubleshooting.includes(locale==='en'?'On Android, system backup':'Sur Android, la sauvegarde système'));
  assert.ok(ui[locale].placeholder.includes(locale==='en'?'synchronization':'synchronisation'));
  assert.ok(ui[locale].empty.includes(locale==='en'?'synchronization':'synchronisation'));
 }
});
