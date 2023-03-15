# Web API

## コアのAPIの有効化
baserCMSコアが提供する Web APIを有効化するには、`/config/.env` の `USE_CORE_API` の値を `true` に設定します。

また、baserCMSコアが提供する、認証が必要な Web API も有効化したい場合は、`/config/.env` の `USE_CORE_ADMIN_API` の値を `true` に設定する必要があります。

 
## コアのAPIの利用
baserCMSのコアが提供する Web API は、認証方式において JWT を利用します。   
[REST API を利用する](https://github.com/baserproject/ucmitz/wiki/ucmitz%E3%81%AE-REST-API-%E3%82%92%E5%88%A9%E7%94%A8%E3%81%99%E3%82%8B) を参考にします。

[コア Web API ドキュメント](../../../../web_api/index.md)


## APIのレスポンス
### ステータスコード
ステータスコードは主に次のものを利用します。  
`response.status` で取得できます。

- 200：正常
- 400：バリデーション入力エラー、BadRequest
- 401：認証エラー
- 403：権限エラー
- 404：NotFound
- 500：サーバーエラー

### 戻り値
戻り値について基本的に次のキーをベースとして都度必要なものを定義します。
`response.data` で取得できます。

- リソース名（ロウワーキャメル、単数形、複数形）
  user / users など
- message：アプリケーションメッセージ
- errors：バリデーションエラー時のエラーメッセージ（配列）  
  主に add / edit アクションに利用

### データベースの処理と Exception の対応
データーベースの処理における Exception は次のようにコントロールします。

- PersistenceFailedException → 400
  - ステータスコード：400
  - メッセージ：入力エラーです。内容を修正してください。
- RecordNotFoundException
  - ステータスコード：404
  - データが見つかりません。
- Throwable（それ以外は基本的にThrowableでキャッチします）
  - ステータスコード：500
  - メッセージ： `'データベース処理中にエラーが発生しました。' . $e->getMessage()`

## 独自のAPIを開発する
独自のAPIを開発するには、[プレフィックス認証](./prefix_auth) を利用すると JWT認証と RESTful なルーティングを簡単に実装する事ができます。
 
## 管理システムからAPIへのアクセス
管理システムでは内部的にAJAXによるAPIへのアクセスを行っており、`USE_CORE_API` に関わらず、例外的にアクセスを許容します。

`USE_CORE_API` が `false` に設定されているにも関わらず、アクセスが可能となる条件は次のとおりです。

- プレフィックスが `Api` である
- 管理システムへのログインが完了している
- リファラが自身のサイトである
