# フィクスチャの利用

CakePHP4.3 より、これまでのフィクスチャマネージャーが非推奨になり、フィクスチャファクトリの利用が推奨されています。  
フィクスチャのスキーマとデータ管理の責務が分割を目的とし、フィクスチャの複雑化の防止と、初期化処理の高速化ができるようになっています。

## 従来のフィクスチャ
`$import` でテーブルを指定し、`init()` で、`$record` にデータを定義。
```php
    public $import = ['table' => 'content_folders'];
    public function init(): void
    {
        $this->records = [
            [
                'id' => '1',
                'folder_template' => 'baserCMSサンプル',
                'page_template' => '',
                'created' => '2016-08-10 02:17:28',
                'modified' => null
            ]
        ];    
```

　
## 新しいフィクスチャ

### フィクスチャファイル
`$import` も `init()` も定義せず、利用するかどうかを示すためだけに定義します。  
全てを移行するには時間がかかるので、空のフィクスチャは、Empty ディレクトリに入れるようにします。

```php
// plugins/baser-core/tests/Fixture/Empty/UsersFixture
namespace BaserCore\Test\Fixture\Empty;

use Cake\TestSuite\Fixture\TestFixture;

/**
 * Class UsersFixture
 */
class UsersFixture extends TestFixture {}
```

### フィクスチャファクトリ
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

### フィクスチャシナリオ
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

```php
// シナリオを利用して無効ユーザーを50人追加
$this->loadFixtureScenario(SuspendedUsersScenario::class, 50);
// 最低限のメインサイトと管理ユーザーをだけを準備する
$this->loadFixtureScenario(InitAppScenario::class);
```

　
## データの初期化について
テストの実行後にデータの初期化を行うには、`$fixtures` の定義が必要です。  
`$fixtures` に定義されているテーブルが初期化対象となるためです。

```php
public $fixtures = [
    'plugin.BaserCore.Empty/Users',
    'plugin.BaserCore.Empty/Sites',
];
```

定義の仕方は従来と同じなのですが、この時に、フィクスチャファイルに、`$record` の定義が入っていると混乱を生む原となってしまいます。  
`Empty` ディレクトリ内に定義した、空のフィクスチャファイルを利用するようにしましょう。

なお、初期化方法については、truncate（`TruncateStrategy`） と DB のロールバック（`TransactionStrategy`）があるのですが、ロールバックの方が高速であるため、初期状態ではこちらを設定しています。  
ロールバック時の問題としては、インクリメント値が初期化されないため、テストにおいて初期化される事が前提となっている場合は、明示的にインクリメント値を初期化するか、`TruncateStrategy` を利用するようにテストケースクラスに定義します。

```php
protected function getFixtureStrategy(): FixtureStrategyInterface
{
    return new TruncateStrategy();
}
```


