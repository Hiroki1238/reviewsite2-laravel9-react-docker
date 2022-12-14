# raion

<img width="91" alt="raion_logo" src="https://user-images.githubusercontent.com/105682555/201507595-326dd310-0420-4194-a3fa-f8e6b183b3f0.png">
ライブ会場にレビューを付けられるアプケーションです。

## 本アプリの概要
本アプリは主に以下の二点を目的としたアプリケーションです。
1. 当選した座席の番号から、その席の見やすさの情報を得ることができる
2. ライブ会場にレビューをつけられるので、遠征してライブに参戦する方にとって申し込む会場選びの助けになる
3. ライブ会場までのアクセスやトイレの数などといった設備の良さを事前に知ることができる

#### デプロイ先
https://reviewsite2-laravel9-react.herokuapp.com/

#### テスト用アカウント
氏：テスト  
名：てすと  
ユーザー名：テスト用  
メールアドレス：test@gmail.com  
パスワード：testtest  

#### 注意
本アプリは制作途中です。

#### 制作背景
ライブの当日までに自分の座席は発表されますが、実際に会場へ行ってみると番号から予想していた距離感よりも遠く、双眼鏡を持ってこなかったことや、多額の交通費をかけて遠い会場まで来たことを後悔する事があります。  
会場の座席から撮った写真が画像検索で出てきますが、そのような画像が大変参考になると感じていました。しかし、こういった情報がまとめられているライブ会場にレビューをつけるアプリが見当たらなかったため、自分で開発することにしました。

---

## 実装済み機能
#### 一般ユーザー
- 会員登録機能
- レビュー投稿のCRUD
- レビューの写真がグリッドで表示される機能
- いいね、ブックマーク機能
- 画像投稿機能（S3）
- マイページ機能
- 画像投稿機能（S3）
- 検索機能
- お問い合わせ機能

#### 管理者
- 管理者ログイン
- 会場の新規登録・修正・削除機能
- 不適切なレビューの削除機能
- お問い合わせ返信機能



#### 今後の展望
- ソーシャルログイン(Google,Twitterなど)
- ハンバーガーボタン
- SNS共有ボタン
- 全体的なデザインの修正
- TypeScriptを導入

---

## 使用技術
#### フロントエンド
- React
- HTML
- CSS(Tailwind)

#### バックエンド
- Laravel9 (PHP)

#### インフラ
- Docker
- MySQL
- Google+ API
- Amazon S3

#### その他
- Visual Studio Code

---

## 構成図
※修正中です。

---

## データベース設計

#### 各テーブルについて
|テーブル名|説明|
| :---: | :---: |
|  users  |  一般ユーザー情報  |
|  admins  |  管理者ユーザー情報  |
|  reviews  |  レビューの情報  |
|  images  |  レビュー投稿時に添付した画像のパスの情報  |
|  venues  |  全国のライブ会場の情報  |
|  prefectures  |  都道府県の情報  |
|  regions  |  地方の情報  |
|  contacts  |  お問い合せ内容の情報  |
|  likes  |  会場に対するお気に入り  |
|  bookmarks  |  レビューに対するブックマーク  |

<img width="1000" alt="ER-diagram" src="https://user-images.githubusercontent.com/105682555/201507926-1d6b97ad-32a5-4a41-b9e5-cc1f7a1b6f37.jpg">

---

## 環境の立ち上げ方
1. DockerDesktopのインストール
2. このリポジトリをクローン
3. 対象箇所で下記を実行
```
//reviewsite2-laravel9-react-dockerで下記を実行

＄ sail up -d
```

4. マイグレーション
```
//reviewsite2-laravel9-react-dockerで下記を実行
$ sail artisan migrate
$ sail artisan db:seed
```

5. composer、node.jsのインストール
```
$composer install
$npm install
```

6.ローカルでアプリケーションを起動
```
$ sail up -d
$ npm run dev
// localhostにアクセスするとプレビューが確認できる
```

#### dockerの停止
```
// dockerコンテナの停止
$ sail stop

// dockerコンテナの削除
$ sail down
```
