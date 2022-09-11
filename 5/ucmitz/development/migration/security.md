# セキュリティコンポーネントにおける注意点

セキュリティコンポーネントでは、これまれでより、CSRF対策と、SSL要求、バリデートポストの３つを実施してきていたが、CakePHP４系より、CSRF対策は、ミドルウェアに移行となっている。

　
## POST送信について
POST送信を行う場合、上記３つのセキュリティ対策が発動する。  
baserCMS５よりは、データの変更を伴う処理について、原則 POST送信を要求するものとする。

　
## PHPによるフォーム送信

BcAdminFormHelper によりフォームを作成すると特に問題なく送信できる。

### バリデートポストよりフィールドを除外する
```php
// ビューにて
$this->BcAdminForm->unlockField('field_name')
```

### バリデートポストよりアクションを除外する
```php
// Controller::beforeFilter()にて
$this->Security->confit('unlockedActions');
```

なお、データ変更時にCSRF対策はマストとなった。

### リンクによるPOST送信
postLink メソッドにより、フォームを作成せずとも簡単にPOST送信ができる。
```php
  echo $this->BcAdminForm->postLink(
    __d('baser', 'ツリー構造をチェックする'),
    ['controller' => 'utilities', 'action' => 'verity_contents_tree'],
    [
      'confirm' => __d('baser', 'ツリー構造をチェックします。よろしいですか？')
      'class' => 'bca-btn'
    ]
  );
```

　
## Javascriptによるフォーム送信

### CSRFトークン取得
bcToken クラスを利用して、最新のトークンを付与して送信する。
バリデートポストに必要なトークンは取得できないので、バリデートポストよりアクションを除外する必要がある。
```javascript
// CSRFトークン取得
$.bcToken.check(function () {
	form.append($.bcToken.getHiddenToken());
	form.submit();
});
```

### リンクによるPOST送信
リンクに `bca-submit-token` クラスを付与する事で、CSRFトークンを取得した上で、POST送信ができる。
ただし、こちらもバリデートポストに必要なトークンは取得できないので、バリデートポストよりアクションを除外する必要がある。
```php
  $this->BcBaser->link(
    __d('baser', 'ツリー構造リセット'),
    ['controller' => 'utilities', 'action' => 'reset_contents_tree'],
    ['class' => 'bca-submit-token bca-btn']
  );
```
バリデートポストを実行するには、`$this->BcAdminForm->postLink()` を利用する。
こちらは内部的に、`bca-submit-token` を付与する仕様となっている。

