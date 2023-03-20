# REST

baserCMS では、Web API として、REST を利用してアプリケーションの開発ができます。認証方式において JWT を利用します。 

## REST の有効化
REST を利用するには、 `config/.env` の編集が必要です。

```shell
# REST 自体を有効にする 
USE_CORE_API="true"
# 管理機能の REST を有効にする
USE_CORE_ADMIN_API="true"
```

## 認証と認可
### ログインAPI とトークン取得

認証には、JWTを利用しており、RESTにアクセスするためには、ログインをしてトークンを取得する必要があります。
トークンを取得するためには、次のURLに、POSTで、`email` と `password` を送信します。

```
https://localhost/baser/api/baser-core/users/login.json
```

ログインが正常に完了すると、トークンを返却しますので、次のリクエスト以降はこのトークンを使って RESTにアクセスします。

```
{
    "access_token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJiYXNlciIsInN1YiI6MSwiZXhwIjoxNjIyNTQ5MTYyfQ.CCiO_8_U5h98pbSLNIsWZsc591iQDEHMq8G75jPY-5yhVnGguUXl09Ie0Xm474o12Imij9Yo_7VbXt6DrOwhsbdvUq0iLKAOk8C5UmdKL2Tvx_7-TtUN0gkBTnMHD8YOFncUsWo8xrT0zBVd2h9YwaeYQwX5unBU0sgIzpmkMJo",
    "refresh_token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaF90b2tlbiIsImlzcyI6ImJhc2VyIiwic3ViIjoxLCJleHAiOjE2MjM3OTY2MTF9.FukBypi80cftxf-zQOXVILchol6RIQtsCQ3ujrLNZTlFtUcR8nX7mxuwXs0pt4JzEjWJQNjjBxa7KZuhvPbYxBqqN1xbeAwo7x-FrkixA_5SojAMp9Db9Bz9dIDrpEBd46IC2FJuATv5qKrCnkdaziqbdSmgmheRdcSbHgFPy-k"
}
```

### 権限の定義
RESTへのアクセス時、次のセグメントごとに認可を提供します。

- 全て：非ログインユーザーも含む全てのユーザー
- ログインユーザー：システム管理グループ以外のユーザー  
  （グループごとにアクセスルールで制限されます）
- システム管理者：システム管理グループのユーザー
- スーパーユーザー：インストール時に一番最初に作ったユーザー

## APIのリクエスト
RESTへのリクエストは次のURL構成で行います。  
リクエスト先の詳細については [Web API ドキュメント](./api_index) を参照してください。

```
https://localhost/baser/api/baser-core/controller_name/action_name.json
```

リクエストする際には、ヘッダーに `Authorization` パラメーターとして、ログインAPIで取得した `access_token` を埋め込みます。

もしくは、クエリパラメーターにトークンを引き渡すことでもアクセス可能です。

```
https://localhost/baser/api/baser-core/controller_name/action_name.json?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJiYXNlciIsInN1YiI6MSwiZXhwIjoxNjIyNTQ5MTYyfQ.CCiO_8_U5h98pbSLNIsWZsc591iQDEHMq8G75jPY-5yhVnGguUXl09Ie0Xm474o12Imij9Yo_7VbXt6DrOwhsbdvUq0iLKAOk8C5UmdKL2Tvx_7-TtUN0gkBTnMHD8YOFncUsWo8xrT0zBVd2h9YwaeYQwX5unBU0sgIzpmkMJo
```

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

## トークンの更新
アクセストークンの有効期限はデフォルトで30分です。アクセストークンの有効期限が切れた場合は、リフレッシュトークンを利用することで新しいアクセストークンを取得できます。新しいトークンを取得する場合は、次のURLより取得します。

```
https://localhost/baser/api/baser-core/users/refresh_token.json
```

リクエストの際には、通常のAPIと同樣に、ヘッダーかクエリパラメーターに有効なリフレッシュトークンを仕込みます。  
リフレッシュトークンの有効期限が切れた場合は、再度、ログインが必要です。  
リフレッシュトークンの有効期限はデフォルトで14日間です。

### トークンの有効期限を変更する
`Configure` で、 トークンの有効期限を変更できます。

- `Jwt.accessTokenExpire`: アクセストークンの有効期限（デフォルト30分）
- `Jwt.refreshTokenExpire`: リフレッシュトークンの有効期限（デフォルト14日間）

## 管理システムからRESTへのアクセス
管理システムでは内部的にAJAXによるRESTへのアクセスを行っており、`USE_CORE_API` に関わらず、例外的にアクセスを許容します。

`USE_CORE_API` が `false` に設定されているにも関わらず、アクセスが可能となる条件は次のとおりです。

- プレフィックスが `Api` である
- 管理システムへのログインが完了している
- リファラが自身のサイトである

## サンプルを参考にする
vue.js で作成した SPA（シングルページアプリケーション）のサンプルアプリケーションを BcSpaSample プラグインとして提供しています。  
READMEを参考にしてみてください。

[BcSample SPA README](https://github.com/baserproject/ucmitz/blob/dev/plugins/BcSpaSample/README.md)

## 独自の Web API を開発する

[独自のWeb API の開発](./develop_api) をご覧ください。

　
