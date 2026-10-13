(() => {
  const locale = document.body.dataset.locale;
  const menu = document.querySelector('.guide-menu');
  if (menu) {
    const layout = window.matchMedia('(min-width: 701px)');
    menu.open = layout.matches;
    layout.addEventListener('change', event => {menu.open = event.matches;});
  }
  const normalize = text => text.normalize('NFD').replace(/\p{M}/gu, '').toLocaleLowerCase();
  const picker = document.querySelector('.platform-picker');
  let platform = 'all';
  try {const saved = localStorage.getItem('tunefinder-docs-platform'); if (['all','ios','android'].includes(saved)) platform = saved;} catch {}
  const applyPlatform = value => {
    platform = value;
    document.querySelectorAll('[data-platform]').forEach(section => {
      // A direct heading link always remains visible, even if a prior preference differs.
      section.hidden = value !== 'all' && section.dataset.platform !== value && !section.querySelector(`[id="${location.hash.slice(1).replace(/[^a-z0-9-]/g,'')}"]`);
    });
    if (picker) picker.querySelectorAll('input').forEach(input => {input.checked=input.value===value;});
  };
  if (picker) {
    picker.hidden = false; applyPlatform(platform);
    picker.addEventListener('change', event => {
      if (!['all','ios','android'].includes(event.target.value)) return;
      applyPlatform(event.target.value);
      try {localStorage.setItem('tunefinder-docs-platform', platform);} catch {}
    });
    window.addEventListener('hashchange',()=>applyPlatform(platform));
  }
  const panel = document.querySelector('[data-search]');
  if (!panel) return;
  const input = panel.querySelector('input'), list = panel.querySelector('ul'), status = panel.querySelector('[role=status]');
  let index = null, failed = false;
  const render = () => {
    list.replaceChildren(); status.textContent = '';
    const query = normalize(input.value.trim());
    if (!query) return;
    if (failed) {status.textContent = document.body.dataset.error; return;}
    if (!index) return;
    const terms=query.split(/\s+/);
    const results=index.filter(a=>terms.every(t=>normalize(`${a.title} ${a.summary} ${a.headings.join(' ')} ${a.text}`).includes(t))).sort((a,b)=>Number(normalize(b.title).includes(query))-Number(normalize(a.title).includes(query)));
    status.textContent=results.length?`${results.length} ${document.body.dataset.count}`:document.body.dataset.empty;
    for (const a of results) {
      const li=document.createElement('li'), link=document.createElement('a'), snippet=document.createElement('p');
      link.href=a.url; link.textContent=a.title;
      // Prefer a specific matching keyword over a short/common first term.
      const body = normalize(a.text);
      const anchor = [...terms].sort((a,b)=>b.length-a.length).map(term=>body.indexOf(term)).find(position=>position!==-1);
      if (anchor === undefined) {snippet.textContent = a.summary;}
      else {
        const offset = Math.max(0, anchor-45);
        snippet.textContent=`${offset?'…':''}${a.text.slice(offset,offset+175)}${a.text.length>offset+175?'…':''}`;
      }
      li.append(link,snippet); list.append(li);
    }
  };
  panel.hidden=false; input.addEventListener('input',render);
  const base=locale==='en'?'/docs/':`/${locale}/docs/`;
  fetch(`${base}search-index.json`).then(response=>{if(!response.ok)throw new Error('Search unavailable');return response.json();}).then(data=>{index=data;render();}).catch(()=>{failed=true;render();});
})();
