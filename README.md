# あおのホームページ

GitHub Pages で公開できる静的サイトです。  
`index.html` を入口に、自己紹介・作品一覧・問い合わせページへ移動できます。

## ファイル構成

- `index.html` : ホーム
- `about.html` : 自己紹介
- `projects.html` : 作品一覧
- `contact.html` : 問い合わせ
- `styles.css` : 共通スタイル（パステル調）
- `theme.js` : ダーク / ライト切り替え、モバイルメニュー開閉
- `downloads/` : 作品紹介テキストのダウンロード用ファイル

## GitHub Pages で公開する手順

1. このファイル一式を GitHub リポジトリのルートに push する
2. GitHub の `Settings` > `Pages` を開く
3. `Build and deployment` の `Source` を **Deploy from a branch** にする
4. Branch を `main`（または使っているブランチ） / Folder を `/ (root)` に設定して保存
5. 数分待つと、公開URL（`https://<ユーザー名>.github.io/<リポジトリ名>/`）が表示される

このサイトの公開URL想定: `https://ao03248.github.io/`

## 公開時の注意

- ページ間リンクは相対パス（`about.html` など）なので、そのままGitHub Pagesで動きます
- 画像を追加する場合は `images/` フォルダを作って管理すると整理しやすいです
- 問い合わせフォームは `FormSubmit` を利用して `ao.apps.info@gmail.com` へ送信する設定です
- テーマ設定（ライト / ダーク）はブラウザに保存され、次回アクセス時にも維持されます
- スマホ表示ではヘッダーがハンバーガーメニュー化されます
- 連絡先メール: `ao.apps.info@gmail.com`
