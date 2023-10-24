# 独自の Web API を開発する



## プレフィックス認証
独自の Web APIを開発するには、[プレフィックス認証](../plugin/prefix_auth) を利用すると JWT認証と RESTful なルーティングを簡単に実装する事ができます。  
標準では、`Api`、`Api/Admin` というプレフィックスが定義済です。[RESTを有効化](./index#REST の有効化) するだけで特別な設定をせずともプレフィックス認証が利用可能です。

## コントローラーを作成する
`Api` というプレフィックス認証を利用する場合は、 Controller 内に、`Api` フォルダを作成し、その中にコントローラーを作成します。コントローラーは、`BaserCore\Controller\Api\BcApiController` を継承します。

```php
class SampleController extends BcApiController
{

}
```

その際、次のURLでアクセスすることができます。
```
https://localhost/baser/api/plugin-name/controller_name/action_name.json
```

また、`Api/Admin` というプレフィックスは、認証が必要となる領域となります。こちらを利用する場合は、Controller 無いに、`Api/Admin` フォルダを作成し、その中にコントローラーを作成します。コントローラーは、`BaserCore\Controller\Api\Admin\BcAdminApiController` を継承します。

```php
class SampleController extends BcAdminApiController
{

}
```

その際、次のURLでアクセスすることができます。
```
https://localhost/baser/api/admin/plugin-name/controller_name/action_name.json
```

## 特定のアクションを認証対象から外す
認証が必要な領域において、特定のアクションを認証なしでアクセスできるようにするためには、 `initialize` メソッドで許可するメソッドを定義します。

```php
public function initialize(): void
{
    parent::initialize();
    $this->Authentication->allowUnauthenticated(['allowed_action_name']);
}
```

## データベースの処理と Exception の対応
コントローラーにおいて、データーベースの処理における Exception は次のようにコントロールします。

- PersistenceFailedException
  - ステータスコード：400
  - メッセージ：入力エラーです。内容を修正してください。
- RecordNotFoundException
  - ステータスコード：404
  - データが見つかりません。
- Throwable（それ以外は基本的にThrowableでキャッチします）
  - ステータスコード：500
  - メッセージ： `'データベース処理中にエラーが発生しました。' . $e->getMessage()`

## 認証が必要なAPIが利用可能かどうかを判定 
`BcAdminApiController` を継承している場合、コントローラー内のいて、次のメソッドでログイン状態、かつ、 `USE_CORE_ADMIN_API` が有効になっているかを確認する事ができます。
```php
if(!$this->isAdminApiEnabled()) {
    throw new ForbiddenException()
}
```
