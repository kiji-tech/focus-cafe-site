// サイト共通の動き：ストアのボタンの計測、スマホの下に固定するボタン
// 端末の見分け（html の os-ios / os-android / os-other）は、表示がちらつかないよう <head> の中で先にしている
(() => {
  const send = (name, params) => {
    if (typeof window.gtag === 'function') window.gtag('event', name, params);
  };

  // ストアのボタン（data-store）が押されたら GA4 に送る。どこのボタンかは data-placement
  document.addEventListener('click', (e) => {
    const store = e.target.closest('[data-store]');
    if (store) {
      send('store_click', { store: store.dataset.store, placement: store.dataset.placement || '', page: location.pathname });
    }
  });

  // スマホの下に固定するボタン：最初のボタン（ヒーローや記事の見出し）が見えなくなったら出す
  // 最後の呼びかけ（同じストアのボタンがある）やフッターが見えているあいだは、重ならないよう隠す
  const bar = document.querySelector('.sticky-cta');
  const anchor = document.querySelector('[data-sticky-after]');
  if (bar && anchor && 'IntersectionObserver' in window) {
    let passed = false;
    const covering = new Set();
    const update = () => bar.classList.toggle('show', passed && covering.size === 0);
    new IntersectionObserver(([entry]) => {
      passed = !entry.isIntersecting && entry.boundingClientRect.top < 0;
      update();
    }).observe(anchor);
    const hideWhenVisible = new IntersectionObserver((entries) => {
      entries.forEach((e) => (e.isIntersecting ? covering.add(e.target) : covering.delete(e.target)));
      update();
    });
    document.querySelectorAll('.closing, .site-footer').forEach((el) => hideWhenVisible.observe(el));
  }
})();
