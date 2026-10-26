import {readFile,writeFile,mkdir} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import path from 'node:path';

const root=fileURLToPath(new URL('../',import.meta.url));
const escape=value=>String(value).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&#39;');
export function validateEnrollmentLinks(links) {
  if(JSON.stringify(Object.keys(links).sort())!==JSON.stringify(['android','ios']))throw new Error('Expected iOS and Android enrollment configuration');
  for(const [platform,value] of Object.entries(links)) {
    if(value===null)continue;
    const url=new URL(value);
    if(url.protocol!=='https:' || url.username || url.password || url.port)throw new Error('Enrollment URL must be a public HTTPS URL');
    if(platform==='ios' && (url.hostname!=='testflight.apple.com' || !/^\/join\/[A-Za-z0-9]+$/.test(url.pathname)))throw new Error('Expected a TestFlight enrollment link');
    if(platform==='android' && (url.hostname!=='play.google.com' || url.pathname!=='/apps/testing/uk.co.ekeller.tunefinder'))throw new Error('Expected the TuneFinder Play testing link');
    if(!['ios','android'].includes(platform))throw new Error('Unknown enrollment platform');
  }
}
export async function buildBeta() {
  const data=JSON.parse(await readFile(path.join(root,'content/beta-1.6.json'),'utf8'));
  validateEnrollmentLinks(data.links);
  const route=locale=>locale==='en'?'/beta/':`/${locale}/beta/`;
  const home=locale=>locale==='en'?'/':`/${locale}/`;
  const names={en:'English',fr:'Français',pt:'Português',de:'Deutsch',es:'Español',it:'Italiano'};
  for(const [locale,c] of Object.entries(data.locales)) {
    const enroll=(platform,label)=>data.links[platform]?`<a class="beta-button" href="${escape(data.links[platform])}">${escape(label)}</a>`:`<p class="beta-pending">${escape(c.pending)}</p>`;
    const html=`<!doctype html>
<html lang="${locale}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${escape(c.eyebrow)} — TuneFinder</title><meta name="description" content="${escape(c.intro)}"><link rel="canonical" href="https://tunefinder.app${route(locale)}">${Object.keys(data.locales).map(l=>`<link rel="alternate" hreflang="${l}" href="https://tunefinder.app${route(l)}">`).join('')}<link rel="stylesheet" href="/beta.css"><link rel="icon" href="/tune-finder-logo.png"></head>
<body><div class="beta-shell"><header><a class="brand" href="${home(locale)}"><img src="/tune-finder-logo.png" alt="">TuneFinder</a><nav aria-label="${escape(c.language)}">${Object.entries(names).map(([l,name])=>`<a href="${route(l)}" lang="${l}"${l===locale?' aria-current="page"':''}>${name}</a>`).join('')}</nav></header>
<main><section class="beta-hero"><div><p class="eyebrow">${escape(c.eyebrow)}</p><h1>${escape(c.title)}</h1><p class="lead">${escape(c.intro)}</p><p>${escape(c.eligibility)}</p><a class="beta-button" href="#join">${escape(c.join)}</a><a class="secondary" href="${home(locale)}docs/">${escape(c.guide)}</a></div><figure><img src="/screenshots/${locale}/search-results.png" alt="${escape(c.current)}" width="1320" height="2868"><figcaption>${escape(c.imageCaption)}</figcaption></figure></section>
<section class="providers" id="join" aria-label="${escape(c.join)}"><article><p class="eyebrow">iOS</p><h2>${escape(c.appleTitle)}</h2><p>${escape(c.apple)}</p>${enroll('ios',c.appleCta)}</article><article><p class="eyebrow">Android</p><h2>${escape(c.androidTitle)}</h2><p>${escape(c.android)}</p>${enroll('android',c.androidCta)}</article></section>
<section class="review"><p class="eyebrow">PDF → ${escape(c.reviewTitle)}</p><h2>${escape(c.reviewTitle)}</h2><p>${escape(c.review)}</p></section></main><footer><a href="mailto:contact@tunefinder.app?subject=TuneFinder%201.6%20beta">${escape(c.feedback)}</a><a href="${home(locale)}">${escape(c.home)}</a></footer></div></body></html>\n`;
    await mkdir(path.join(root,route(locale)),{recursive:true});
    await writeFile(path.join(root,route(locale),'index.html'),html);
  }
}
if(process.argv[1] && path.resolve(process.argv[1])===fileURLToPath(import.meta.url))await buildBeta();
