export const normalize = text => text.normalize('NFD').replace(/\p{M}/gu, '').toLocaleLowerCase();
// Preserve hyphenated support references while accepting commas and other punctuation.
export const queryTerms = query => normalize(query).match(/[\p{L}\p{N}]+(?:-[\p{L}\p{N}]+)*/gu) ?? [];
export function prepareIndex(data) {
  return data.map(article => {
    const bodyOffsets = []; let bodySearch = '', sourceOffset = 0;
    for (const character of article.text) {
      const normalized = normalize(character);
      bodySearch += normalized;
      for (let i=0;i<normalized.length;i++) bodyOffsets.push(sourceOffset);
      sourceOffset += character.length;
    }
    return {...article, bodySearch, bodyOffsets,
      haystack: normalize(`${article.title} ${article.summary} ${article.headings.join(' ')} ${article.text}`),
      titleSearch: normalize(article.title),
    };
  });
}
export function searchIndex(index, terms) {
  if (!terms.length) return [];
  return index.filter(article=>terms.every(term=>article.haystack.includes(term)))
    .sort((a,b)=>Number(terms.every(term=>b.titleSearch.includes(term)))-Number(terms.every(term=>a.titleSearch.includes(term))));
}
export function snippetFor(article, terms) {
  const anchor = [...terms].sort((a,b)=>b.length-a.length).map(term=>article.bodySearch.indexOf(term)).find(position=>position!==-1);
  if (anchor === undefined) return article.summary;
  // Map normalized offsets back to the original text (including combining accents).
  const originalAnchor = article.bodyOffsets[anchor] ?? 0;
  let start = Math.max(0,originalAnchor-45);
  if (start > 0 && !/\s/.test(article.text[start-1])) {
    while (start > 0 && !/\s/.test(article.text[start-1])) start--;
  }
  let end = Math.min(article.text.length,start+175);
  if (end < article.text.length && !/\s/.test(article.text[end])) {
    while (end < article.text.length && !/\s/.test(article.text[end])) end++;
  }
  return `${start?'…':''}${article.text.slice(start,end).trim()}${end<article.text.length?'…':''}`;
}
export function readPlatform(storage) {
  try {const value=storage.getItem('tunefinder-docs-platform');return ['all','ios','android'].includes(value)?value:'all';} catch {return 'all';}
}
export function savePlatform(storage, value) {
  try {storage.setItem('tunefinder-docs-platform', value);} catch {}
}
export function platformForHeading(value, headingPlatform) {
  return ['ios','android'].includes(headingPlatform)?headingPlatform:value;
}
