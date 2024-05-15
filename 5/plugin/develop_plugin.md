# 独自のプラグインを作成する

独自の Webアプリケーションを baserCMS のプラグインとして開発すると、管理システムでの有効化や無効化が行え、インストーラーやアンインストーラーを簡単に実装することができます。
また、本体での処理を横取りするイベント機能を提供しており、本体の振る舞いを変えることもできます。


## プラグインの基本的な作り方
CakePHPのプラグインと同様の方法で作ることができます。  
ただし、baserCMSの管理機能に認識させる前提で開発する場合は、オートローダーの再作成は不要です。baserCMSの管理機能側でオートローダーの設定を自動で行うためです。

- [CakePHP Cookbook 独自プラグインの作成](https://book.cakephp.org/4/ja/plugins.html#plugin-create-your-own)

まずは `bake` コマンドを叩くことから始めましょう。

```shell
bin/cake bake plugin {YourPlugin}
```

プラグインは、`/plugins` フォルダに配置します。

## プラグインを baserCMS に認識させる
独自のプラグインを baserCMS の管理機能に認識させる為には、いくつかのファイルの調整が必要です。

### プラグイン情報ファイルを設置する
`/config.php` を作成し、プラグインの情報を記述します。これによりプラグイン管理で認識できるようになります。

```php
// /plugins/{YourPlugin}/config.php
return [
    // プラグインタイプ: Plugin を含めるとプラグイン管理で認識できる
    'type' => ['Plugin'],
    // タイトル: プラグイン管理に表示
    'title' => 'SPAサンプル',
    // 説明文：プラグイン管理に表示
    'description' => 'SPAのサンプルプラグインです',
    // 作成者: プラグイン管理に表示
    'author' => 'baserCMS User Community',
    // URL: プラグイン管理に表示
    'url' => 'https://basercms.net',
    // インストールメッセージ: インストール時に表示
    'installMessage' => ''
];
```
ちなみに `type` の種類は次の通りとなります。
- Plugin: プラグイン
- CorePlugin: コアプラグイン
- Theme: フロントページ用テーマ
- AdminTheme: 管理画面用テーマ

### BcPluginを継承する
`/src/{YourPlugin}Plugin.php` にて、`BcPlugin` を継承します。これにより、プラグイン管理でインストールやアンインストールが行えるようになります。

```php
// /plugins/{YourPlugin}/src/{YourPlugin}Plugin.php
use BaserCore\BcPlugin;
class {YourPlugin}Plugin extends BcPlugin
{
}
```
### バージョンファイルを作成する
これは必須ではありませんが、baserCMSでは、プラグインのアップデートをサポートしています。  
その際、バージョンファイルをトリガーにアップデート有無の認識を行っていますので、将来的にバージョンアップを予定しているのであれば、バージョンファイルを作成しましょう。

バージョン番号は、ドット（.）で区切った３つの番号で管理します。詳しくは [バージョン番号](../terms/version) をご覧ください。

```shell
# /plugins/{YourPlugin}/VERSION.txt
# 一行目にバージョン番号を記述します。
1.0.0
```

## プラグインを有効化する
管理システムにログインし、プラグイン管理よりインストールを実行します。  

CakePHPでのプラグイン有効化手順である、オートローダーの再作成（`dumpautoload`）や、プラグインロードの記述（`Application::addPlugin()`）は不要です。

インストールが完了すると、プラグインを自動的に読み込みます。

## baserCMS４からの変更点
CakePHP４に対応することにより、アーキテクチャーも大幅に変更となり、テーマやプラグインの作り方も変更となっています。詳細についてはこちらをご覧ください。

- [baserCMS４からの変更点](../core/difference_from_basercms4)


## 管理システムを作成する
baserCMS を利用して開発すると、簡単にログイン認証付きのリッチな管理画面を作成することができます。
　
### Controller の配置
管理画面を実装する Controller は、`Admin` ディレクトリ内に配置します。

また、 `BcAdminAppController` を継承します。

```php
// /plugins/{YourPlugin}/Controller/Admin/YourController.php
class YourController extends \BaserCore\Controller\Admin\BcAdminAppController
{
    public function index()
    {

    }
}
```

#### beforeFilter 利用時の注意点
`beforeFilter` メソッドは、アクションが実行される前のタイミングで処理を入れるのに都合がよいメソッドですが、baserCMSで利用する場合には注意が必要です。

メソッド内にて親メソッドを呼び出すことが前提になりますが、戻り値を必ずリターンで返却するようにしてください。これは、親メソッド内にて、アクセス制限の判定を行っていて、アクセス不可と判定された場合に、`Response` クラスが戻ってくるのですが、これを返却しないと呼び出し対象となるアクションが実行されてしまうからです。

```php
public function beforeFilter(Event $event)
{
    $response = parent::beforeFilter($event);
    if($response) return $response;
    // 処理を記述
}
```

### Template の配置

管理画面を実装する Template は、`Admin` ディレクトリ内に配置します。

```shell
/plugins/{YourPlugin}/templates/Admin/Your/index.php
```

### 表示を確認
次のURLでアクセスできます。    

```shell
https://your-host-name/baser/admin/your-plugin/your/index
```
baserCMSの管理画面の場合、プレフィックスが `Admin` でも URL上のプレフィックスが `/baser/admin` となります。`/baser` の部分を変更したい場合は、`/config/.env` にて変更できます。

この時点で認証がかかっていますのでログインが必要です。

```shell
https://your-host-name/baser/admin/baser-core/users/login
```

### タイトルをセットする
テンプレート内にて次のコードを記述することでタイトルをセットできます。

```php
// /plugins/{YourPlugin}/templates/Admin/Your/index.php
$this-BcAdmin->setTitle('タイトルを記述');
```

### 画面のヘルプをセットする
対象画面の説明用のヘルプを配置するには、事前に `help` ディレクトリに、エレメントを配置する必要があります。

```shell
/plugins/{YourPlugin}/templates/Admin/element/help/{your_help_name}.php
```
エレメントにヘルプ内容を記述したら、呼び出し側のテンプレートにヘルプの呼び出し定義を記述します。

```php
// /plugins/{YourPlugin}/templates/Admin/Your/index.php
$this-BcAdmin->setHelp('your_help_name');
```

### 検索フォームをセットする
データの一覧画面などで検索フォームを設置するには、事前に `search` ディレクトリに、エレメントを配置する必要があります。

```shell
/plugins/{YourPlugin}/templates/Admin/element/search/{your_search_name}.php
```

エレメントに検索フォームの内容を記述したら、呼び出し側のテンプレートに検索フォームの呼び出し定義を記述します。

```php
// /plugins/{YourPlugin}/templates/Admin/Your/index.php
$this-BcAdmin->setSearch('your_search_name');
```

### タイトルの右側にボタンをセットする
タイトルの右側に新規登録ボタンなどを設置するには、次の呼び出し定義を記述します。

```php
// /plugins/{YourPlugin}/templates/Admin/Your/index.php
// 例
$this->BcAdmin->addAdminMainBodyHeaderLinks([
  'url' => ['action' => 'add', $id],
  'title' => '新規記事追加',
]);
```

## データベースのマイグレーション
マイグレーションファイルやシードファイルを設置することで、インストール時、自動的に読み込むことができます。

### マイグレーションファイルの作成
データベースのテーブルからマイグレーションファイルを作成する場合はコマンドで実行します。下記コマンドを実行すると、`/plugins/{YourPlugin}/config/Migrations/` 内に自動生成します。

```
bin/cake bake migration_snapshot Initial --plugin {YourPlugin}
```

また、CakePHPの標準の機能として、DBテーブルのプレフィックスに対応していませんが、baserCMSではそれに対応するためにマイグレーションファイルのクラスにおいて、 `BaserCore\Database\Migration\BcMigration` を継承する必要があります。  
これを忘れると、プレフィックスを設定しているサイトにおいて、マイグレーションファイルがうまく読み込めなくなりますので忘れないようにしてください。

```php
// 例
use BaserCore\Database\Migration\BcMigration;
class CreatePages extends BcMigration
{
}
```


なお、コマンドでマイグレーションファイルを作る際、事前にオートローダーの再作成が必要です。

```shell
composer dump-autoload
```

### シードファイルの作成
データベースのテーブルからシードファイルを作成する場合は次のようになります。
```shell
bin/cake bake seed --data {TableName} -p {YourPlugin}
```

## インストール時の処理
プラグインのインストール時に、マイグレーションファイルの読み込み以外に何らかの処理を行いたい場合は、Plugin クラスに記述することができます。

```php
// /plugins/{YourPlugin}/src/Plugin.php
class Plugin extends \BaserCore\BcPlugin
{
    public function install($options = []) : bool
    {
        // ここに必要なインストール処理を記述
        return parent::install($options);
    }
}
```



## アンインストール時の処理
プラグインの削除時に、マイグレーションファイルの読み込み以外に何らかの処理を行いたい場合は、Plugin クラスに記述することができます。

```php
// /plugins/{YourPlugin}/src/Plugin.php
class Plugin extends \BaserCore\BcPlugin
{
    public function uninstall($options = []) : bool
    {
        // ここに必要なアンインストール処理を記述
        return parent::uninstall($options);
    }
}
```


## アップデート時の処理
プラグインのアップデート時にマイグレーションやスクリプトの実行を行いたい場合、いくつかのファイルを調整します。

### バージョンファイル
`/VERSION.txt` 内のバージョン番号が、データベースに保管されたバージョン番号よりも大きい場合に、一覧にアップデートボタンを表示する仕様になっており、アップデート時に、マイグレーションの実行とスクリプトの実行を行うようになっています。

バージョン番号を以前のものより大きい数字で定義しておきます。

### アップデートスクリプト
#### 対象バージョン用スクリプト設置フォルダ
`/config/update/` 内にバージョン番号のフォルダを配置すると、対象バージョン用のスクリプトとして認識されます。

```shell
# アップデート対象のバージョンが「5.0.0」の場合
/config/update/5.0.0/
```

#### アラートメッセージ表示
対象バージョン用スクリプト設置フォルダに `config.php` を配置することでアップデート画面に表示するアラートメッセージを定義することができます。

```php
// /plugins/{YourPlugin}/config/update/5.0.0/config.php
<?php
return [
    'updateMessage' => 'アラートメッセージを記述します。'
];
```

#### アップデートスクリプト
対象バージョン用プログラム設置フォルダに `updater.php` を配置することで、アップデート時に実行するスクリプトを定義することができます。
```php
// /plugins/{YourPlugin}/config/update/5.0.0/updater.php
<?php
// 例）
$users = TableRegistry::getTableLocator()->get('BaserCore.Users');
$user = $users->find()->where(['id' => 1])->first();
$user->name = 'hoge';
$users->save($user);
```

### データベースのマイグレーション
マイグレーションファイルを設置しておけば自動でマイグレーションを実行します。  
マイグレーションファイル作成方法については次をご覧ください。

- [CakePHP Migrations](https://book.cakephp.org/migrations/3/ja/index.html#)

その際においても、`BcMigration` の継承を忘れないようにしてください。

- [マイグレーションファイルの作成](#マイグレーションファイルの作成)


## サービスクラスの利用
MVCモデルにサービスレイヤーを追加するとメンテナンス性が高くテスタブルなコードとなりやすいです。
baserCMS本体のコードは全てサービスレイヤーを利用する前提で構築されています。

サービスクラスを利用する場合は、次のようにサービスクラスとサービスプロバイダを定義してください。

### サービスクラス
テーブルに紐づくサービスクラスの場合は、`PagesService` のように複数形の名称を推奨しています。

```php
// /plugins/{YourPlugin}/src/Service/PagesService.php
class PagesService
{
}
```

また、サービスクラスを利用する場合は、インターフェイスの定義も必要となります。
```php
// /plugins/{YourPlugin}/src/Service/PagesServiceInterface.php
interface PagesServiceInterface
{
}
```

### サービスプロバイダ
サービスを読み込むためのサービスプロバイダは、 `{YourPluginName}ServiceProvider` の名称を推奨しています。

```php
// /plugins/{YourPlugin}/src/Service/{YourPluginName}ServiceProvider.php
class YourPluginNameServiceProvider extends ServiceProvider
{
    protected $provides = [
        PagesServiceInterface::class
    ];
    
    public function services($container): void
    {
        $container->add(PagesServiceInterface::class, PagesService::class);
    }    
}
```

### サービスプロバイダの追加
サービスプロバイダを準備したら、`Plugin` クラスにて忘れないようにコンテナに追加しておきます。
```php
class Plugin extends BcPlugin
{
    public function services(ContainerInterface $container): void
    {
        $container->addServiceProvider(new YourPluginNameServiceProvider());
    }
}
```

### コントローラーでサービスクラスを読み込む
サービスクラスはコントローラーの引数の型にインターフェイスを定義すると自動的にインスタンスを注入します。

パスパラメーターを利用する場合には、その次の引数に定義すると参照することができます。
```php
class PagesController extends AppController
{
    public function index(
        PagesServiceInterface $service,
        UsersServiceInterface $usersService,
        string $argString,
        int $argInt
    ) {
        $service->yourMethod();
    }
}
```

サービスクラスの利用方法、及びサービスプロバイダー定義方法の詳細は次のページをご覧ください。

- [CakePHP Cookbook: 依存性の注入(DI)](https://book.cakephp.org/4/ja/development/dependency-injection.html){:target="_blank"}

## APIドキュメント
baserCMSで利用できるAPIについては次をご覧ください。

- [baserCMS クラスリファレンス](./reference/){:target="_blank"}
- [CakePHP API ドキュメント](https://api.cakephp.org/){:target="_blank"}

## プラグイン配布・販売する
プラグインができたら、早速、GitHubや、baserマーケットで公開しましょう。

- [baserマーケット：テーマやプラグインを配布・販売する](../market#テーマやプラグインを配布・販売する)
