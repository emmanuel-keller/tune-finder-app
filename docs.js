import {queryTerms, prepareIndex, searchIndex, snippetFor, readPlatform, savePlatform, platformForHeading, platformFromQuery} from './docs-behavior.mjs';
(() => {
  const locale = document.body.dataset.locale;
  const menu = document.querySelector('.guide-menu');
  if (menu) {
    const layout = window.matchMedia('(min-width: 701px)');
    menu.open = layout.matches;
    layout.addEventListener('change', event => {menu.open = event.matches;});
  }
  const picker = document.querySelector('.platform-picker');
  let storage;
  try {storage = localStorage;} catch {}
  const appPlatform = platformFromQuery(location.search);
  let preferredPlatform = appPlatform ?? readPlatform(storage);
  if (appPlatform) savePlatform(storage, appPlatform);
  const applyPlatform = (value, respectHeading = true) => {
    const heading = document.getElementById(location.hash.slice(1));
    const effectivePlatform = platformForHeading(value, respectHeading ? heading?.closest('[data-platform]')?.dataset.platform : undefined);
    document.querySelectorAll('[data-platform]').forEach(section => {
      section.hidden = effectivePlatform !== 'all' && section.dataset.platform !== effectivePlatform;
    });
    if (picker) picker.querySelectorAll('input').forEach(input => {input.checked=input.value===effectivePlatform;});
  };
  if (picker) {
    picker.hidden = false; applyPlatform(preferredPlatform);
    picker.addEventListener('change', event => {
      if (!['all','ios','android'].includes(event.target.value)) return;
      // Explicit user choices supersede the app hint and opposing heading.
      const headingPlatform = document.getElementById(location.hash.slice(1))?.closest('[data-platform]')?.dataset.platform;
      const clearHeading = headingPlatform && event.target.value !== headingPlatform;
      const query = new URLSearchParams(location.search);
      const hadHint = query.has('platform');
      query.delete('platform');
      if (hadHint || clearHeading) {
        const search = query.toString();
        history.replaceState(null, '', location.pathname + (search ? '?' + search : '') + (clearHeading ? '' : location.hash));
      }
      preferredPlatform = event.target.value;
      applyPlatform(preferredPlatform, false);
      savePlatform(storage, preferredPlatform);
    });
    window.addEventListener('hashchange',()=>applyPlatform(preferredPlatform));
  }
  const panel = document.querySelector('[data-search]');
  if (!panel) return;
  const input = panel.querySelector('input'), list = panel.querySelector('ul'), status = panel.querySelector('[role=status]');
  let index = null, failed = false;
  const render = () => {
    list.replaceChildren(); status.textContent = '';
    const terms = queryTerms(input.value);
    if (!terms.length) return;
    if (failed) {status.textContent = document.body.dataset.error; return;}
    if (!index) return;
    const results = searchIndex(index, terms);
    status.textContent=results.length?`${results.length} ${document.body.dataset.count}`:document.body.dataset.empty;
    for (const a of results) {
      const li=document.createElement('li'), link=document.createElement('a'), snippet=document.createElement('p');
      link.href=a.url; link.textContent=a.title;
      snippet.textContent = snippetFor(a, terms);
      li.append(link,snippet); list.append(li);
    }
  };
  panel.hidden=false; input.addEventListener('input',render);
  const base=locale==='en'?'/docs/':`/${locale}/docs/`;
  fetch(`${base}search-index.json`).then(response=>{if(!response.ok)throw new Error('Search unavailable');return response.json();}).then(data=>{index=prepareIndex(data);render();}).catch(()=>{failed=true;render();});
})();
