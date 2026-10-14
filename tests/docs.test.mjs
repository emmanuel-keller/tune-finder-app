import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile, readdir} from 'node:fs/promises';
import {execFileSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
import {redirects,buildRedirects} from '../scripts/docs-redirects.mjs';
import {activeLocales,ui} from '../scripts/docs-ui.mjs';
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
test('all guides have corresponding translations and navigation',async()=>{
 const articles=await loadArticles(root);assert.equal(articles.length,66);
 assert.equal(articles.find(a=>a.locale==='en' && a.id==='whats-new').verifiedRelease,'1.5.6');
 const coverage=['getting-started','import-pdf','manage-books','detect-titles','manual-index','search-reading','playlists','android-drive','settings-purchases','troubleshooting','whats-new'];
 for(const locale of activeLocales) assert.deepEqual(articles.filter(a=>a.locale===locale).map(a=>a.id),coverage);
 for(const a of articles) assert.equal(a.related.length,2);
 for (const english of articles.filter(a=>a.locale==='en')) {for(const locale of activeLocales) {const translated=articles.find(a=>a.locale===locale&&a.id===english.id); assert.equal(translated.verifiedRelease,english.verifiedRelease); assert.equal(translated.minVersion,english.minVersion); assert.deepEqual(renderMarkdown(english.body,'en').headings.map(h=>h.id),renderMarkdown(translated.body,locale).headings.map(h=>h.id)); assert.deepEqual([...new Set(english.body.match(/TF-SYNC-\d+/g)??[])].sort(),[...new Set(translated.body.match(/TF-SYNC-\d+/g)??[])].sort());}}
 assert.equal(route('fr','import-pdf'),'/fr/docs/import-pdf/');
});
test('search data contains accented terms and support references in the selected language',async()=>{
 const index=JSON.parse(await readFile(root+'fr/docs/search-index.json','utf8'));
 const find=q=>index.filter(a=>normalize(`${a.title} ${a.text}`).includes(normalize(q)));
 assert.ok(find('détection').length);assert.ok(find('TF-SYNC-4613').some(a=>a.id==='import-pdf'));assert.ok(find('Google Drive').length);
 assert.ok(index.every(a=>a.url.startsWith('/fr/docs/')));
});
test('all six languages have real guides, search indexes and indexed sitemap routes',async()=>{
 const sitemap=await readFile(root+'sitemap.xml','utf8');
 const articles=await loadArticles(root);
 for(const locale of activeLocales) {
  const html=await readFile(root+route(locale,'import-pdf')+'index.html','utf8');
  assert.doesNotMatch(html,/noindex,follow/);
  assert.ok(html.includes(articles.find(a=>a.locale===locale&&a.id==='import-pdf').title));
  const index=JSON.parse(await readFile(root+route(locale)+'search-index.json','utf8'));
  assert.equal(index.length,11);assert.ok(index.every(a=>a.url.startsWith(route(locale))));
  assert.ok(sitemap.includes('https://tunefinder.app'+route(locale,'import-pdf')));
  for(const other of activeLocales)assert.ok(html.includes(`hreflang="${other}" href="https://tunefinder.app${route(other,'import-pdf')}"`));
  for(const key of Object.keys(ui.en))assert.ok(Object.hasOwn(ui[locale],key),`${locale} missing UI ${key}`);
 }
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
  assert.match(html,/<a aria-current="page" href="[^\"]+">/);
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
 for (const locale of activeLocales) {
  const guide=articles.find(a=>a.locale===locale&&a.id==='android-drive');
  assert.deepEqual(guide.platforms,['ios','android']);
  assert.equal(guide.title,({en:'Synchronization',fr:'Synchronisation',pt:'Sincronização',de:'Synchronisierung',es:'Sincronización',it:'Sincronizzazione'})[locale]);
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
 for(const locale of activeLocales) {
  const article=(await loadArticles(root)).find(a=>a.locale===locale&&a.id==='android-drive');
  const troubleshooting=article.body.split('{#troubleshooting}')[1];
  assert.match(troubleshooting,/iCloud/);assert.match(troubleshooting,/Google/);
  assert.ok(troubleshooting.includes(({en:'On Android, system backup',fr:'Sur Android, la sauvegarde système',pt:'No Android, a cópia',de:'Android-Systembackup',es:'En Android, la copia',it:'Su Android il backup'})[locale]));
  assert.ok(ui[locale].placeholder.includes(({en:'synchronization',fr:'synchronisation',pt:'sincronização',de:'Synchronisierung',es:'sincronización',it:'sincronizzazione'})[locale]));
  assert.ok(ui[locale].empty.includes(({en:'synchronization',fr:'synchronisation',pt:'sincronização',de:'Synchronisierung',es:'sincronización',it:'sincronizzazione'})[locale]));
 }
});

test('guides and public search stay versionless; redirects are not indexed',async()=>{
 const articles=await loadArticles(root);
 // Two- and three-part releases; avoid localized thousands such as 1.000 pages.
 const versionNumber=/\bv?\d+\.\d{1,2}(?:\.\d+)?\b(?![\d.]\d)/i;
 assert.match("TuneFinder 1.5",versionNumber);
 assert.match("TuneFinder v1.5",versionNumber);
 assert.match("TuneFinder V1.6.0",versionNumber);
 assert.match("TuneFinder 1.6.0",versionNumber);
 assert.doesNotMatch("1.000 páginas",versionNumber);
 const sitemap=await readFile(root+'sitemap.xml','utf8');
 for(const article of articles) {
  assert.doesNotMatch(article.body,versionNumber);
  const html=await readFile(root+route(article.locale,article.id)+'index.html','utf8');
  assert.doesNotMatch(html,versionNumber);
 }
 for(const locale of activeLocales) {
  for (const file of ['index.html','search-index.json']) {
   const content=await readFile(root+route(locale)+file,'utf8');
   assert.doesNotMatch(content,versionNumber);
  }
  for(const {from,to} of redirects) {
   const destination=route(locale,to), legacy=route(locale,from);
   const redirect=await readFile(root+legacy+'index.html','utf8');
   const title=articles.find(a=>a.locale===locale && a.id===to).title;
   assert.ok(redirect.includes(`content="0;url=${destination}"`));
   assert.ok(redirect.includes(`href="https://tunefinder.app${destination}"`));
   assert.ok(redirect.includes('content="noindex,follow"'));
   assert.ok(redirect.includes(`>${title}</a>`));
   assert.ok(!sitemap.includes(`<loc>https://tunefinder.app${legacy}</loc>`));
   assert.ok(sitemap.includes(`<loc>https://tunefinder.app${destination}</loc>`));
  }
 }
});

test('purchase guides match audited effective app translations',async()=>{
 const snapshot=JSON.parse(await readFile(root+'content/app-ui-labels.json','utf8'));
 assert.match(snapshot.source.commit,/^[a-f0-9]{40}$/);
 assert.equal(snapshot.source.path,'src/i18n.ts');
 const articles=await loadArticles(root);
 for(const locale of activeLocales) {
  const body=articles.find(a=>a.locale===locale && a.id==='settings-purchases').body;
  const highlights=articles.find(a=>a.locale===locale && a.id==='whats-new').body;
  const {settings,multiBookSearch}=snapshot.labels[locale];
  assert.ok(highlights.includes(`**${settings} → ${multiBookSearch}**`),`${locale} What's new purchase navigation differs from audited app labels`);
  assert.deepEqual(Object.keys(snapshot.labels[locale]),['settings','multiBookSearch','restorePurchase','chooseSongbooks']);
  for(const [key,label] of Object.entries(snapshot.labels[locale])) {
   assert.ok(body.includes(`**${label}**`),`${locale} purchase guide missing ${key}: ${label}`);
  }
 }
});

test('troubleshooting translations do not retain retired purchase-limit lead-ins',async()=>{
 const articles=await loadArticles(root);
 const fragments=['Siehe Kaufgrenze unter','Consulta la limitación de compra en','Vedi la limitazione di acquisto in','Veja a limitação de compra em'];
 for(const article of articles.filter(a=>a.id==='troubleshooting')) {
  const html=await readFile(root+route(article.locale,article.id)+'index.html','utf8');
  const index=await readFile(root+route(article.locale)+'search-index.json','utf8');
  for(const fragment of fragments) {
   assert.ok(!article.body.includes(fragment));
   assert.ok(!html.includes(fragment));
   assert.ok(!index.includes(fragment));
  }
 }
});

test('redirect registration rejects missing destinations and active or duplicate route collisions',async()=>{
 const articles=await loadArticles(root);
 const paths=articles.map(a=>route(a.locale,a.id));
 assert.throws(()=>buildRedirects(articles,paths,[{from:'old-guide',to:'missing-guide'}]),/Invalid redirect/);
 assert.throws(()=>buildRedirects(articles,paths,[{from:'getting-started',to:'whats-new'}]),/Invalid redirect/);
 assert.throws(()=>buildRedirects(articles,paths,[...redirects,...redirects]),/Invalid redirect/);
 const entries=buildRedirects(articles,paths);
 assert.deepEqual(entries.map(entry=>entry.locale),activeLocales);
 assert.equal(entries.length,activeLocales.length);
});
