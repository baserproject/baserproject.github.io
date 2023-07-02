# コーディング規約

基本的には、 [PSR-12 coding style guide](https://www.php-fig.org/psr/psr-12/){:target="_blank"} および、 [CakePHP コーディング規約 - 4.x](https://book.cakephp.org/4/ja/contributing/cakephp-coding-conventions.html) に従って頂くものとし、加えて次のルールにも従ってください。

## 共通


### メソッド間
メソッドとメソッドの間では１行の空行を入れます。

### メソッド名
ロウワーキャメルケースとします。  

### プロパティ名と変数名
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

## コメントヘッダー
### ファイルヘッダー

各ファイルの最上位に記述します。
```php
/**
 * baserCMS :  Based Website Development Project <https://basercms.net>
 * Copyright (c) NPO baser foundation <https://baserfoundation.org/>
 *
 * @copyright     Copyright (c) NPO baser foundation
 * @link          https://basercms.net baserCMS Project
 * @since         5.0.0
 * @license       http://basercms.net/license/index.html MIT License
 */
```
 
### クラスヘッダー

クラスの先頭にはクラスヘッダーをつけます。
```php
/**
 * Class SitesController
 */
class SitesController extends BcAdminAppController {}
```

### メソッドヘッダー

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



## CakePHPのコードを修正する場合のコメントルール
CakePHPのコードを修正するには、[CakePHPのクラスを上書きする](../core/index#cakephpのクラスを上書きする) を参考に書き換えますが、その際、次のルールに則り、コメントによるマーキングを行ってください。

また、修正理由はできるだけ細かく記載をします。  
これは、CakePHPがバージョンアップした際、baserCMSをそのCakePHPのバージョンに対応する際の重要な手がかりとなる為です。

### コードを追加する場合
```php
// CUSTOMIZE ADD YYYY/MM/DD 修正者名
// 修正内容の説明
// >>>
追加コード
// <<<
```

### コードを編集する場合
```php
// CUSTOMIZE MODIFY YYYY/MM/DD 修正者名
// 修正内容の説明
// >>>
// 元のコード
// ---
修正後のコード
// <<<
```

### コードを削除する場合
```php
// CUSTOMIZE DELETE YYYY/MM/DD 修正者名
// 修正内容の説明
// >>>
// 元のコード
// <<<
```
