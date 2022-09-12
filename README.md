# raion

<img width="91" alt="logo-transparent" src="https://user-images.githubusercontent.com/105682555/189569009-f34bd847-62f2-4924-a3e7-42ce76a6c156.png">

## 本アプリの概要
ライブ会場にレビューを付けられるアプケーションです。

#### デプロイ先
https://reviewsite2-laravel9-react.herokuapp.com/

#### 注意
本アプリは制作途中です。

#### 実装済み機能
- 会員登録機能
- レビュー投稿のCRUD
- いいね、ブックマーク機能
- 画像投稿機能（S3）
- マイページ機能
- 画像投稿機能（S3）
- 検索機能
- お問い合わせ機能


#### 今後の展望
- ソーシャルログイン(Google,Twitterなど)
- ハンバーガーボタン
- SNS共有ボタン
- 全体的なデザインの修正
- TypeScriptを導入

---

## 使用技術
#### 実装済み機能
- React

#### 実装済み機能

- Laravel9

#### 実装済み機能
- Docker
- MySQL

---

## 構成

```	
reviewsite2-laravel9-react-docker
|
├─ app
│    ├─ Console
│    │
│    │
│    ├─ Exceptions
│    │
│    │
│    └─ 
│
│─ .editorconfig
│─ .env
│─ .env.example
│─ .gitattributes
│─ .gitignore
│─ .zshrc
│─ artisan
│─ composer.json
│─ composer.lock
│─ docker-compose.yml
│─ jsconfig.json
│─ my.cnf
│─ package-lock.json
│─ package.json
│─ phpunit.xml
│─ postcss.config.js
│─ Procfile
│─ README.md
│─ tailwind.config.js
│─ vite.config.js

```

---

## 環境の立ち上げ方
1. DockerDesktopのインストール
2. このリポジトリをクローン
3. 対象箇所で下記を実行
```
//reviewsite2-laravel9-react-dockerで下記を実行

＄ sail up -d
```

4. migration
```
//reviewsite2-laravel9-react-dockerで下記を実行
$ sail artisan migrate
$ sail artisan db:seed

　5. composer、node.jsのインストール



6.リモートでアプリケーションを起動
$ sail up -d
$ npm run dev
// localhostにアクセスするとプレビューが確認できる



#### dockerの停止
```
// dockerコンテナの停止
$ sail stop

// dockerコンテナの削除
$ sail down
```
