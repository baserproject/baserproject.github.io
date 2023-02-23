# ユニットテスト

ucmitz では、[CakePHPのテストの仕組み](https://book.cakephp.org/4/ja/development/testing.html) を使用してユニットテストを作成します。  
ユニットテストを実行する際はユニットテスト用のセキュリティトークンを有効にするため[DEBUGモードを有効](https://book.cakephp.org/4/ja/development/testing.html#id3)にして実行する必要があります。

 
## テストの前提条件
### スキーマ
フィクスチャファクトリー導入により、テスト開始時にプラグインも含めて全てのスキーマを生成する。  
プラグインが追加になった場合は、スキーマ生成処理を `tests/bootstrap.php` に記入する。  

なお、スキーマの生成処理の際、default 接続側に対象のテーブルが存在しないと生成に失敗するため、コアプラグインは、初期化処理にて、スキーマを生成しておく必要がある。  
（2022/09/30時点では、`docker/init.sh`）
### DBデータ
フィクスチャマネージャーによるデータ生成もまだ存在するが、フィクスチャーファクトリーに全て移行予定。  
BaserCore以外の各プラグインのテストにおけるプラグインの有効化状態は、シナリオなどを用いて独自実装する。（pluginsテーブルでの有効化状態）

 
## テストの準備

事前にコンテナにログインし Composer で、PHPUnit などをインストールしておく必要があります。

```shell
composer install
```

 
## テストの作成

### テストの配置先

`/plugins/baser-core/tests/[Type]` ディレクトリ

`[type]` は、 `TestCase` か、`Fixture` となります。

### テストのファイル名

ファイル名の最後を `Test.php` とします。

### クラス名

クラス名もファイル名と同じにします。（もちろん、拡張子を除く）

### クラスの継承

`BaserCore\TestSuite\BcTestCase` クラスを継承します。  
以前は、`BaserTestCase` でしたが、`BcTestCase` にクラス名が変更となりました。
 
### メソッド名

テストを含むメソッドは、先頭を `test` とします。

```php
// （例）BcTestHelper の hoge メソッド
// /plugins/baser-core/tests/TestCase/View/Helper/BcTestHelperTest.php

class BcTestHelperTest extends BaserCore\TestSuite\BcTestCase {
    public function testHoge() {

    }
}
```

### プライベートメソッドに対するテスト

プライベートメソッドに対するテストはパブリックメソッド経由で行うものとします。
ただ、パブリックメソッドで担保できない場合はプライベートメソッドのテストを書くことを推奨します。

 
## テストの実行

テストを実行するには、事前にコンテナにログインし次のコマンドを実行します。

```shell
vendor/bin/phpunit
```

### 特定のテストだけを実行

```shell
vendor/bin/phpunit plugins/baser-core/tests/TestCase/Model/Table/ArticlesTableTest.php
```

### 特定のテストメソッドだけを実行

```shell
vendor/bin/phpunit plugins/baser-core/tests/TestCase/Model/Table/ArticlesTableTest.php --filter testSave
```

### テストメソッド名が一部被ってる場合の実行(testSaveとtestSaveResultなどの場合)

```shell
vendor/bin/phpunit plugins/baser-core/tests/TestCase/Model/Table/ArticlesTableTest.php --filter '/::testSave\b/'
```

 
## データプロバイダーを利用する
値を切り替えてテストを実行する場合は、 `@dataProvider` アノテーションを利用してデータプロバイダーを定義します。

データプロバイダーのメソッド名は、原則、次の命名規則とし、データプロバイダーを利用するメソッドのすぐ下に配置し、コメントヘッダーは書きません。

```php
public function {テスト対象のメソッド名}DataProvider()
{

}
```
※ テスト対象のメソッド名には、`test` は含めません。
 
## 新しいプラグインのテストを追加する

`/phpunit.xml.dist` ファイルに、新しいプラグインの `<testsuite>` セクションを追加することでプラグインのテストを一緒に実行することができます。

 
## フィクスチャを利用する

`fixtures` プロパティを定義することでフィクスチャを利用することができます。

```php
class UsersTableTest extends TestCase
{
    protected $fixtures = ['plugin.BaserCore.Users'];
}
```

### baserCMS4のフィクスチャを移行する

標準で使うフィクスチャは、Default フォルダに入っていましたが、ucmitz では、Fixture フォルダ直下に移動して利用します。

また、baserCMS4系のフィクスチャを移行するには次の変更を行ってください。

- クラス名が単数形でしたが、複数形に変更
- 継承先を `BaserTestFixture` から `TextFixture` に変更
- `import` プロパティを宣言

```php
class UsersFixture extends TestFixture
{
    public $import = ['table' => 'users'];
}    
```

### テストメソッドの中でフィクスチャを呼び出す

```php
class UsersTableTest extends TestCase
{
    protected $fixtures = ['plugin.BaserCore.Users'];
    // autoFixtures を false に設定する必要あり
    protected $autoFixtures = false;
    public funciton testMethod()
    {
        $this->loadFixtures('Users', 'etc...');    
    } 
}

```

 
## 新しいプラグインのフィクスチャを利用する

フィクスチャを利用する場合、`tests/bootstrap.php` にて、マイグレーションの実行が必要となります。  
本来であれば、プラグインディレクトリ配下の `tests/bootstrap.php` にてマイグレーションの実行処理を記述すべきですが、そうするとテストの実行が面倒となるので、 [CakePHP4.3のフィクスチャファクトリとプラグインのユニットテスト](https://qiita.com/ryuring/items/c0b517fc454ff7f08e4b) に記載しているとおり、
コアプラグインの場合は、アプリケーションルート直下の `tests/bootstrap.php` に追記する事とします。

```php
(new Migrator())->runMany([
    ['plugin' => 'BaserCore'],
    ['plugin' => 'BcBlog']
]);
```

 
## 新しいプラグインのサービスプロバイダーを定義する

テストで、DIコンテナを利用して、新しいプラグインのサービスを呼び出す場合、サービスプロバイダの定義が必要です。

BcTestCase::setUp() にて次のように定義します。

```php
// 例
$container->addServiceProvider(new BcSearchIndexServiceProvider());
```


