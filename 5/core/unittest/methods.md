
# ユニットテストで便利なメソッド

ユニットテストを実行するには、状態の再現が非常に重要となってきますが、baserCMSでは様々な便利なメソッドを提供しています。

## リクエストを作成する
```php
$request = $this->getRequest('/baser/admin');
```
## ログイン状態を作る
```php
$this->adminLogin($request);
```
## APIにログインしアクセストークンを取得する
```php
$token = $this->apiLoginAdmin($id);
```
## プライベートメソッドを実行する
```php
$requestKey= $this->execPrivateMethod($this->PasswordRequest, 'makeRequestKey');
```
## イベントを設定する
```php
$this->attachEvent(['EventName' => ['callable' => function(Event $event) {
}]]);
```
```php
$this->entryEventToMock(self::EVENT_LAYER_CONTROLLER, 'BaserCore.Contents.searchIndex', function(Event $event) {
});
```
## イベントをリセットする
```php
$this->resetEvent();
```