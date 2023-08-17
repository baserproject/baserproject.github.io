# コーディング規約

基本的には、 [PSR-12 coding style guide](http://www.php-fig.org/psr/psr-12/) および、 [CakePHP コーディング規約 - 4.x](https://book.cakephp.org/4/ja/contributing/cakephp-coding-conventions.html) に従って頂くものとし、下記のルールにも従います。

## プログラムコードのヘッダー

各ファイルの最上位に記述します。
```php
/**
 * baserCMS :  Based Website Development Project <https://basercms.net>
 * Copyright (c) NPO baser foundation <https://baserfoundation.org/>
 *
 * @copyright     Copyright (c) NPO baser foundation
 * @link          https://basercms.net baserCMS Project
 * @license       https://basercms.net/about/license MIT License
 */
```
 
## クラスヘッダー

クラスの先頭にはクラスヘッダーをつけます。

```php
/**
 * Class SitesController
 */
class SitesController extends BcAdminAppController {}
```

 
## メソッドヘッダー

メソッドの先頭にはメソッドヘッダーをつけます。

　
```php
/**
 * サイト一覧を表示する
 * 
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

 
## プロパティ名と変数名

オブジェクトのプロパティ名のみ、アッパーキャメルケースとし、その他の変数は全てロウワーキャメルケースとします。  

```php
class UsersController extends AppController 
{
    public $Users;
    private $user;
    protected function getStatus()
    {
        $user = $this->Users->find()->first();
        return $user->status;
    } 
}
```
　

