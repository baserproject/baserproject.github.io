# サイトマップ

## はじめに
- [x] baserCMSとは
  - [x] Webサイト運営者の方へ
    - [x] オフィシャルサイトを閲覧して頂くよう誘導
  - [x] ライセンス
  - [x] 国産オープンソース
  - [x] 機能 
    - [x] [機能一覧](functions.md)
- 学習方法を選びましょう
  - [baserCMSをインストールする](introduce/index)
  - [テーマについて学ぶ](theme/index)
  - [プラグインについて学ぶ](plugin/index)
  - [x] [WebAPIを利用する](web_api/)
- 参加・貢献
  - [ucmitz 開発への貢献方法](./ucmitz/index)
- このサイトの全体像
  - [サイトマップ](sitemap) 

## baserCMSを導入する
### インストール
- [インストールガイド](introduce/index)
  - [x] [システム要件](introduce/system_requirements.md)
- [サーバーにインストールする](introduce/install)
  - インストールの準備
  - インストールの実行
- [ローカル環境を構築する](introduce/build_local_env.md)

### テーマの利用
- [テーマガイド](theme/index)
  - [baserマーケットから購入する](market.md#baserマーケットから購入する)
- [独自のテーマを作成する](theme/development/index)
  - [関数リファレンス](theme/development/function_reference)
  - [プラグイン・テーマを配布・販売する](market.md#プラグイン・テーマを配布・販売する)

### プラグインの利用
- [プラグインガイド](plugin/index)
  - [baserマーケットから購入する](market.md#baserマーケットから購入する)
- [独自のプラグインを作成する](plugin/development/index)
  - [プラグイン・テーマを配布・販売する](market.md#プラグイン・テーマを配布・販売する)

### Web APIの利用
- [x] [Web API ガイド](web_api/index)
  - REST API の有効化
  - 認証と認可
    - 権限の定義
  - APIのリクエスト
  - APIのレスポンス 
  - トークンの更新
    - トークンの有効期限を変更する
  - 管理システムからAPIへのアクセス
  - サンプルを参考にする  
- [baser API](web_api/baser_api/index)
- [x] [独自のWeb API の開発](web_api/develop_api)
  - プレフィックス認証
  - コントローラーを作成する
  - 特定のアクションを認証対象から外す
  - データベースの処理と Exception の対応
  - 認証が必要なAPIが利用可能かどうかを判定 

## baserCMSの開発に参加・貢献する

### コンセプト・基本方針
  - プラグインとして開発する
    - baserCMS独自の仕様
  - 国際化の方針
  - セキュリティ

### パッケージ概要
- [データベース構造](./package/database)
- アーキテクチャ
  - ディレクトリ構成
  - CakePHPに完全にのっかっていればその旨を記載

### 開発規約
- 開発規約はココにマージ
  - バージョン番号
  - コーディング規約
  - リファクタリング方針
  - アップデートスクリプト
  - データベースの構造変更
  - ユーザーインターフェイス設計方針
    - ユーザーインターフェイス設計ガイドラインより
  - 非推奨処理の対応

### 参加・貢献
- 開発者として参加・貢献する
  - 開発サイクル
    - マイルストーンミーティング（リンク）
      - チケットの優先度付け
    - テスト
    - リリース
      - タグを切る
      - masterにマージ
  - 参加・貢献方法
    - Issueを立てる
      - チケット駆動開発（リンク）
      - ラベル運用ガイドライン（リンク）
    - Pull Requestを送る
      - 受け入れ条件（マージ条件）
    - 更に貢献したい場合は
      - 公式開発メンバーとして参加する
      - 公式GitHubコラボレーターとして参加する
  - コアの開発
    - デバッグ方法
  - コアテーマの開発
  - コアプラグインの開発
- 開発以外の方法で参加・貢献する
  - 要望のフィードバック
  - 不具合発見のレポート
  - ドキュメントの更新
    - [ドキュメント校正ルール](doc_writing/document_writing_rules)
    - [APIドキュメント校正ルール](doc_writing/api_document_writing_rules)
    - [APIドキュメント作成マニュアル](doc_writing/api_document_writing_manual)
  - 国際化
    - 対応方法
    - 翻訳方法

## コラボレーター向けドキュメント
- 公式コラボレーターとは
  - 公式コラボレーターになるには
- 開発手法
  - チケット駆動開発
  - マイルストーンミーティング
  - ラベル運用ガイドライン
- リリース手順

## リソース
- カテゴリ分けされたリンク集



