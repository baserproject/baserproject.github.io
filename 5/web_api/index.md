# Web API

baserCMS では、Web API として、REST を利用してアプリケーションの開発ができます。

## REST の有効化

Web API を利用するには、 `config/.env` の編集が必要です。

```shell
# Web API 自体を有効にする 
USE_CORE_API="true"
# 管理機能の Web API を有効にする
USE_CORE_ADMIN_API="true"
```

## 権限の定義
- スーパーユーザー：インストール時に一番最初に作ったユーザー
- システム管理者：システム管理グループのユーザー
- ログインユーザー：システム管理グループ以外のユーザー  
  （グループごとにアクセスルールで制限されます）
- 全て：非ログインユーザーも含む全てのユーザー

## ログインAPI とトークン取得

認証には、JWTを利用しており、APIにアクセスするためには、ログインをしてトークンを取得する必要があります。
トークンを取得するためには、次のURLに、POSTで、email と password を送信します。

```
https://localhost/baser/api/baser-core/users/login.json
```

ログインが正常に完了すると、トークンを返却しますので、次のリクエスト以降はこのトークンを使って APIにアクセスします。

```
{
    "access_token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJiYXNlciIsInN1YiI6MSwiZXhwIjoxNjIyNTQ5MTYyfQ.CCiO_8_U5h98pbSLNIsWZsc591iQDEHMq8G75jPY-5yhVnGguUXl09Ie0Xm474o12Imij9Yo_7VbXt6DrOwhsbdvUq0iLKAOk8C5UmdKL2Tvx_7-TtUN0gkBTnMHD8YOFncUsWo8xrT0zBVd2h9YwaeYQwX5unBU0sgIzpmkMJo",
    "refresh_token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaF90b2tlbiIsImlzcyI6ImJhc2VyIiwic3ViIjoxLCJleHAiOjE2MjM3OTY2MTF9.FukBypi80cftxf-zQOXVILchol6RIQtsCQ3ujrLNZTlFtUcR8nX7mxuwXs0pt4JzEjWJQNjjBxa7KZuhvPbYxBqqN1xbeAwo7x-FrkixA_5SojAMp9Db9Bz9dIDrpEBd46IC2FJuATv5qKrCnkdaziqbdSmgmheRdcSbHgFPy-k"
}
```

## APIへのアクセス

APIへのアクセスは次のURL構成でアクセスします。

```
https://localhost/baser/api/baser-core/controller_name/action_name.json
```

アクセスする際には、ヘッダーに `Authorization` パラメーターとして、ログインAPIで取得した `access_token` を埋め込みます。

もしくは、クエリパラメーターにトークンを引き渡すことでもアクセス可能です。

```
https://localhost/baser/api/baser-core/controller_name/action_name.json?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJiYXNlciIsInN1YiI6MSwiZXhwIjoxNjIyNTQ5MTYyfQ.CCiO_8_U5h98pbSLNIsWZsc591iQDEHMq8G75jPY-5yhVnGguUXl09Ie0Xm474o12Imij9Yo_7VbXt6DrOwhsbdvUq0iLKAOk8C5UmdKL2Tvx_7-TtUN0gkBTnMHD8YOFncUsWo8xrT0zBVd2h9YwaeYQwX5unBU0sgIzpmkMJo
```

## リフレッシュトークンの取得

アクセストークンの有効期限はデフォルトで30分です。アクセストークンの有効期限が切れた場合は、リフレッシュトークンを利用することで新しいアクセストークンを取得することができます。新しいトークンを取得する場合は、次のURLより取得します。

```
https://localhost/baser/api/baser-core/users/refresh_token.json
```
通常のAPIと同樣に、ヘッダーかクエリパラメーターに有効なリフレッシュトークンを仕込みます。リフレッシュトークンの有効期限が切れた場合は、再度、ログインが必要です。  
リフレッシュトークンの有効期限はデフォルトで14日間です。

## トークンの有効期限を変更する

`Configure` で、 `Jwt.accessTokenExpire` や、 `Jwt.refreshTokenExpire` の値を書き換えることで有効期限を変更できます。

## API用のコントローラーを開発する

プラグインで、API用のコントローラーを開発する場合は、 Controller 内に、Api フォルダを作成してその中にコントローラーを作成し、 `BaserCore\Controller\Api\BcApiController` を継承することをおすすめします。  
`BcApiController` を継承することで、簡単に JWT認証を実装することができ、次のURLでアクセスすることができます。

```
https://localhost/baser/api/plugin-name/controller_name/action_name.json
```

## 特定のアクションを認証対象から外す

特定のアクションを認証なしでアクセスできるようにするためには、 `initialize` メソッドで許可するメソッドを定義します。

```php
public function initialize(): void
{
    parent::initialize();
    $this->Authentication->allowUnauthenticated(['allowed_action_name']);
}
```

## メソッドの中で、認証が必要なAPIを利用可能かどうかを判定する

次のメソッドでログイン状態、かつ、 `USE_CORE_ADMIN_API` が有効になっているかを確認する事ができます。
```php
if(!$this->isAdminApiEnabled()) {
    throw new ForbiddenException()
}
```

## REST API を利用してアプリケーションを開発する

vue.js で作成した SPA（シングルページアプリケーション）のサンプルアプリケーションを BcSample プラグインとして提供しています。  
READMEを参考にしてみてください。

[BcSample SPA README](https://github.com/baserproject/baserCMS/blob/dev/plugins/BcSpaSample/README.md)

