import {readFile, writeFile, mkdir, access} from 'node:fs/promises';
import {ui, names, activeLocales} from './docs-ui.mjs';
import {pngDimensions} from './docs-images.mjs';
import {fileURLToPath} from 'node:url';
import {escape as e, locales, route, renderMarkdown, loadArticles} from './docs-core.mjs';
const root = fileURLToPath(new URL('../', import.meta.url));
const origin = 'https://tunefinder.app';
const articles = await loadArticles(root);
const glossary = JSON.parse(await readFile(`${root}/content/terminology.json`, 'utf8'));
const rendered = new Map();
const imageDimensions = {};
for (const article of articles) {
 for (const [,url] of article.body.matchAll(/^!\[[^\]]+\]\((\/screenshots\/[^)]+)\)$/gm)) {
  if (!imageDimensions[url]) imageDimensions[url] = pngDimensions(await readFile(root+url));
 }
}
for (const a of articles) {
 const r = renderMarkdown(a.body,a.locale,imageDimensions); rendered.set(`${a.locale}/${a.id}`,r);
 const words = `${a.title} ${a.summary} ${r.text}`.toLocaleLowerCase(a.locale).match(/\p{L}+(?:-\p{L}+)*/gu) ?? [];
 const conflicts = glossary[a.locale].avoid.filter(term => words.includes(term.toLocaleLowerCase(a.locale)));
 if (conflicts.length) throw new Error(`Terminology conflict in ${a.locale}/${a.id}: ${conflicts}`);
}
const output = new Map();
function shell(locale,id,title,content,toc='',untranslated=false) {
 const t = {...ui.en,...ui[locale]}, own = articles.filter(a => a.locale===locale), home = locale==='en' ? '/' : `/${locale}/`;
 const canonical = origin+route(untranslated?'en':locale,id);
 const alternate = activeLocales.map(l => `<link rel="alternate" hreflang="${l}" href="${origin+route(l,id)}">`).join('');
 const nav = own.map(a => `<li><a ${id===a.id?'aria-current="page"':''} href="${route(locale,a.id)}">${e(a.title)}</a></li>`).join('');
 const sidebar = own.length ? `<details class="guide-menu"><summary>${t.browse}</summary><nav aria-label="${t.docs}"><a ${id ? '' : 'aria-current="page"'} href="${route(locale)}">${t.docs}</a><ul>${nav}</ul></nav></details>` : '';
 const breadcrumb = `<a href="${home}">${t.home}</a> / ${id ? `<a href="${route(locale)}">${t.docs}</a> / <span aria-current="page">${e(title)}</span>` : `<span aria-current="page">${t.docs}</span>`}`;
 const search = untranslated?'':`<section class="search-panel" data-search hidden><label for="doc-search">${t.search}</label><input type="search" id="doc-search" placeholder="${e(t.placeholder)}" autocomplete="off"><p id="search-status" role="status" aria-live="polite"></p><ul id="search-results"></ul></section>`;
 return `<!doctype html><html lang="${locale}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${e(title)} — TuneFinder</title><meta name="description" content="${e(own.find(a=>a.id===id)?.summary??t.intro??t.notice)}"><link rel="canonical" href="${canonical}">${alternate}<link rel="alternate" hreflang="x-default" href="${origin+route('en',id)}">${untranslated?'<meta name="robots" content="noindex,follow">':''}<link rel="icon" href="/tune-finder-logo.png"><link rel="stylesheet" href="/docs.css"><script src="/docs.js" type="module"></script></head><body data-locale="${locale}" data-empty="${e(t.empty)}" data-count="${e(t.count)}" data-error="${e(t.error)}"><a class="skip" href="#content">${t.skip}</a><header class="docs-header"><a class="brand" href="${home}"><img src="/tune-finder-logo.png" alt="" width="36" height="36">TuneFinder</a><a href="${route(locale)}">${t.docs}</a><details class="languages"><summary>${names[locale]}</summary><nav aria-label="${t.language}">${locales.map(l=>`<a href="${route(l,id)}" lang="${l}" ${locale===l?'aria-current="true"':''}>${names[l]}</a>`).join('')}</nav></details></header><div class="docs-layout"><aside class="sidebar">${search}${sidebar}</aside><main id="content" tabindex="-1"><nav class="breadcrumbs" aria-label="${t.breadcrumb}">${breadcrumb}</nav>${content}</main>${toc?`<aside class="toc"><nav aria-label="${t.contents}"><strong>${t.contents}</strong>${toc}</nav></aside>`:''}</div><footer><a href="${home}#privacy">${t.privacy}</a><a href="mailto:contact@tunefinder.app">contact@tunefinder.app</a><span>© Ekeller Limited 2026</span></footer></body></html>`;
}
for (const locale of locales) {
 const own = articles.filter(a=>a.locale===locale), t={...ui.en,...ui[locale]};
 if (!own.length) {
   for (const id of ['',...articles.filter(a=>a.locale==='en').map(a=>a.id)]) {
    const title = t.docs;
    const links = id ? activeLocales.map(l=>`<p><a href="${route(l,id)}" lang="${l}">${names[l]} — ${e(articles.find(a=>a.locale===l&&a.id===id).title)}</a></p>`).join('') : activeLocales.map(l=>`<p><a href="${route(l)}" lang="${l}">${names[l]}</a></p>`).join('');
    output.set(route(locale,id),shell(locale,id,title,`<h1>${title}</h1><p class="notice">${t.notice}</p><h2>${t.available}</h2>${links}`,'',true));
   }
   continue;
 }
 output.set(route(locale),shell(locale,'',t.docs,`<p class="eyebrow">TuneFinder 1.5.5</p><h1>${t.docs}</h1><p class="lead">${t.intro}</p><p class="notice">${t.scope}</p><div class="guide-cards">${own.map(a=>`<article><p class="eyebrow">${e(a.section)}</p><h2><a href="${route(locale,a.id)}">${e(a.title)}</a></h2><p>${e(a.summary)}</p><span class="badge">${a.platforms.length===2?'iOS · Android':'Android'}</span></article>`).join('')}</div>`));
 for (const [i,a] of own.entries()) {
  const r=rendered.get(`${locale}/${a.id}`);
  const toc=`<ul>${r.headings.filter(h=>h.level===2).map(h=>`<li><a href="#${h.id}">${e(h.title)}</a></li>`).join('')}</ul>`;
  const controls=a.platforms.length===2?`<fieldset class="platform-picker" hidden><legend>${t.platform}</legend>${[['all',t.all],['ios','iOS'],['android','Android']].map(([v,label])=>`<label><input type="radio" name="platform" value="${v}" ${v==='all'?'checked':''}>${label}</label>`).join('')}</fieldset>`:'';
  const contents = `<details class="inline-toc"><summary>${t.contents}</summary>${toc}</details>`;
  const related=`<section class="related"><h2>${t.related}</h2><ul>${a.related.map(id=>`<li><a href="${route(locale,id)}">${e(own.find(x=>x.id===id).title)}</a></li>`).join('')}</ul></section>`;
  const pager=`<nav class="pager" aria-label="${t.browse}">${own[i-1]?`<a rel="prev" href="${route(locale,own[i-1].id)}">← ${t.prev}: ${e(own[i-1].title)}</a>`:'<span></span>'}${own[i+1]?`<a rel="next" href="${route(locale,own[i+1].id)}">${t.next}: ${e(own[i+1].title)} →</a>`:''}</nav>`;
  output.set(route(locale,a.id),shell(locale,a.id,a.title,`<article><p class="eyebrow">${e(a.section)} · ${a.platforms.length===2?'iOS · Android':'Android'}</p><h1>${e(a.title)}</h1><p class="lead">${e(a.summary)}</p><p class="verified">${t.version} ${a.verifiedRelease}</p>${contents}${controls}${r.html}${related}${pager}</article>`,toc));
 }
 const index=own.map(a=>({id:a.id,title:a.title,summary:a.summary,url:route(locale,a.id),platforms:a.platforms,headings:rendered.get(`${locale}/${a.id}`).headings.map(h=>h.title),text:rendered.get(`${locale}/${a.id}`).text}));
 await mkdir(`${root}${route(locale)}`,{recursive:true});
 await writeFile(`${root}${route(locale)}search-index.json`,JSON.stringify(index,null,2)+'\n');
}
// Validate every generated local URL and fragment, including cross-article links.
for (const [path,html] of output) {
 for (const [,url] of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
  if (/^(https:|mailto:)/.test(url)) continue;
  const [target,anchor] = url.split('#'), dest=target||path;
  if (output.has(dest)) {
   if (anchor && !output.get(dest).includes(`id="${anchor}"`)) throw new Error(`Broken fragment ${url} in ${path}`);
  } else {
   const file=dest.endsWith('/')?dest+'index.html':dest;
   await access(root+file);
   if (anchor && !(await readFile(root+file,'utf8')).includes(`id="${anchor}"`)) throw new Error(`Broken anchor ${url}`);
  }
 }
}
for (const [path,html] of output) {await mkdir(root+path,{recursive:true}); await writeFile(root+path+'index.html',html+'\n');}
const sitemap = (await readFile(root+'sitemap.xml','utf8')).replace(/\s*<!-- documentation --><url>[\s\S]*?<\/url>/g,'');
const urls = [...output.keys()].filter(p=>activeLocales.some(locale=>p.startsWith(route(locale)))).map(p=>`  <!-- documentation --><url><loc>${origin+p}</loc><changefreq>monthly</changefreq></url>`).join('\n');
await writeFile(root+'sitemap.xml',sitemap.replace('</urlset>',`${urls}\n</urlset>`));
console.log(`Built ${articles.length} articles, ${output.size} routes, and ${activeLocales.length} local search indexes.`);
