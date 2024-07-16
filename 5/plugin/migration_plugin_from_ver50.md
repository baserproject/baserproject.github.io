# 5.0系のプラグインを 5.1系 に移行

5.0系のプラグインは、そのままの状態で、5.1系で動作しない場合があります。

基本的には、[BcAddonMigrator](https://market.basercms.net/products/detail.php?product_id=158) を利用して変換することで動作しますが、次のものについては、手動で修正が必要な場合があります。

BcAddonMigrator の利用方法については、[baserCMS４のプラグインを変換](./migration_plugin_from_ver4) を御覧ください。

## ファイルアップロード
ファイルアップロード機能を実装し、コントローラーなどで、`$this->getRequest()->getData('field_name')` で取得していた値が、配列からオブジェクト（`\Laminas\Diactoros\UploadedFile`）に変更となっています。

取り扱い方法が変わっていますので変更しましょう。
ただし、baserCMSが提供している、`BcUploadBehavior` を利用している場合は、本体側が対応していますので特に変更は必要ありません。

```php
$attachment = $this->getRequest()->getData('field_name');

// $attachment['name'];
$name = $attachment->getClientFilename();
// $attachment['tmp'];
$type = $attachment->getClientMediaType();
// $attachment['size'];
$size = $attachment->getSize();
// $attachment['tmp_name'];
$tmpName = $attachment->getStream()->getMetadata('uri');
// $attachment['error'];
$error = $attachment->getError();
// move_uploaded_file（例外処理が必要）
$data->moveTo($targetPath);
```
詳細については、[CakePHP ファイルアップロード](https://book.cakephp.org/5/ja/controllers/request-response.html#request-file-uploads) のドキュメントを参照してください。

## フォルダ
`\Cake\Filesystem\Folder` は廃止されました。 `\BaserCore\Utility\BcFolder` を利用してください。

基本的には、[BcAddonMigrator](https://market.basercms.net/products/detail.php?product_id=158)で、変換が可能ですが、手動で修正が必要な場合がありますのでご注意ください。

### Folder::__construct()
`BcFolder::__construct()` では、引数にパスの指定が必要となりました。
後方互換用として、引数なしでも利用できますが、その処理方法は非推奨となっており、近い将来、引数がないと動作しなくなる予定です。

### Folder::read()
`BcFolder::getFiles()` と `BcFolder::getFolders()` を利用してください。
後方互換用として、`BcFolder::read()` が用意されていますが、非推奨となっており、近い将来削除される予定です。

### Folder::create()
`Folder::create()` では、第一引数がパスとなっていましたが、`BcFolder::create()` は、第一引数は、マスク（権限）となっています。
後方互換用として、第一引数にパスを指定しても利用できますが、その処理方法は非推奨となっており、近い将来、その処理方法では正常に動作しなくなる予定です。

### Folder::delete()
`Folder::delete()` では、第一引数がパスとなっていましたが、`BcFolder::delete()` は、引数の指定は不要となりました。
後方互換用として、第一引数にパスを指定しても利用できますが、その処理方法は非推奨となっており、近い将来、その処理方法では正常に動作しなくなる予定です。

### Folder::copy()
`Folder::copy()` では、第二引数の `from` キーにコピー元のパスを指定できましたが、`BcFolder::copy()` では、非推奨となりました。
後方互換用として、第二引数の `from` キーにコピー元のパスを指定しても利用できますが、その処理方法は非推奨となっており、近い将来、その処理方法では正常に動作しなくなる予定です。

### Folder::move()
`Folder::move()` では、第二引数の `from` キーにコピー元のパスを指定できましたが、`BcFolder::move()` では、非推奨となりました。
後方互換用として、第二引数の `from` キーにコピー元のパスを指定しても利用できますが、その処理方法は非推奨となっており、近い将来、その処理方法では正常に動作しなくなる予定です。

## ファイル
`\Cake\Filesystem\File` が廃止されました。`\BaserCore\Utility\BcFile` を利用してください。

基本的には、[BcAddonMigrator](https://market.basercms.net/products/detail.php?product_id=158)で、変換が可能ですが、手動で修正が必要な場合がありますのでご注意ください。

なお、現在は、baserCMSの基本機能に必要なメソッドだけが移植されており、いくつかのメソッドは未実装となり利用できません。
必要なメソッドが存在しない場合は、本家にプルリクエストを出してみてください。


