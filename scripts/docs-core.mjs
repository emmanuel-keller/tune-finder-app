import {ui, activeLocales} from './docs-ui.mjs';
import {readFile, readdir} from 'node:fs/promises';
export const locales = ['en', 'fr', 'pt', 'de', 'es', 'it'];
export const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export const route = (locale, id = '') => `${locale === 'en' ? '' : `/${locale}`}/docs/${id ? `${id}/` : ''}`;
export const normalize = text => text.normalize('NFD').replace(/\p{M}/gu, '').toLocaleLowerCase();
export function safeUrl(url) {
  if (/^(?:\/(?!\/)|#[a-z0-9-]+$|https:\/\/|mailto:)/.test(url) && !/[<>"\s\\]/.test(url)) return url;
  throw new Error(`Unsafe link: ${url}`);
}
export function inline(text) {
  // Parse Markdown first, then escape prose and each attribute exactly once.
  const tokens = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g;
  let html = '', offset = 0;
  for (const match of text.matchAll(tokens)) {
    html += escape(text.slice(offset, match.index));
    html += match[3] !== undefined ? `<strong>${inline(match[3])}</strong>`
      : `<a href="${escape(safeUrl(match[2]))}">${inline(match[1])}</a>`;
    offset = match.index + match[0].length;
  }
  return html + escape(text.slice(offset));
}
export function parseArticle(source, locale, filename) {
  const match = source.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) throw new Error(`Missing metadata: ${filename}`);
  const meta = JSON.parse(match[1]);
  if (!/^[a-z][a-z0-9-]*$/.test(meta.id) || filename !== `${meta.id}.md`) throw new Error('Invalid article ID');
  for (const key of ['title','summary','section','minVersion','verifiedRelease']) if (typeof meta[key] !== 'string' || !meta[key].trim()) throw new Error(`Missing ${key}`);
  if (!Number.isInteger(meta.order) || meta.order < 1 || !Array.isArray(meta.related) || !meta.related.every(id => /^[a-z][a-z0-9-]*$/.test(id))) throw new Error('Invalid article navigation');
  if (!Array.isArray(meta.platforms) || !meta.platforms.length || !meta.platforms.every(p => ['ios','android'].includes(p))) throw new Error('Invalid platforms');
  if (!/^\d+\.\d+\.\d+$/.test(meta.minVersion) || !/^\d+\.\d+\.\d+$/.test(meta.verifiedRelease)) throw new Error('Invalid release');
  return {...meta, locale, body: match[2]};
}
export function renderMarkdown(body, locale) {
  const headings = [], html = []; let paragraph = [], list = [], platform = null;
  const flush = () => {
    if (paragraph.length) {html.push(`<p>${inline(paragraph.join(' '))}</p>`); paragraph = [];}
    if (list.length) {html.push(`<ol>${list.map(line => `<li>${inline(line)}</li>`).join('')}</ol>`); list = [];}
  };
  for (const line of body.split('\n')) {
    if (!line.trim()) {flush(); continue;}
    const heading = line.match(/^(#{2,3}) (.+) \{#([a-z][a-z0-9-]*)\}$/);
    const image = line.match(/^!\[(.+)\]\(([^)]+)\)$/);
    const item = line.match(/^\d+\. (.+)$/);
    if (line.startsWith(':::')) {
      flush();
      if (line === ':::') {if (!platform) throw new Error('Unmatched platform end'); html.push('</section>'); platform = null;}
      else {if (platform || !/^::: (ios|android)$/.test(line)) throw new Error('Invalid platform block'); platform = line.slice(4); html.push(`<section data-platform="${platform}" class="platform-section">`);}
    } else if (heading) {
      flush(); if (headings.some(h => h.id === heading[3])) throw new Error('Duplicate heading anchor');
      headings.push({id:heading[3], title:heading[2], level:heading[1].length});
      html.push(`<h${heading[1].length} id="${heading[3]}">${escape(heading[2])}</h${heading[1].length}>`);
    } else if (image) {
      flush(); const url = safeUrl(image[2]);
      if (!url.startsWith(`/screenshots/${locale}/`)) throw new Error('Screenshot must match article language');
      html.push(`<figure><a href="${escape(url)}"><img src="${escape(url)}" alt="${escape(image[1])}" loading="lazy" width="420" height="910"></a><figcaption>${escape(image[1])} · <a href="${escape(url)}">${escape(ui[locale].openImage)}</a></figcaption></figure>`);
    } else if (item) {if (paragraph.length) flush(); list.push(item[1]);}
    else {if (list.length) flush(); if (line.startsWith('#') || line.startsWith('![')) throw new Error(`Unsupported Markdown: ${line}`); paragraph.push(line);}
  }
  flush(); if (platform) throw new Error('Unclosed platform block');
  return {html:html.join('\n'), headings, text:body.replace(/!\[[^\]]+\]\([^)]+\)/g,'').replace(/\[([^\]]+)\]\([^)]+\)/g,'$1').replace(/\{#[^}]+\}|::: ?\w*|[#*]/g,'').replace(/\s+/g,' ').trim()};
}
export async function loadArticles(root) {
  const articles = [];
  for (const locale of activeLocales) {
    for (const filename of (await readdir(`${root}/content/docs/${locale}`)).filter(f => f.endsWith('.md')).sort()) {
      articles.push(parseArticle(await readFile(`${root}/content/docs/${locale}/${filename}`, 'utf8'), locale, filename));
    }
  }
  const keys = new Set(articles.map(a => `${a.locale}/${a.id}`));
  if (keys.size !== articles.length) throw new Error('Duplicate article IDs');
  for (const a of articles) {
    if (activeLocales.some(locale=>!keys.has(`${locale}/${a.id}`))) throw new Error(`Missing prototype translation: ${a.id}`);
    for (const id of a.related) if (!keys.has(`${a.locale}/${id}`) || id === a.id) throw new Error(`Invalid related article: ${id}`);
  }
  return articles.sort((a,b) => a.order - b.order);
}
