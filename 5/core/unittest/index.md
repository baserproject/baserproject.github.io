# ユニットテスト

baserCMSでは、[PHPUnit](https://phpunit.de/) を利用し、[CakePHPのテストの仕組み](https://book.cakephp.org/4/ja/development/testing.html) でユニットテストを作成します。
baserCMSの全てのメソッドはユニットテストが実装されなければなりません。  
新機能を追加した際、新しいクラスを作成したり、新しいメソッドを追加しているのであれば、テストケースを含めた上でプルリクエストを送ってください。

## テストの前提条件
### スキーマ
フィクスチャファクトリーにより、テスト開始時に全てのスキーマを生成します。  
そのため、プラグインが追加になった場合は、スキーマ生成処理を `tests/bootstrap.php` に記入する必要があります。  

なお、スキーマの生成処理の際、default 接続側に対象のテーブルが存在しないと生成に失敗するため、事前にbaserCMSのインストールが完了している必要があります。

### フィクスチャ
フィクスチャマネージャーによるデータ生成もまだ存在しますが、フィクスチャマネージャーは非推奨となっているため、フィクスチャーファクトリーに全て移行することを前提としています。

## テストの準備
事前にコンテナにログインし、baserCMSのインストールと、テストのセットアップを実行します。

```shell
# コンテナにログイン
composer exec -it bc-php /bin/bash

# composerのインストール
composer install --no-plugins

# baserCMSのインストール
bin/cake setup install
bin/cake install https://localhost foo@example.com basercms basercms --host bc-db --username root --password root

# テストのセットアップ
bin/cake setup test
```

## テストの作成
### テストの配置先
`/plugins/{plugin-name}/tests/TestCase/` ディレクトリに配置します。

### テストのファイル名
ファイル名の最後を `Test.php` とします。

### クラス名
クラス名もファイル名と同じにします。（拡張子を除く）

### クラスの継承
`BaserCore\TestSuite\BcTestCase` クラスを継承します。  
 
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
ただ、パブリックメソッドで担保できない場合はプライベートメソッドのテストを書きましょう。

### アノテーションの付与
なお、テストを実装した際は、本体クラスのメソッドヘッダーにアノテーションを付与します。

```php
/**
 * @unitTest
 */
```
詳細については、[マーキング](../../terms/coding#マーキング) を参照してください。

## テストの実行
テストを実行するには、事前にコンテナにログインし次のコマンドを実行します。

```shell
vendor/bin/phpunit
```

### 特定のテストだけを実行
クラス名のファイルパスを指定します。
```shell
vendor/bin/phpunit plugins/baser-core/tests/TestCase/Model/Table/ArticlesTableTest.php
```

### 特定のテストメソッドだけを実行
filter オプションを利用します。
```shell
vendor/bin/phpunit plugins/baser-core/tests/TestCase/Model/Table/ArticlesTableTest.php --filter testSave
```

### テストメソッド名が一部被ってる場合の実行
testSaveとtestSaveResultなど名ソッド名称が一部被っている場合、正規表現を利用します。
```shell
vendor/bin/phpunit plugins/baser-core/tests/TestCase/Model/Table/ArticlesTableTest.php --filter '/::testSave\b/'
```

## データプロバイダ
値を切り替えてテストを実行する場合は、 `@dataProvider` アノテーションを利用してデータプロバイダーを定義します。

データプロバイダーのメソッド名は、原則、次の命名規則とし、データプロバイダーを利用するメソッドのすぐ下に配置し、コメントヘッダーは書きません。

```php
public function {テスト対象のメソッド名}DataProvider()
{
}
```
※ テスト対象のメソッド名には、`test` は含めません。

## フィクスチャ
テストケース用のデータベースの一時的なデータを提供するフィクスチャを利用する事ができます。

フィクスチャを使うことにより、 実際のアプリケーションに使われているデータに惑わされることなくテストができるというメリットがあります。

baserCMSではフィクスチャファクトリを利用しますので、詳細については次のページを参照してください。

- [フィクスチャ](./fixture)


## カバレッジ
ユニットテストを実行し、PHPUnitとXDebugを利用したカバレッジの確認が可能です。
phpunitを実行する際に閲覧用のhtmlを生成することでブラウザから表示することが出来ます。

### 事前準備
PHPアプリケーション用のdockerコンテナにログインし下記を実施します。  

/usr/local/etc/php/conf.d/xdebug.ini の変更

```shell
xdebug.mode=debug,develop,coverage
```

PHPUnitの実行時に引数を指定し生成

```shell
vendor/bin/phpunit --coverage-html ./webroot/coverage-report
```

### カバレッジの確認
ブラウザより下記URLにアクセスし確認が可能です。  
https://localhost/coverage-report/index.html

## 継続的インテグレーション
baserCMSでは、CI（継続的インテグレーション）に、GitHubActions を利用しています。  
コミット時、プルリクエスト作成時に、[GitHubAcions](https://github.com/baserproject/ucmitz/actions) 上で、ユニットテストが自動的に走ります。

ユニットテスト実行時には、[DockerHub](https://hub.docker.com/r/baserproject/basercms/tags) より、コンテナイメージを取得し、開発環境と同じコンテナを作成した上で実行します。

GitHubActions におけるワークフローについては、レポジトリ内の、 
[/.github/workflows/test.yml](https://github.com/baserproject/ucmitz/blob/dev/.github/workflows/test.yml) に記載しています。

 
### GitHubActionsのトラブルシューティング
#### ローカルではユニットテストが成功するのに GitHubActions 上で失敗する

##### コンテナイメージが取得できない

ネットワーク状況によりDockerHub よりコンテナイメージが取得できず失敗する場合があります。

```shell
Head "https://registry-1.docker.io/v2/phpmyadmin/phpmyadmin/manifests/latest": Get "https://auth.docker.io/token?account=githubactions&scope=repository&3Aphpmyadmin%2Fphpmyadmin%3Apull&service=registry.docker.io": EOF
Error: Process completed with exit code 1.
```

時間を空けて、Re-run all jobs で再実行しましょう。


## 新しいプラグインのテストを追加
`/phpunit.xml.dist` ファイルに、新しいプラグインの `<testsuite>` セクションを追加することで、`vendor/bin/phpunit` 実行時にプラグインのテストを一緒に実行することができます。
### フィクスチャの定義を追加
プラグイン用のフィクスチャを利用するためのマイグレーションの実行は、プラグインディレクトリ配下の `tests/bootstrap.php` にて定義を記述すべきですが、コアプラグインの場合は、アプリケーションルート直下の `tests/bootstrap.php` に追記する事とします。

```php
(new Migrator())->runMany([
    ['plugin' => 'BaserCore'],
    ['plugin' => 'BcBlog']
]);
```

### サービスプロバイダの定義を追加
テストで、DIコンテナを利用して、新しいプラグインのサービスを呼び出す場合、サービスプロバイダの定義が必要です。

BcTestCase::setUp() にて次のように定義します。

```php
// 例
$container->addServiceProvider(new BcSearchIndexServiceProvider());
```

## ユニットテストで便利なメソッド
ユニットテストを実行するには、状態の再現が非常に重要となってきますが、baserCMSでは様々な便利なメソッドを提供しています。次を参考にしてください。
- [ユニットテストで便利なメソッド](./methods)

## ユニットテスト実装ガイド
ユニットテストを実装する場合、次のガイドラインを参考に実装してください。

- [ユニットテスト実装ガイド](./guide)
