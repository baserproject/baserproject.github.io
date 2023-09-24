# アーキテクチャー

baserCMSのアーキテクチャーは、CakePHP4の標準的なアーキテクチャーをベースにしており、さらに、ビジネスロジックをサービスに実装し、はDIコンテナを利用して注入する方針としています。

## ビジネスロジックの実装対象
ビジネスロジックの実装は、テーブルクラスではなく、サービスクラスに実装し、コントローラーにおいては、テーブルクラスを直接利用することはせず、そのサービスクラスを利用します。
 
## 構成の全体像
- サービスクラス（例: `UsersService` ） 
  - 基本的には対象エンティティに関するユースケースを提供 
  - 状態はできるだけ保持せずテスタブルなコードとする
- 管理画面用コントローラー（例: `Admin/UsersController` ） 
  - サービスクラスをDIコンテナで利用し、処理の振り分けを担当 
  - 基本的に `$this->set()` で引き渡すデータは、管理画面用のサービスクラスを作成し（例：`UsersAdminService`）そのメソッドで一括で作成し、一括で引渡し、コントローラーが煩雑にならないようにする
- API用コントローラー（例: `Api/UsersController` ） 
  - サービスクラスをDIコンテナで利用し、Web APIを提供
- 管理画面用ヘルパ
  - 対象画面に必要な情報を提供する 
  - 適宜、DIコンテナを利用してサービスクラスの利用が可能（ `BcContainerTrait` を利用）

　
### クラス図
![管理画面アーキテクチャー](./svg/class/baser-core/basic_manage.svg)
![APIアーキテクチャー](./svg/class/baser-core/basic_api.svg)

## サービスクラスの実装
サービスクラスは、ユースケースを定義します。テーブルクラスと対になるクラスを用意してもよいですが、基本的には役割ごとに用意します。

- ユーザーを管理する（一覧表示、登録、編集、削除）
- プラグインをインストールしアンインストールする

最初は１つのクラスで実装を行い、肥大化に伴って、役割を分けクラスを分割します。

### インターフェイスの定義
サービスクラスを作成する際は、まずインターフェイスを定義します。
```php
// baser-core/src/Service/UsersServiceInterface.php
interface UsersServiceInterface
{
    public function get(int $id): EntityInterface;
}
```

### サービスクラスの定義
作成したインターフェイスを実装するようにサービスクラスを定義します。
```php
// baser-core/src/Service/UsersService.php
class UsersService implements UsersServiceInterface
{
    public function get(int $id): EntityInterface;
    {
        // 実装
    }
}
```
なお、サービスクラスはできるだけ状態を持たないように実装します。

#### サービスクラスの命名規則
テーブルと対にしてサービスを提供する場合はエンティティの複数形にServiceを付け加えます。
```php
User -> UsersService
```


 
## 利用するサービスの定義

利用するサービスはサービスプロバイダで定義します。

メンバー変数 `provides` に利用するサービスのインターフェイスを定義し、`services` メソッドにて、
DIコンテナを利用して、利用するサービスのインターフェイスごとに、実装するサービスクラスを追加します。

```php
// baser-core/src/ServiceProvider/BcServiceProvider.php
class BcServiceProvider extends ServiceProvider
{
    protected $provides = [
        UsersServiceInterface::class
    ];
    
    public function services($container): void
    {
        $container->add(UsersServiceInterface::class, UsersService::class);
    }

}
```

 
## コントーローラーの実装

コントローラーでは、引数に利用したいサービスのインターフェイスを定義すると、
サービスプロバイダで定義したサービスクラスを利用できます。

```php
// baser-core/src/Controller/Admin/UsersController.php
class UsersController extends BcAdminAppController
{
    public function index(UsersServiceInterface $service)
    {
        // 処理を記載
    }
}
```

コントローラーではビジネスロジックをできるだけ実装せず、サービスクラスに実装して、それを利用します。

また、コントローラー内ではテーブルクラスを直接利用せつ、サービスクラスに利用する処理を実装し、そちらを利用するようにします。

 
### ビューへの変数の引き渡し
コントローラーからビューに変数を引き渡す場合は、コントローラーの処理が煩雑とならないよう、管理画面用のサービスクラスを作成し、そこで一括で生成した上で、一括で `$this->set()` に渡すようにします。

サービスに実装することで、引き渡す変数の明示化を行い、テスタブルなコードを目指します。

```php
// /baser-core/src/Service/UsersAdminService.php
class UsersAdminService extends UsersService
{
    public function getViewVarsForIndex()
    {
        return [
            'users' => $this->getIndex()
        ];
    }
}

// /baser-core/src/Controller/Admin/UsersController.php
class UsersController extends BcAdminAppController
{
    public function index(UsersAdminService $service)
    {
        $this->set($service->getViewVarsForIndex());
    }
}
```
 
## ヘルパーの実装

ヘルパーについては、適宜必要となるサービスクラスを利用することもできます。  
CakePHP4では、ヘルパでDIコンテナが利用できませんので、代替措置として `BcContainerTrait ` を利用します。

```php
// baser-core/src/View/Helper/BcAdminUserHelper.php
class BcAdminUserHelper extends Helper
{
    use \BaserCore\Utility\BcContainerTrait;
    
    public $UsersService;
    
    public function initialize(array $config)
    {
        parent::initialize($config);
        $this->UsersService = $this->getService(UsersServiceInterface::class)
    }
    
    public function get($id)
    {
        $this->UsersService->get($id);
    }
}
```

 
## APIの実装
APIは、コントローラーからサービスクラスを呼び出し実装します。

`BcAdminApiController` を継承することによりJWT認証がかかる仕様となっています。

```php
// baser-core/src/Controller/Api/Admin/UsersController.php
class UsersController extends BcAdminApiController
{
    public function index(UsersServiceInterface $users)
    {
        // 実装
    }
}
```

### 参考
[依存性の注入 - CakePHP4](https://book.cakephp.org/4/ja/development/dependency-injection.html)

