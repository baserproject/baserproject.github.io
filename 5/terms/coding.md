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

## コード移行時のマーキング
クラスメソッドやビューファイルの移行実装時、および新規ファイル追加時には、ヘッダーコメントにアノテーションでマーキングをします。

```
@checked : コードの精査が完了している
@noTodo : Todo が発生しない
@unitTest : unitTest が実装済である
```

これにより進行管理表に自動反映し、進捗状況をわかるようにしています。

- [baserCMS-進行管理](https://docs.google.com/spreadsheets/d/1EGxMk-dy8WIg2NmgOKsS_fBXqDB6oJky9M0mB7TADEk/edit#gid=938641024)

なお、クラスの冒頭にアノテーションのインポートが必要となりますので忘れないようにしてください。

```php
use BaserCore\Annotation\UnitTest;
use BaserCore\Annotation\NoTodo;
use BaserCore\Annotation\Checked;
```
　
マーキングの例
```php
// 例）
use BaserCore\Annotation\UnitTest;
use BaserCore\Annotation\NoTodo;
use BaserCore\Annotation\Checked;

class BcBaserHelper extends Cake\View\Helper 
{
    /**
     * コンテンツを特定する文字列を出力する
     *
     * URL を元に、第一階層までの文字列をキャメルケースで取得する
     * ※ 利用例、出力例については BcBaserHelper::getContentsName() を参照
     *
     * @param bool $detail 詳細モード true にした場合は、ページごとに一意となる文字列をキャメルケースで出力する（初期値 : false）
     * @param array $options オプション（初期値 : array()）
     *    ※ オプションの詳細については、BcBaserHelper::getContentsName() を参照
     * @return void
     * @checked
     * @noTodo
     */
```

なお、 ucmitz 進行管理に、メモを反映したい場合には、 Note アノテーションが利用できます。
```php
// 例
use BaserCore\Annotation\Note;

class BcBaserHelper extends Cake\View\Helper 
{
    /**
     * Contents Before Move
     *
     * @note(value="固定ページを実装するまではTODO消化できない")
     */
```

## リクエスト
### データ送信
データの変更を伴う処理について、原則 POST送信を要求するものとします。
### 検索クエリ
検索を伴う処理について、原則 GET送信を要求するものとします。

## ユニットテスト
全てのメソッドにはユニットテストが必要です。
その際、テストの実装がどうしても間に合わない場合は、 `markTestIncomplete()` を記載しておいてください。その際、アノテーションで、`@unitTest` を付けてはいけません。

```php
$this->markTestIncomplete('Not implemented yet.');
```

## マイグレーションファイル
マイグレーションファイルは、１テーブル１つ作成するようにしてください。  
なお、マイグレーションファイルの命名規則は次のとおりです。

【命名規則】

- テーブル作成：Create{TableName}
- テーブル削除：Drop{TableName}
- フィールド追加：Add{FieldName}To{TableName}
- フィールド変更：Change{FieldName}On{TableName}
- フィールド削除：Remove{FieldName}From{TableName}


## CakePHPのコード修正時のコメント
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
