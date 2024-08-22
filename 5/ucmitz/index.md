# ucmitz 開発への貢献方法

「ucmitz」は、baserCMSをCakePHP4に対応するプロジェクトの開発コードネームです。コアデベロッパーの gondoh が命名しました。  

開発に貢献頂ける場合は、`dev` ブランチを利用してください。

## 開発方針とロードマップの確認

開発に貢献する前に、開発方針とロードマップを必ず確認しましょう。ucmitz は、メジャーバージョンを３回刻んだ後、baserCMS５としてリリースされます。  
なお、ucmitz は、PHP7.2以降でのみ動作します。詳細についてはシステム要件を確認します。
- [開発方針](https://docs.google.com/document/d/1QAmScc65CwMyn8QuwWKE9q_8HnSKcW9oefI9RrHoUYY/edit)
- [ロードマップ](https://docs.google.com/spreadsheets/d/1TZ71-O_9KiQM9xAB_a_jnSFVrH2dsyKowMLkyGLcI9g/edit#gid=2131306554)
- [システム要件](./basic/system)
- [アーキテクチャー設計方針](./basic/architecture_design_policy)
- [設計書](../package/specification/index)

## 開発の準備

次のドキュメントを参考に、ucmitz がローカル環境で動作するように準備します。Docker on Vagrant の環境を提供しています。  
なお、ucmitz は、主に `BaserApp`、`BaserCore`、`BcAdminThird` の３つコアパッケージを中心に、ブログやメールフォームなどコアプラグインで構成されます。
詳細については、パッケージ構成を参照してください。

- [開発環境の構築](./preparation/environment)
- [パッケージ構成](./basic/package)
- [トラブルシューティング](./etc/troubleshooting)
- [Docker環境の管理](./etc/docker)

## 開発にとりかかる
### 開発の手順と移行上のルール

実際の開発については、開発の手順に従って開発します。  
なお、baserCMS4のコードを移行していくことが ucmitzの開発になるのですが、様々なルールがありますので必ず確認してください。すごく重要なことです。
- [開発の手順](./regulation/procedure)
- [マイグレーション方針](./regulation/migration_policy)
- [マイグレーションルール](./regulation/migration_rule)
- [移行上の流れ](./development/migration/migration_flow)
- [コーディング規約](./regulation/coding_rule)
- [未実装のユニットテストに貢献する](./test/unimplemented_unittest)
- [リリース手順](./regulation/release)

### 開発上の注意点
baserCMS4で利用しているCakePHP2系からCakePHP4系に移行するにあたり、様々な変更点や注意点があります。

- [ルーティングにおける注意点](./development/migration/routing)
- [コントローラーにおける注意点](./development/migration/controller)
- [モデルにおける注意点](./development/migration/model)
- [ビューにおける注意点](./development/migration/view)
- [ヘルパーにおける注意点](./development/migration/helper)
- [リクエスト関連における注意点](./development/migration/request)
- [セッション関連における注意点](./development/migration/session)
- [データベースにおける注意点](./development/migration/database)
- [プラグインにおける注意点](./development/migration/database)
- [セキュリティコンポーネントにおける注意点](./development/migration/security)

### テーマの開発
ucmitz の管理画面テーマやフロントの開発では、sass や Webpack を利用します。詳細については次を確認してください。

- [テーマについて](./development/frontend/theme)
- [BcAdminThird（管理画面テーマ）の開発](./development/frontend/bc-admin-third)
- [BcFront（フロントテーマ）の開発](./development/frontend/bc-front)
- [CSSの作成について](./development/frontend/css)
- [Javascriptの作成について](./development/frontend/javascript)

### ユニットテスト
ucmitz の開発では、ユニットテストのカバレッジ100%を目指します。ユニットメソッドの作成方法と実行方法については次を確認してください。

- [ユニットテスト](./test/unittest)
- [フィクスチャの利用](./test/fixture)
- [ユニットテスト実装ガイド](./test/unittest_guide)
- [テストカバレッジ](./test/coverage)
- [GitHubActions](./test/github_actions)

### 国際化
baserCMS５では、日本語をベース言語として英語のみ対応する方針です。国際化の手順については次を確認してください。

- [国際化](./i18n/index)

### Issueの管理
- [GitHub Projects の利用方法](./etc/github_projects)

### 全体的な変更点と既知の問題点
開発における全体的な変更点や既知の問題点については次を確認してください。

- [全体的な変更点](./development/changed)
- [既知の問題点](./development/problem)
- [トラブルシューティング](./etc/troubleshooting)

## 開発の進捗管理と新しい課題や機能の定義
開発の進捗管理については、機能要件一覧と、Issue、そして、各ファイルや各メソッドのコメントにおけるアノテーションによって管理しています。[コード移行時のマーキング](./regulation/migration_rule#コード移行時のマーキング) を参考に必ずマーキングをお願いします。  

また、実装における新たな課題（タスクやバグなど）を見つけた場合は、Issue にマイルストーンを設定した上で登録します。  

新しく機能を定義したい場合は、機能要件一覧に存在するか確認し、なければ Issue を作成して話し合い、承認されれば機能要件一覧に追加します。

- [機能要件一覧](https://docs.google.com/spreadsheets/d/1YT5PuZQdDNU0wrZdqYbh74KuLSw1SIt4_EKwPWOfDKA/edit#gid=0) 
- [Issue](https://github.com/baserproject/ucmitz/issues)
- [ucmitz進行管理](https://docs.google.com/spreadsheets/d/1EGxMk-dy8WIg2NmgOKsS_fBXqDB6oJky9M0mB7TADEk/edit#gid=938641024)

## ドキュメントの追加・更新
開発ドキュメントは、GitHub.io を利用いています。
開発中に発生した開発に必要なドキュメントを追加・更新する場合は、[ドキュメント作成ガイドライン](./gudeline) をお読みください。

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
- [カスタムコンテンツの利用方法](./etc/custom_content)
- [フロント認証](./etc/front_auth)
- [PlantUMLの利用方法](./etc/plant_uml)
- [サブフォルダに設置する](./etc/subfolder)
- [Cloud9 上で ucmitz を動作させる](./etc/cloud9)
- [baserCMS５ベータテスト](./beta_test)

