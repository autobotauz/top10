// Utility helpers
function getCurrentYear(){return new Date().getFullYear();}
function getQueryParam(name){return new URLSearchParams(window.location.search).get(name);} 
function getAffiliateTag(){
  const qsTag = getQueryParam('tag');
  return qsTag || (window.TOP10_CONFIG && window.TOP10_CONFIG.associateTag) || '';
}
function slugify(str){
  return (str||'').toString().toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'');
}
function buildAmazonUrl(base, opts){
  if(!base) return '#';
  const cfg = window.TOP10_CONFIG || {};
  const trackingCfg = cfg.tracking || {};
  const overrideTag = opts?.tag || opts?.overrideTag || opts?.item?.tag; // allow per-item override
  const tag = overrideTag || getAffiliateTag();
  const prefix = trackingCfg.ascSubtagPrefix || 'itemrank';
  const subtag = trackingCfg.enableAscSubtag === false
    ? ''
    : (opts?.subtag || `${prefix}:${opts?.catId||'cat'}:${opts?.pos||'n'}:${slugify(opts?.item?.title)}`);
  try {
    const url = new URL(base);
    // If user pasted a short link (amzn.to), do not modify (tag and ascsubtag are baked into the shortlink redirect rules)
    if(url.hostname === 'amzn.to'){
      return url.toString();
    }
    // If this is an Amazon product URL, canonicalize to /dp/ASIN and append tag/ascsubtag
    const asinMatch = url.pathname.match(/\/(?:dp|gp\/product|product)\/([A-Z0-9]{10})/i);
    if(asinMatch && asinMatch[1]){
      const asin = asinMatch[1].toUpperCase();
      const host = url.hostname.includes('amazon.') ? url.hostname : 'www.amazon.com';
      const canon = new URL(`https://${host}/dp/${asin}`);
      if(tag) canon.searchParams.set('tag', tag);
      if(subtag) canon.searchParams.set('ascsubtag', subtag);
      return canon.toString();
    }
    // If already has tag, keep existing.
    if(tag && !url.searchParams.get('tag')){
      url.searchParams.set('tag', tag);
    }
    // Add per-link subtag for tracking if not present
    if(subtag && !url.searchParams.get('ascsubtag')){
      url.searchParams.set('ascsubtag', subtag);
    }
    return url.toString();
  } catch(e){
    // Not a full URL (maybe ASIN) - construct dp link
    const asin = base.replace(/[^A-Z0-9]/gi,'').substring(0,10);
    const u = new URL('https://www.amazon.com/dp/' + asin);
    if(tag) u.searchParams.set('tag', tag);
    if(subtag) u.searchParams.set('ascsubtag', subtag);
    return u.toString();
  }
}

function injectAffiliateDisclosure(){
  const el = document.getElementById('affiliate-disclosure');
  if(!el) return;
  el.textContent = "As an Amazon Associate I earn from qualifying purchases. Product availability and pricing are subject to change.";
}

function renderYearSpans(){
  const y = getCurrentYear();
  ['year','year-footer'].forEach(id=>{const el=document.getElementById(id); if(el) el.textContent = y;});
}

function niceTitleFromId(id){
  return id.split('-').map(s=>s.charAt(0).toUpperCase()+s.slice(1)).join(' ');
}

function renderIndex(){
  const wrap = document.getElementById('category-list');
  if(!wrap) return;
  const allMeta = (window.TOP10_DATA && window.TOP10_DATA.categories) || [];
  const metaMap = Object.fromEntries(allMeta.map(c=>[c.id, c]));
  const scraped = window.SCRAPED_TOP10 || {};
  const scrapedIds = Object.keys(scraped);
  // Build categories ONLY from scraped JSON; do not fall back to static
  const categories = scrapedIds.map(id=>({
    id,
    name: metaMap[id]?.name || niceTitleFromId(id),
    description: metaMap[id]?.description || 'Top 10 picks for '+niceTitleFromId(id)+'.'
  }));

  const year = getCurrentYear();
  document.title = 'Top 10 Product Lists ' + year;
  const siteNameEl = document.getElementById('site-name');
  if(siteNameEl && window.TOP10_CONFIG?.siteName){
    siteNameEl.textContent = window.TOP10_CONFIG.siteName;
  }
  if(categories.length === 0){
    wrap.innerHTML = '<p class="notice">No categories loaded. Ensure top10.json is available and page is served over HTTP/HTTPS.</p>';
    return;
  }
  wrap.innerHTML = categories.map(cat=>{
    return `<a class="category-card" href="./categories/category.html?cat=${cat.id}" aria-label="Top 10 ${cat.name} ${year}">`+
      `<h2>Top 10 ${cat.name} <span class="badge">${year}</span></h2>`+
      `<p>${cat.description}</p>`+
      `</a>`;
  }).join('');
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'name': 'Top 10 Product Categories '+year,
    'itemListElement': categories.map((cat,i)=>({
      '@type': 'ListItem',
      'position': i+1,
      'url': location.origin + location.pathname.replace(/index\.html$/,'') + 'categories/category.html?cat=' + cat.id,
      'name': 'Top 10 ' + cat.name + ' ' + year
    }))
  };
  injectJsonLd(ld);
}

function attachFilter(){
  const input = document.getElementById('category-filter');
  const countEl = document.getElementById('filter-count');
  const listWrap = document.getElementById('category-list');
  if(!input || !listWrap) return;
  const cards = Array.from(listWrap.querySelectorAll('.category-card'));
  function update(){
    const q = input.value.trim().toLowerCase();
    let visible = 0;
    cards.forEach(card=>{
      const text = card.textContent.toLowerCase();
      const match = !q || text.includes(q);
      if(match){
        card.removeAttribute('hidden');
        visible++;
      } else {
        card.setAttribute('hidden','');
      }
    });
    if(countEl){
      countEl.textContent = visible + ' / ' + cards.length + ' categories';
    }
  }
  input.addEventListener('input', update);
  update();
}

function injectJsonLd(obj){
  const script = document.createElement('script');
  script.type='application/ld+json';
  script.textContent = JSON.stringify(obj);
  document.head.appendChild(script);
}

function upsertMeta(attr, key, value){
  let el = document.head.querySelector(`${attr}[${key}="${value.key}"]`);
  // value is an object: { key: 'property'|'name', content: '...'}
}

function setMetaTag(type, name, content){
  // type: 'property' or 'name'
  let el = document.head.querySelector(`meta[${type}="${name}"]`);
  if(!el){
    el = document.createElement('meta');
    el.setAttribute(type, name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setCanonical(href){
  if(!href) return;
  let link = document.head.querySelector('link[rel="canonical"]');
  if(!link){
    link = document.createElement('link');
    link.setAttribute('rel','canonical');
    document.head.appendChild(link);
  }
  // strip hash for canonical
  try{
    const u = new URL(href, location.origin);
    u.hash = '';
    link.setAttribute('href', u.toString());
  }catch(_){
    link.setAttribute('href', href);
  }
}

function renderCategory(){
  const catId = getQueryParam('cat');
  if(!catId){ document.getElementById('item-list').innerHTML = '<li>No category specified.</li>'; return; }
  let cat = (window.TOP10_DATA && window.TOP10_DATA.categories || []).find(c=>c.id===catId);
  if(!cat){
    // Synthesize minimal category meta from the URL if not in static data
    cat = { id: catId, name: niceTitleFromId(catId), description: 'Top 10 picks for '+niceTitleFromId(catId)+'.' };
  }
  // Prefer scraped data if available
  const scraped = window.SCRAPED_TOP10 && window.SCRAPED_TOP10[catId];
  let items = cat.items;
  if(scraped && Array.isArray(scraped) && scraped.length){
    // Deduplicate by ASIN keeping first occurrence
    const seen = new Set();
    items = scraped.filter(it=>{
      const key = it.asin || it.url;
  // Set SEO basics
  setMetaTag('name','robots','index,follow');
  setCanonical(location.origin + location.pathname);
      if(seen.has(key)) return false;
      seen.add(key);
      return true;
    }).map(it=>({
      title: it.title,
      asin: it.asin,
      url: it.url,
      img: it.img,
      badge: it.badge,
      rating: it.rating,
      reviews_count: it.reviews_count
    }));
  }
  const year = getCurrentYear();
  document.getElementById('category-name').textContent = cat.name;
  document.getElementById('category-intro').textContent = cat.description + ' These are our picks for ' + year + '.';
  const titleEl = document.getElementById('page-title');
  if(titleEl) titleEl.textContent = 'Top 10 ' + cat.name + ' ' + year;
  const metaDesc = document.getElementById('meta-description');
  if(metaDesc) metaDesc.setAttribute('content', 'Top 10 ' + cat.name + ' for ' + year + '.');
  // SEO: robots + canonical for category
  setMetaTag('name','robots','index,follow');
  setCanonical(location.origin + location.pathname + '?cat=' + encodeURIComponent(cat.id));
  // Social meta (best-effort; some crawlers may not execute JS)
  setMetaTag('property','og:title','Top 10 '+cat.name+' '+year);
  setMetaTag('property','og:description','The 10 picks we recommend for '+cat.name+' in '+year+'.');
  setMetaTag('property','og:image','https://item-rank.com/assets/og-default.svg');
  setMetaTag('name','twitter:title','Top 10 '+cat.name+' '+year);
  setMetaTag('name','twitter:description','The 10 picks we recommend for '+cat.name+' in '+year+'.');
  setMetaTag('name','twitter:image','https://item-rank.com/assets/og-default.svg');
  const list = document.getElementById('item-list');
  list.innerHTML = items.map((item,idx)=>{
    const productUrl = buildAmazonUrl(item.asin || item.url, {catId: cat.id, pos: idx+1, item});
    const jsonPos = idx+1;
    const ratingHtml = (item.rating && item.reviews_count) ? `<div class="rating">Rating: ${item.rating} ★ · ${item.reviews_count.toLocaleString()} reviews</div>` : '';
    return `<li class="item" data-rank="${jsonPos}">`+
      `<div><img class="thumb" alt="${item.title}" loading="lazy" src="${item.img || '../assets/placeholder.svg'}" onerror="this.style.display='none'" /></div>`+
      `<div>`+
      `<h3>#${jsonPos} ${item.title}`+
      (item.badge?` <span class="badge-inline">${item.badge}</span>`:'')+
      `</h3>`+
      (item.note?`<p>${item.note}</p>`:'')+
      ratingHtml+
      `<div class="microcopy">Rank #${jsonPos} — ${item.badge || ('Top pick for '+cat.name)}</div>`+
      `<div class="actions">`+
      `<a class="btn" rel="nofollow sponsored" target="_blank" href="${productUrl}">View on Amazon</a>`+
      `</div>`+
      `</div>`+
      `</li>`;
  }).join('');
  // Structured data for item list
  const ld = {
    '@context':'https://schema.org',
    '@type':'ItemList',
    'name':'Top 10 '+cat.name+' '+year,
    'itemListElement': items.map((item,i)=>({
      '@type':'ListItem',
      'position': i+1,
      'url': buildAmazonUrl(item.asin || item.url, {catId: cat.id, pos: i+1, item}),
      'name': item.title
    }))
  };
  injectJsonLd(ld);
}

// Attempt to load scraped top10.json and expose as window.SCRAPED_TOP10
async function loadScrapedData(){
  // If opened directly from disk (file://), browsers block fetch for local files.
  // In that case, immediately return any embedded dataset to avoid CORS errors.
  if (location.protocol === 'file:') {
    console.warn('Cannot fetch top10.json over file://. Serve over HTTP/HTTPS to load dynamic categories.');
    return {};
  }
  // Always try to fetch latest file first; fall back to any embedded global
  const candidates = [
    './top10.json', // index page
    '../top10.json', // category page
    'top10.json',
    'assets/top10.json',
    '../assets/top10.json'
  ];
  for(const path of candidates){
    try{
      const url = path + (path.includes('?') ? '&' : '?') + 't=' + Date.now();
      const res = await fetch(url, { cache: 'no-cache' });
      if(!res.ok) continue;
      const json = await res.json();
      // Transform to { [categoryId]: items[] }
      const out = {};
      json.forEach(entry=>{
        const catId = entry.category;
        if(!catId || !Array.isArray(entry.items)) return;
        const seen = new Set();
        const items = [];
        entry.items.forEach(it=>{
          const key = it.asin || it.url;
          if(!key || seen.has(key)) return;
          seen.add(key);
          items.push({
            title: it.title,
            asin: it.asin,
            url: it.url,
            img: it.img,
            badge: it.badge,
            rating: it.rating,
            reviews_count: it.reviews_count
          });
        });
        out[catId] = items;
      });
      window.SCRAPED_TOP10 = out; // update cache with freshest data
      return out;
    }catch(e){ /* try next */ }
  }
  window.SCRAPED_TOP10 = {};
  return {};
}

async function init(){
  renderYearSpans();
  injectAffiliateDisclosure();
  // Load scraped dataset in background; category page will await if needed
  const pageType = document.body.getAttribute('data-page');
  const loadPromise = loadScrapedData().catch(()=>({}));
  if(pageType==='index'){
    await loadPromise; // ensure we have scraped keys for building the index
    renderIndex();
    attachFilter();
  }
  else if(pageType==='category'){
    // Ensure scraped data attempted before render
    await loadPromise;
    renderCategory();
  }
}

document.addEventListener('DOMContentLoaded', init);