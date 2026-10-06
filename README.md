# Focus Cafe の公開ページ

アプリ「Focus Cafe」のプライバシーポリシー・利用規約・サポートのページです（GitHub Pages で公開）。

- https://focuscafe.libetech.info/

## ファイル

- `index.html` と `lp.css`：トップページ（アプリの紹介）。FAQ を直したら、`<head>` の JSON-LD（FAQPage）の文も同じに直す
- `pomodoro-technique.html` などの記事：本文を書き換えたら、`<head>` の JSON-LD（Article・FAQPage）も同じに直す。記事を足したら、トップページの「読みもの」・`sitemap.xml`・`llms.txt` にも足す。`images/og-<記事>.jpg` は記事の OGP 画像
- `press.html` と `press/`：プレスキット（紹介文・基本情報・画像素材）。素材を変えたら `press/focus-cafe-presskit.zip` も作り直す（`cd press && zip -j focus-cafe-presskit.zip focus-cafe-*`）
- `style.css`：プライバシーポリシー・利用規約・サポート・アカウント削除のページ
- `llms.txt`：AI 向けのアプリの要約。トップページの機能・料金・FAQ を変えたら、こちらも同じに直す
- `robots.txt` / `sitemap.xml` / `CNAME`：クローラー向けの設定と、独自ドメイン（focuscafe.libetech.info）
- `og.jpg`：SNS でシェアされたときの画像（1200×630）
- `images/`：トップページの画像
  - `cafe-night.webp` / `cafe-day.webp`：アプリのリポジトリの `design/blender/cafe_render.py` を `full` モード・1560×3376 で描き、カフェの部分を切り出して幅1000px にしたもの
  - `screen-home.webp` / `screen-stats.webp`：ストア用のスクリーンショットから画面の部分を切り出したもの
  - `avatar.webp`：アプリのリポジトリの `design/renders/avatar_closeup.png`
