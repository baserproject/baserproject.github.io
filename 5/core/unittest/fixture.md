# フィクスチャ

CakePHP4.3 より、これまでのフィクスチャマネージャーが非推奨になり、フィクスチャファクトリの利用が推奨されています。  
フィクスチャのスキーマとデータ管理の責務が分割を目的とし、フィクスチャの複雑化の防止と、初期化処理の高速化ができるようになっています。  

現在のソースコードでは、従来のフィクスチャマネージャーの処理が残っていますが、今後は、フィクスチャファクトリに移行していく方針です。


## フィクスチャファクトリの定義
データを生成するためのクラスです。各エンティティごとに定義します。  
複数のデータを一括で作成できるなどのメリットがあります。また、Faker を利用することで、ランダムな文字列などを当て込むことができます。

作りたいレコードの種類ごとにメソッドを用意する方針で利用していきます。

```php
namespace BaserCore\Test\Factory;

use CakephpFixtureFactories\Factory\BaseFactory as CakephpBaseFactory;
use Faker\Generator;
class UserFactory extends CakephpBaseFactory
{
    /**
     * 管理ユーザーに設定する
     * @return UserFactory
     */
    public function admin()
    {
        return $this->setField('id', 1)
            ->setField('user_group_id', 1);
    }
}
```

なお、フィクスチャファクトリは、コマンドで自動生成できます。
```shell
bin/cake bake fixture_factory -p BaserCore TableName
```

## フィクスチャシナリオ
データを利用したいシチュエーション別にシナリオを用意することができます。
例えば、インストール直後の最低限のデータや、大量のブログ記事データなど。

```php
// 最低限のメインサイトと管理ユーザーをだけを準備する
namespace BaserCore\Test\Scenario;

use BaserCore\Test\Factory\SiteFactory;
use BaserCore\Test\Factory\UserFactory;
use CakephpFixtureFactories\Scenario\FixtureScenarioInterface;
class InitAppScenario implements FixtureScenarioInterface
{

    /**
     * load
     */
    public function load(...$args)
    {
        SiteFactory::make()->main()->persist();
        UserFactory::make()->admin()->persist();
    }

}
```

 
## フィクスチャファクトリの利用方法
`make()` メソッドで、データを作り、`persist()` で永続化（DBへ保存）します。

```php
// status が有効なユーザーを5名保存
UserFactory::make(['status' => true], 5)->persist();
// 無効ユーザーを100人追加
UserFactory::make(100)->suspended()->persist();
```

 
## フィクスチャシナリオの利用方法
`loadFixtureScenario` メソッドを利用して、クラスを読み込む事で実行します。  
なお、`ScenarioAwareTrait` の実装が必要です。

```php
// シナリオを利用して無効ユーザーを50人追加
$this->loadFixtureScenario(SuspendedUsersScenario::class, 50);
// 最低限のメインサイトと管理ユーザーをだけを準備する
$this->loadFixtureScenario(InitAppScenario::class);
```
 
## データの初期化について
初期化方法については、truncate（`TruncateStrategy`） と DB のロールバック（`TransactionStrategy`）があるのですが、ロールバックの方が高速であるため、初期状態ではこちらを設定しています。  
ロールバック時の問題としては、インクリメント値が初期化されないため、テストにおいて初期化される事が前提となっている場合は、明示的にインクリメント値を初期化するか、`TruncateStrategy` を利用するようにテストケースクラスに定義します。

```php
// 親の setUp() の前に実行する
public function setUp(): void
{
    $this->setFixtureTruncate();
    parent::setUp();
}
```

また、`TransactionStrategy` を利用している場合は、データベースに保存されているものの、
トランザクションとして commit されませんので、ブレークポイントでプログラムを止めて、
phpMyAdmin などのツールからデータの保存を確認するという事ができませんので注意が必要です。 

確認したい場合は、`setFixtureTruncate()` メソッドで、truncate に切り替えてからテストを実行してください。

## トラブルシューティング
### SAVEPOINT LEVEL1 does not exist
DBトランザクションを利用しているメソッドのテストを行う場合に「SAVEPOINT LEVEL1 does not exist」というエラーが発生する事があります。  

フィクスチャーにて、`TransactionStrategy` を利用している事に起因する場合があり、その際、`TruncateStrategy` に変更する事によってエラーを回避できます。

