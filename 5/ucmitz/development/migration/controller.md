# コントローラーにおける注意点

## 管理画面のサブメニューの設定

廃止となりました。コントローラーの下記のようなコードは削除します。

```php
public $subMenuElements = ['site_configs', 'sites'];

$this->subMenuElements = ['plugins'];
```

　
## 管理画面のパンくずの設定
 
管理画面のパンくずは廃止となりました。コントローラーの下記のようなコードは削除します。

```php
public function beforeFilter()
{
    parent::beforeFilter();
    $this->crumbs = [
        ['name' => __d('baser', 'システム設定'), 'url' => ['controller' => 'site_configs', 'action' => 'form']],
        ['name' => __d('baser', 'サブサイト管理'), 'url' => ['controller' => 'sites', 'action' => 'index']]
    ];
}
```
　
## 検索フォームの設定
```php
// baserCMS4
$this->search = $templateName;
// ucmitz
$this->setSearch($templateName); // コントローラー
$this->BcAdmin->setSearch($templateName); // テンプレート 
```
テンプレートのヘッダーでの定義を推奨しています。

　
## ヘルプの設定
```php
// baserCMS4
$this->help = $templateName;
// ucmitz
$this->setHelp($templateName); // コントローラー
$this->BcAdmin->setHelp($templateName); // テンプレート
```
テンプレートのヘッダーでの定義を推奨しています。

　
## タイトルの設定
```php
// baserCMS4
$this->pageTitle = $title;
// ucmitz
$this->setTitle($title); // コントローラー
$this->BcAdmin->setTitle($templateName); // テンプレート
```
テンプレートのヘッダーでの定義を推奨しています。

　
## Ajaxの処理について

管理画面から呼び出す Ajax のアクションについて、返却値を JSON化できるものは、Api 用のコントローラーに移行し、そちらを呼び出すようにします。
ただし、HTMLを返却するもので、JSON化の難易度が高いものは、Admin 用のコントローラーでそのまま移行します。
