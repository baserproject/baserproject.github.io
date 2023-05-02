# ディレクトリー構成

baserCMSのディレクトリー構成は、CakePHPに準拠しており、どのプラグインも基本的な構成は変わりませんが、ここでは、一番ディレクトリー数が多い、BaserCoreを例にディレクトリー構成を説明します。


## BaserCoreのディレクトリー構成

```
テーマフォルダ/
　　｜- config/　・・・設定ファイルやアクセスルール初期値ファイルを配置
        ｜- Migrations/　・・・マイグレーションファイルを配置
        ｜- Seeds/　・・・シードファイルを配置
        ｜- update/　・・・アップデートスクリプトを配置
　　｜- resources/　・・・翻訳ファイルを配置
　　｜- src/
        ｜- Annotation/　・・・コメントヘッダーで利用するアノテーションクラスを配置
        ｜- Command/　・・・コマンドクラスを配置
        ｜- Controller/　・・・直下にはフロントページで利用するコントローラーを配置
            ｜- Admin/　・・・管理画面で利用するコントローラーを配置
            ｜- Api/　・・・baser API で利用するコントローラーを配置
                ｜- Admin/　・・・baser Admin API で利用するコントローラーを配置
            ｜- Component/　・・・コンポーネントを配置
        ｜- Database/
            ｜- Migration/　・・・マイグレーション関連のクラスを配置
            ｜- Schema/　・・・スキーマ関連のクラスを配置
        ｜- Error/　・・・Exception制御関連のクラスを配置
        ｜- Event/　・・・イベント関連のクラスを配置
        ｜- Form/　・・・モデルのないフォームのクラスを配置
        ｜- Identifier
            ｜- Resolver/　・・・認証解決用のリゾルバークラスを配置
        ｜- Mailer/　・・・メール設定用クラスを配置
            ｜- Admin/　・・・管理システムで利用するメール設定用クラスを配置
        ｜- Middleware/　・・・ミドルウェアを配置
        ｜- Model
            ｜- Behavior/　・・・ビヘイビアを配置
            ｜- Entity/　・・・エンティティを配置
            ｜- Table/　・・・テーブルを配置
            ｜- Validation/　・・・バリデーションを配置 
        ｜- Routing
            ｜- Route/　・・・ルーティングクラスを配置
        ｜- Service/　・・・サービスクラスを配置
            ｜- Admin/　・・・管理システム用のサービスクラスを配置
            ｜- Front/　・・・フロントページ用のサービスクラスを配置
        ｜- ServiceProvider/　・・・サービスプロバイダーを配置
        ｜- TestSuite/　・・・テスト関連用のクラスを配置
        ｜- Utility/　・・・ユーティリティクラスを配置
        ｜- Vendor/　・・・ 外部ライブラリを配置
        ｜- View/
            ｜- Helper/　・・・ヘルパーを配置        
　　｜- templates/
        ｜- BcDatabaseService/　・・・BcDatabaseServiceで利用するテンプレートを配置
　　｜- tests/
        ｜- Factory/　・・・フィクスチャファクトリーを配置
        ｜- Fixture/　・・・従来のフィクスチャーを配置
        ｜- Scenario/　・・・シナリオクラスを配置
        ｜- TestCase/　・・・テストケースを配置
    ｜- webroot/　・・・CSS、画像、Javascriptを配置
```
