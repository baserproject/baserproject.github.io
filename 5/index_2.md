# baserCMS５ 公式ガイド

## メモ
- 階層が深いかも
  - 機能・仕様やインストールは１ページにまとめて良さそう
- baserCMSを導入するのディレクトリは creator にしたい
- developerは、コミッター側の名称として利用している
- 校正ルールに「サーバー」などの伸ばし棒をアリにするように追加
- 校正ルールにリンクは相対パスにするように追加
    - `.md` を抜く旨も記載

## 骨子

- サイト運営者向け
    - オフィシャルサイトにまとめる
- baserCMSを導入する
    - 機能・仕様
        - [機能一覧](developer/functions)
        - [API仕様](developer/api)
    - インストール
        - [システム要件](developer/system_requirements)
        - [サーバーにインストールする]
            - インストールの準備
            - インストールの実行
            - [ローカル環境を構築する](developer/build_local_env)
    - テーマの利用
        - [テーマガイド](developer/theme/index)
        - [baserマーケットから購入する](developer/market/buy)
        - [独自のテーマを作成する](developer/theme/development/index)
            - [関数リファレンス](developer/theme/development/function_reference)
            - [プラグイン・テーマを配布・販売する](developer/market/sell)
    - プラグインの利用
        - [プラグインガイド](developer/plugin/index)
        - [baserマーケットから購入する](developer/market/buy)
        - [独自のプラグインを作成する](developer/plugin/development/index)
            - [プラグイン・テーマを配布・販売する](developer/market/sell)
    - APIを利用する
        - baser API とは
            - 認可と認証
                - 権限の定義
      - [Web APIドキュメント](web_api/index)
- baserCMSの開発に参加・貢献する
    - コンセプト・基本方針
        - プラグインとして開発する
            - baserCMS独自の仕様
        - 国際化の方針
        - セキュリティ
    - パッケージ概要
        - アーキテクチャ
            - ディレクトリ構成
            - CakePHPに完全にのっかっていればその旨を記載
    - 開発規約
      - 開発規約はココにマージ
          - バージョン番号
          - コーディング規約
          - リファクタリング方針
          - アップデートスクリプト
          - データベースの構造変更
          - ユーザーインターフェイス設計方針
            - ユーザーインターフェイス設計ガイドラインより
          - 非推奨処理の対応
    - 参加・貢献
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
    - 公式GitHubコラボレーター向けドキュメント
      - 公式GitHubコラボレーターとは
        - 公式GitHubコラボレーターになるには
      - 開発手法
        - チケット駆動開発
        - マイルストーンミーティング
        - ラベル運用ガイドライン
      - リリース手順
- リソース
    - カテゴリ分けされたリンク集

ポストへようこそ  
もう少し詳し


