# ucmitz 開発への貢献方法

「ucmitz」は、baserCMSをCakePHP4に対応するプロジェクトの開発コードネームです。コアデベロッパーの gondoh が命名しました。  

開発に貢献頂ける場合は、`dev` ブランチを利用してください。

　

## 開発方針とロードマップの確認

開発に貢献する前に、開発方針とロードマップを必ず確認しましょう。ucmitz は、メジャーバージョンを３回刻んだ後、baserCMS５としてリリースされます。  
なお、ucmitz は、PHP7.2以降でのみ動作します。詳細についてはシステム要件を確認します。
- [開発方針](https://docs.google.com/document/d/1QAmScc65CwMyn8QuwWKE9q_8HnSKcW9oefI9RrHoUYY/edit)
- [ロードマップ](https://docs.google.com/spreadsheets/d/1TZ71-O_9KiQM9xAB_a_jnSFVrH2dsyKowMLkyGLcI9g/edit#gid=2131306554)
- [システム要件](https://baserproject.github.io/5/ucmitz/basic/system)
- [アーキテクチャー設計方針](https://baserproject.github.io/5/ucmitz/basic/architecture_design_policy)
- [設計書](https://baserproject.github.io/5/ucmitz/basic/specifications)
　

## 開発の準備

次のドキュメントを参考に、ucmitz がローカル環境で動作するように準備します。Docker on Vagrant の環境を提供しています。  
なお、ucmitz は、主に `BaserApp`、`BaserCore`、`BcAdminThird` の３つコアパッケージを中心に、ブログやメールフォームなどコアプラグインで構成されます。
詳細については、パッケージ構成を参照してください。

- [開発環境の構築](https://baserproject.github.io/5/ucmitz/preparation/environment)
- [パッケージ構成](https://baserproject.github.io/5/ucmitz/basic/package)
- [トラブルシューティング](https://baserproject.github.io/5/ucmitz/etc/troubleshooting)

　
## 開発にとりかかる

### 開発の手順と移行上のルール

実際の開発については、開発の手順に従って開発します。  
なお、baserCMS4のコードを移行していくことが ucmitzの開発になるのですが、様々なルールがありますので必ず確認してください。すごく重要なことです。
- [開発の手順](https://baserproject.github.io/5/ucmitz/development/procedure)
- [移行上のルール](https://baserproject.github.io/5/ucmitz/development/migration_rule)
- [移行上の流れ](https://baserproject.github.io/5/ucmitz/development/migration_flow)
- [コーディング規約](https://baserproject.github.io/5/ucmitz/development/coding_rule)

　　
### 開発上の注意点

baserCMS4で利用しているCakePHP2系からCakePHP4系に移行するにあたり、様々な変更点や注意点があります。

- [ルーティングにおける注意点](https://baserproject.github.io/5/ucmitz/development/migration_point/routing)
- [コントローラーにおける注意点](https://baserproject.github.io/5/ucmitz/development/migration_point/controller)
- [モデルにおける注意点](https://baserproject.github.io/5/ucmitz/development/migration_point/model)
- [ビューにおける注意点](https://baserproject.github.io/5/ucmitz/development/migration_point/view)
- [ヘルパーにおける注意点](https://baserproject.github.io/5/ucmitz/development/migration_point/helper)
- [リクエスト関連における注意点](https://baserproject.github.io/5/ucmitz/development/migration_point/request)
- [セッション関連における注意点](https://baserproject.github.io/5/ucmitz/development/migration_point/session)
- [データベースにおける注意点](https://baserproject.github.io/5/ucmitz/development/migration_point/database)
- [プラグインにおける注意点](https://baserproject.github.io/5/ucmitz/development/migration_point/database)

　
### テーマの開発

ucmitz の管理画面テーマの開発では、sass や Webpack を利用します。詳細については次を確認してください。

- [BcAdminThirdの開発](https://github.com/baserproject/ucmitz/blob/dev/plugins/bc-admin-third/README.md)

　
### ユニットテスト

ucmitz の開発では、ユニットテストのカバレッジ100%を目指します。ユニットメソッドの作成方法と実行方法については次を確認してください。

- [ユニットテスト](https://baserproject.github.io/5/ucmitz/development/test/unittest)

　
### 全体的な変更点と既知の問題点

開発における全体的な変更点や既知の問題点については次を確認してください。

- [全体的な変更点](https://baserproject.github.io/5/ucmitz/development/changed)
- [既知の問題点](https://baserproject.github.io/5/ucmitz/development/problem)

　
## 開発の進捗管理と新しい課題や機能の定義

開発の進捗管理については、機能要件一覧と、Issue、そして、各ファイルや各メソッドのコメントにおけるアノテーションによって管理しています。[コード移行時のマーキング](https://baserproject.github.io/5/ucmitz/development/migration_rule#コード移行時のマーキング) を参考に必ずマーキングをお願いします。  

また、実装における新たな課題（タスクやバグなど）を見つけた場合は、Issue にマイルストーンを設定した上で登録します。  

新しく機能を定義したい場合は、機能要件一覧に存在するか確認し、なければ Issue を作成して話し合い、承認されれば機能要件一覧に追加します。

- [機能要件一覧](https://docs.google.com/spreadsheets/d/1YT5PuZQdDNU0wrZdqYbh74KuLSw1SIt4_EKwPWOfDKA/edit#gid=0) 
- [Issue](https://github.com/baserproject/ucmitz/issues)
- [ucmitz進行管理](https://docs.google.com/spreadsheets/d/1EGxMk-dy8WIg2NmgOKsS_fBXqDB6oJky9M0mB7TADEk/edit#gid=938641024)

　
## ドキュメントの追加・更新

開発ドキュメントは、GitHub.id を利用いています。
開発中に発生した開発に必要なドキュメントを追加・更新する場合は、 [baserproject.github.io レポジトリ](https://github.com/baserproject/baserproject.github.io) を利用して更新してください。  
その際、master ブランチを利用します。

新しいドキュメントを作成した場合は、このファイル、もしくはこのファイルから辿れるファイルに必ずリンクを追加してください。全てのドキュメントはこのファイルから辿れるものとします。  

できるだけ情報を拡充させて開発を楽にしてきましょう。

　
## プロジェクトで ucmitz を利用する

ucmitz は、現在、CMSとしての機能はありませんが、Webアプリケーション開発プラットフォームとして利用でき、ログイン認証付きのリッチな管理画面を簡単に作成することができます。

自身のプロジェクトで ucmitz を利用する場合は、composer で簡単にインストールできますので、詳細については次のドキュメントを参照してください。

- [ucmitzをCakePHP4のプロジェクトで利用する](https://github.com/baserproject/ucmitz/wiki/ucmitz%E3%82%92CakePHP4%E3%81%AE%E3%83%97%E3%83%AD%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E3%81%A7%E5%88%A9%E7%94%A8%E3%81%99%E3%82%8B)
- [ucmitzを利用して管理画面を作る](https://github.com/baserproject/ucmitz/wiki/ucmitz%E3%82%92%E5%88%A9%E7%94%A8%E3%81%97%E3%81%A6%E7%AE%A1%E7%90%86%E7%94%BB%E9%9D%A2%E3%82%92%E4%BD%9C%E3%82%8B)
- [ucmitzのプラグインを開発する](https://github.com/baserproject/ucmitz/wiki/ucmitz%E3%81%AE%E3%83%97%E3%83%A9%E3%82%B0%E3%82%A4%E3%83%B3%E3%82%92%E9%96%8B%E7%99%BA%E3%81%99%E3%82%8B)
- [ucmitzの REST API を利用する](https://github.com/baserproject/ucmitz/wiki/ucmitz%E3%81%AE-REST-API-%E3%82%92%E5%88%A9%E7%94%A8%E3%81%99%E3%82%8B)
　　
## その他のドキュメント

- [Cloud9 上で ucmitz を動作させる](https://baserproject.github.io/5/ucmitz/etc/cloud9)
- [docker環境の管理](https://baserproject.github.io/5/ucmitz/etc/docker_management/index)

