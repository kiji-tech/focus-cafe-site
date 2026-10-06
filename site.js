// サイト共通の動き：ストアのボタンの計測、ページの共有、スマホの下に固定するボタン
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

  // ページを共有する（iPhone の人向け。iPhone 版の公開までは、Android の友達に教えてもらう）
  document.querySelectorAll('[data-share]').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const data = {
        title: 'Focus Cafe',
        text: '仲間とゆるく、カフェで集中。通話なしで一緒に作業できるポモドーロタイマーアプリ',
        url: 'https://focuscafe.libetech.info/',
      };
      send('share_click', { placement: btn.dataset.share, page: location.pathname });
      try {
        if (navigator.share) {
          await navigator.share(data);
        } else {
          await navigator.clipboard.writeText(data.url);
          const label = btn.textContent;
          btn.textContent = 'URL をコピーしました';
          setTimeout(() => { btn.textContent = label; }, 2000);
        }
      } catch {
        // 共有をキャンセルしたとき
      }
    });
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
