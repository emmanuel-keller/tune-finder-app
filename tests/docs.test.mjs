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
test('all six source guides have corresponding translations and navigation',async()=>{
 const articles=await loadArticles(root);assert.equal(articles.length,6);
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
