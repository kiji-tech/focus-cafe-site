# Focus Cafe の公開ページ

アプリ「Focus Cafe」のプライバシーポリシー・利用規約・サポートのページです（GitHub Pages で公開）。

- https://focuscafe.libetech.info/

## ファイル

- `index.html` と `lp.css`：トップページ（アプリの紹介）。FAQ を直したら、`<head>` の JSON-LD（FAQPage）の文も同じに直す
- `pomodoro-technique.html` などの記事：本文を書き換えたら、`<head>` の JSON-LD（Article・FAQPage）も同じに直す。記事を足したら、トップページの「読みもの」・`sitemap.xml`・`llms.txt` にも足す。`images/og-<記事>.jpg` は記事の OGP 画像
- `press.html` と `press/`：プレスキット（紹介文・基本情報・画像素材）。素材を変えたら `press/focus-cafe-presskit.zip` も作り直す（`cd press && zip -j focus-cafe-presskit.zip focus-cafe-*`）
- `site.js`：ストアのボタンの計測（GA4 の `store_click`）と、スマホの下に固定するボタン。端末の見分け（`html` の `os-ios`・`os-android`・`os-other`）は各ページの `<head>` の中で先に行う。`only-ios` は iPhone にだけ出すもの（App Store を主のボタンにした並び）、`not-ios` はそれ以外に出すもの
- Google Play へのリンク：ボタンごとに `&referrer=utm_source%3Dfocuscafe_site%26utm_medium%3D<ボタンの場所>%26utm_campaign%3D<ページ>` を付け、`data-store="google_play" data-placement="<ボタンの場所>"` を書く（構造化データの URL には付けない）
- `lp.css`・`style.css`・`site.js` を変えたら、各ページの読み込みの `?v=YYYYMMDD` を上げる（GitHub Pages はファイルをブラウザに10分キャッシュさせるので、上げないと新しい HTML と古い CSS が組み合わさって表示が崩れる）
- `style.css`：プライバシーポリシー・利用規約・サポート・アカウント削除のページ
- `llms.txt`：AI 向けのアプリの要約。トップページの機能・料金・FAQ を変えたら、こちらも同じに直す
- `robots.txt` / `sitemap.xml` / `CNAME`：クローラー向けの設定と、独自ドメイン（focuscafe.libetech.info）
- `og.jpg`：SNS でシェアされたときの画像（1200×630）
- `images/`：トップページの画像
  - `cafe-morning.webp` / `cafe-day.webp` / `cafe-evening.webp` / `cafe-night.webp`：アプリのリポジトリの `design/blender/cafe_render.py` を `full` モード・1560×3376 で描き（1つ目の引数が時間帯 `morning|day|evening|night`）、カフェの部分（左上 54,895 から 1440×1219）を切り出して幅1000px にしたもの。切り出したままの PNG はプレスキットの `press/focus-cafe-cafe-<時間帯>.png`
  - `screen-home.webp` / `screen-stats.webp`：ストア用のスクリーンショットから画面の部分を切り出したもの
  - `avatar.webp`：アプリのリポジトリの `design/renders/avatar_closeup.png`
