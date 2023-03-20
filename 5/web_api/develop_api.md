# 独自の Web API を開発する

## 独自のAPIを開発する
独自のAPIを開発するには、[プレフィックス認証](./prefix_auth) を利用すると JWT認証と RESTful なルーティングを簡単に実装する事ができます。

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
