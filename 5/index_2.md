# baserCMS５ 公式ガイド

## メモ
- 階層が深いかも
  - 機能・仕様やインストールは１ページにまとめて良さそう

## 骨子

## はじめに
- [x] baserCMSとは
  - [x] サイト運営者向け
    - [x] オフィシャルサイトを閲覧して頂くよう誘導
  - [機能一覧](creator/functions)
- 学習方法を選びましょう
  - [API仕様](creator/api)
  
## baserCMSを導入する
### インストール
- [システム要件](creator/system_requirements)
- [サーバーにインストールする]()
  - インストールの準備
  - インストールの実行
  - [ローカル環境を構築する](creator/build_local_env)
### テーマの利用
- [テーマガイド](creator/theme/index)
- [baserマーケットから購入する](creator/market#baserマーケットから購入する)
- [独自のテーマを作成する](creator/theme/development/index)
  - [関数リファレンス](creator/theme/development/function_reference)
  - [プラグイン・テーマを配布・販売する](creator/market#プラグイン・テーマを配布・販売する)
### プラグインの利用
- [プラグインガイド](creator/plugin/index)
- [baserマーケットから購入する](creator/market#baserマーケットから購入する)
- [独自のプラグインを作成する](creator/plugin/development/index)
  - [プラグイン・テーマを配布・販売する](creator/market#プラグイン・テーマを配布・販売する)
### APIを利用する
- baser API とは
  - 認証と認可
    - 権限の定義
- [Web APIドキュメント](web_api/index)

## baserCMSの開発に参加・貢献する

### コンセプト・基本方針
  - プラグインとして開発する
    - baserCMS独自の仕様
  - 国際化の方針
  - セキュリティ
### パッケージ概要
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

## 公式GitHubコラボレーター向けドキュメント
- 公式GitHubコラボレーターとは
  - 公式GitHubコラボレーターになるには
- 開発手法
  - チケット駆動開発
  - マイルストーンミーティング
  - ラベル運用ガイドライン
- リリース手順

## リソース
- カテゴリ分けされたリンク集



