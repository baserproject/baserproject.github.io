# ユニットテスト

ucmitz では、[CakePHPのテストの仕組み](https://book.cakephp.org/4/ja/development/testing.html) を使用してユニットテストを作成します。

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

また、baserCMS4では次の変更を行ってください。

- クラス名が単数形でしたが、複数形に変更
- 継承先を `BaserTestFixture` から `TextFixture` に変更
- `import` プロパティを宣言

```php
class UsersFixture extends TestFixture
{
    public $import = ['table' => 'users'];
}    
```

　
### テストメソッドの中でフィクスチャを呼び出する

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
