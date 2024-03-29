# インストーラー設計書

baserCMSのセットアップとして、サーバー環境のチェック、DBの構築、管理者ユーザーの作成、および、初期設定を行う。

## ユースケース図

![ユースケース図：固定ページ管理](../../../svg/use_case/baser-core/installer.svg)

 
## 機能
### ブラウザインストール
#### composer でライブラリのインストール
インストーラーを動作させるために、composer を利用してライブラリのインストールが必要となる。  
`/composer_installer.php` として、単独のファイルとして実装する。

ブラウザでアクセスした際、`/vendor/autoload.php` が存在しない場合に、`/webroot/index.php` より呼び出す。 インストールが完了すると、baserCMSのインストーラーに遷移する。


#### サーバー環境のチェック
##### 基本必須条件
インストール要件として次の項目をチェックする
- PHPバージョン：8以降
- 書込み権限のチェック
  - tmp
  - config
  - webroot/files
  - plugins
- 文字コード：UTF-8
- PHPモジュール：GD / DOMDocument

##### オプション要件
- 書き込み権限チェック
  - db
- PHPのメモリ上限

#### データベースの接続チェック
ホスト名、ユーザー名、パスワード、DB名を入力し、データベースへの接続ができるか確認する。

#### データベースの構築
Migration を利用してデータベースにテーブルを作成する。

#### 初期設定
次について入力、選択し初期データのセットアップを行う。

- フロントテーマ
- 初期データパターン

※ セットアップ処理の実装については、Seedは利用せず CSV を利用する。

#### サイト名と管理ユーザー登録
次について入力し、ログインするための管理ユーザーを作成する。
- サイト名
- メールアドレス
- パスワード

インストール完了時に完了メールを送信する。

 
### コマンドラインインストール
ワンラインのコマンドでインストールができる。

 
### リセット
データベースと設定をリセットする。

### バックアップダウンロード
※ 実装方法検討要。SeedにするかCSVにするか、どこに実装するか。

 
### ucmitzにおける変更点
- インストーラーは、BcInstaller としてプラグイン化する
- BcManagerComponent を InstallationsService に移行する
- インストール時にサイト名を設定できるようにする
- 管理ユーザー作成の際、アカウント名は入力しない
- テーブルの作成と初期データの作成の処理を分ける
- テーマのデプロイは、シンボリックリンクの作成に変更し、CakePHPのコマンドを利用する
- 固定ページの作成処理は不要
- install.php にデータベース定義を書き出し、database.php は廃止とする

 
## クラス図
### インストーラー
![クラス図：インストーラー](../../../svg/class/bc-installer/installer.svg)
　
