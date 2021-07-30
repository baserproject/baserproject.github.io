# コーディング規約

## クラスヘッダー

クラスの先頭にはクラスヘッダーをつけます。

```php
/**
 * Class SitesController
 * @package BaserCore\Controller\Admin
 */
class SitesController extends BcAdminAppController {}
```

## メソッドヘッダー

メソッドの先頭にはメソッドヘッダーをつけます。

```
/**
 * サイト一覧を表示する
 * @param SiteManageServiceInterface $siteManage
 * @checked
 * @noTodo
 * @unitTest
 */
public function index(SiteManageServiceInterface $siteManage){}
```

## メソッド間

メソッドとメソッドの間では１行の空行を入れます。

## メソッド名

ロウワーキャメルケースとします。  
また、プライベートメソッドやプロテクテッドメソッドだとしても先頭にアンダースコアはつけません。

## プロパティ名と変数名

オブジェクトとなるプロパティ名のみ、アッパーキャメルケースとし、その他の変数は全てロウワーキャメルケースとします。  
また、プライベートメソッドやプロテクテッドメソッドだとしても先頭にアンダースコアはつけません。


