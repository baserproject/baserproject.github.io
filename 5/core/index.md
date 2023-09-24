# コアの開発

baserCMSのパッケージのうち、BaserCore について「コア」と呼びます。また、それ以外について、テーマ機能を持つものをコアテーマ、さらにそれ以外をコアプラグイン呼びます。  

コアテーマには、フロントテーマと管理画面テーマが存在します。

ここでは、上記全てを含めたものについて基本的な開発方法を説明します。

## 定数宣言
絶対パスの情報のように環境に依存し、処理中に変更の必要のない値は、定数で宣言します。  
特に全体を通して参照する定数は、次のファイルに宣言します。`bootstrap.php` は、プラグインごとに配置することができます。

```shell
/plugins/baser-core/config/bootstrap.php
```


## アプリケーション設定
アプリケーションの設定値は、Configureクラスで管理します。  
次のファイルに配列で設定情報を記述すると、起動時に自動で読み込まれ、`Configure::read()` を利用する事で、どこからでも参照する事ができます。`setting.php` は、プラグインごとに配置することができます。

```shell
/plugins/baser-core/config/setting.php
```

### ルーティング
ルーティングを定義するには、各プラグインの `{PluginName}\Plugin::routes()` もしくは、`config/routes.php` に定義してください。

## テーブル
### 継承
テーブルを作成する際は、AppTable クラスを継承します。  
AppTable クラスは、バリデーション機能の拡張等 baserCMSのコアの機能を提供しています。

```php
class Dummy extends AppTable {}
```

### 実装
テーブルに作成するメソッドは、基本的に対象テーブルに対する入出力に関するものだけに止め、ファットモデル化を防止します。

複数のテーブルにまたがる処理など、そのほかの処理は、サービスクラスに実装するようにしてください。


## サービス
アプリケーションにおけるビジネスロジックはサービスクラスに実装します。  
サービスクラスは、`Service` ディレクトリに配置します。

### 命名規則
エンティティの操作を前提とする場合、エンティティの複数形を前提とした名称とします。

```shell
# User エンティティの場合のサービス名
UsersService
# インターフェイス名
UsersServiceInterface
```

### インターフェイス作成
サービスクラスを作成する前に、DIコンテナにおける注入に対応するため、インタフェースを作成します。

エンティティのCRUDに対応する場合、次のメソッド名を参考に必要なものだけ定義してください。
- get(): 単一エンティティの取得
- getIndex(): 一覧の取得
- getNew(): 初期値を入れた新規エンティティの取得
- getList(): コントロールソース用のリストの取得
- create(): エンティティの作成
- update(): エンティティの更新
- delete(): エンティティの削除


### サービスプロバイダの定義
`\BaserCore\ServiceProvider\BcServiceProvider` にて利用するサービスの定義を追加します。

```php
class BcServiceProvider extends ServiceProvider
{
    // インターフェイスの定義
    protected $provides = [
        UsersServiceInterface::class,
    ];
    public function services($container): void
    {
        // インターフェイスとサービスクラスの紐づけを定義
        $container->add(UsersServiceInterface::class, UsersService::class);
    }   
}         
```

プラグインの場合は、`{PluginName}\ServiceProvider\{PluginName}ServiceProvider` を作成し、
`{PluginName}\Plugin` にてサービスプロバイダの追加を行います。

```php
namespace BcSearchIndex\Plugin;
public function services(ContainerInterface $container): void
{
    $container->addServiceProvider(new BcSearchIndexServiceProvider());
}
```


## マイグレーション
### マイグレーションファイルの生成
新しく物理テーブルを作成し、インストール時に自動生成したい場合には、マイグレーションファイルの作成が必要です。

[手動で作成](https://book.cakephp.org/migrations/3/ja/index.html#id3) してもよいですが、`migration_diff` コマンドを使うと既存のデータベースより自動生成することができます。

先にデータベースに新しいテーブルを作成した上で、コンテナにログインし、次のコマンドを実行します。
```shell
# マイグレーションファイル作成（事前に dump コマンドの実行が必要）
bin/cake migrations dump
bin/cake bake migration_diff CreateTableName -p PluginName    
# シードファイル作成
bin/cake bake seed --data TableName -p PluginName
```
※ TableName、PluginName は任意の名称にします。

なお、複数のテーブルを追加した場合、`migration_diff` コマンドを実行すると、１つのファイルに２つ分の定義が生成されますが、[命名規則](../terms/coding#マイグレーションファイル
) に従い、手動で変更してください。

### マイグレーションファイルの反映
誰かがテータベース構造を変更した場合は、反映するために、コンテナにログインし、migrationの実行を行う必要があります。  

```shell
# マイグレーションファイルを反映
bin/cake migrations migrate -p PluginName
# シードファイルを反映
bin/cake migrations seed -p PluginName
# 特定のシードファイルを指定する場合
bin/cake migrations seed --seed SamplesSeed -p PluginName
```


## コントローラー
### 継承
コントローラーを作成する際は、各役割ごとのスーパークラスを継承します。

#### フロントページ
フロント認証、ショートコード、言語設定など baserCMS独自のフロント実装を利用するには、
`BcFrontAppController` クラスを継承し、`Controller` 直下に保存します。  


```php
namespace BaserCore\Controller;
class DummyController extends BcFrontAppController {}
```

#### 管理システム
管理システムのテーマ利用や認証機能を利用するには、
`BcAdminAppController` クラスを継承し、`Controller/Admin/` に保存します。
 
```php
namespace BaserCore\Controller\Admin;
class DummyController extends BcAdminAppController {}
```

認証を必要としないアクションを作成する場合には、`AuthenticationComponent::allowUnauthenticated()` を呼び出します。

```php
public function initialize(): void
{
    parent::initialize();
    $this->Authentication->allowUnauthenticated(['actionA', 'actionB']);
}
```

認証済のユーザー情報を取得したい場合は次のコードで取得できます。

```php
$result = $this->Authentication->getResult();
$user = $result->getData();
```

### CRUDのメソッド名
エンティティを操作するためのCRUDの名称は次のメソッド名としてください。
- view(): 単一エンティティの表示
- index(): エンティティ一覧の表示
- add(): エンティティの作成
- edit(): エンティティの更新
- delete(): エンティティの削除


### DIコンテナによるサービスの注入
コントローラーアクションの引数にてサービスクラスのインターフェイスの型を定義すると、DIコンテナがインターフェイスに紐づくサービスクラスをインスタンス化して引数として引き渡してくれます。

```php
public function add(UsersServiceInterface $service)
{
    // メソッドを実行する
}
```
コントローラーの対象となるエンティティに対するサービスは `$service` として定義します。その他の場合は `$sitesService` ようにサービスが特定できる名称とします。


## ビュー
### プレフィックス付のビューファイルの配置
管理システム用のアクション等、プレフィックス付のアクションのテンプレートを作成する場合、
プレフィックス名をサブフォルダとし、その配下に配置します。

    （例）ユーザー管理の index アクションの場合
    templates/Admin/Users/index.php

### エレメントのグルーピング
同様の機能を持つエレメントが複数存在する場合はディレクトリで整理し、ディレクトリ名は単数形とします。また、エンティティに関連するエレメントの場合はエンティティの複数形とします。

    （例）ヘルプファイルの場合
    templates/Admin/element/help/contents_index.php
    templates/Admin/element/help/dashboard_index.php
    （例）User エンティティの場合
    templates/Admin/element/Users/index_list.php
    templates/Admin/element/Users/index_row.php

### リンクと画像、CSS、Javascriptの参照

ビューファイルを記述する際、リンクを作成する場合、また、画像、CSS、Javascriptファイルを参照する場合には、BcBaserHelperを利用します。  
これは、baserCMSが配布する前提のパッケージの為、サブディレクトリに設置した場合等、設置箇所の階層によりリンク切れが発生してしまうのを防ぐ為です。

```php
// リンク
$this->BcBaser->link('title', '/path/to/link');
// 画像
$this->BcBaser->img('/path/to/image', ['alt' => 'title']);
// CSS
$this->BcBaser->css('/path/to/css');
// Javascript
$this->BcBaser->js('/path/to/javascript');
```

### フォームコントロールのテンプレート
フォームコントロールのテンプレートを変更したい場合は、`baser-core/config/bc_form.php` で定義していますのでそちらを変更します。

### ブラウザバリデーションの無効化
ブラウザバリデーションを無効にするためには、BcAdminForm::create() の 第２引数に `['novalidate' => true]` を追加します。

```php
$this->BcAdminForm->control($entity, ['novalidate' => true]);
```

### フォーム送信
フォーム送信時にはセキュリティ対策としてバリデートポストが実行されますが次の方法により調整が可能です。

#### バリデートポストよりフィールドを除外する
```php
// ビューにて
$this->BcAdminForm->unlockField('field_name')
```

#### バリデートポストよりアクションを除外する
```php
// Controller::beforeFilter()にて
$this->Security->config('unlockedActions');
```

#### リンクによるPOST送信
postLink メソッドにより、フォームを作成せずとも簡単にPOST送信ができます。
```php
echo $this->BcAdminForm->postLink(
    __d('baser', 'ツリー構造をチェックする'),
    ['controller' => 'utilities', 'action' => 'verity_contents_tree'], [
        'confirm' => __d('baser', 'ツリー構造をチェックします。よろしいですか？')
        'class' => 'bca-btn'
]);
```

#### Javascriptによるフォーム送信
CSRFトークンを取得してフォーム送信する方法です。ただし、バリデートポストに必要なトークンは取得できないので、バリデートポストよりアクションを除外する必要があります。
```javascript
// CSRFトークン取得
$.bcToken.check(function () {
	form.append($.bcToken.getHiddenToken());
	form.submit();
});
```


## ヘルパ
### ヘルパの定義
ヘルパを読み込むには次のメソッドにて実装します。

```php
// アプリケーション全体の共通ヘルパの定義先
BaserCore\View\Helper\BcAppView::beforeRender()
// 管理画面の共通ヘルパ
BaserCore\View\Helper\BcAdminAppView::beforeRender()
// フロントページの共通ヘルパ
BaserCore\View\Helper\BcFrontAppView::beforeRender()
```

## 管理画面のメニュー表示
管理画面のメニューを表示するには、各パッケージの `config/setting.php` の `BcApp.adminNavigation` を編集します。


## REST API
新しいテーブルを作成した場合、APIにて、CRUDも提供することを前提とします。

### 継承
コントローラーを作成する際は、各役割ごとのスーパークラスを継承します。

#### baser API
認証なしの API を実装するには、`BcApiController` クラスを継承し、`Controller/Api/` に保存します。
```php
namespace BaserCore\Controller\Api;
class DummyController extends BcApiController {}
```

#### baser Admin API
認証付きの API を実装するには、`BcAdminApiController` クラスを継承し、`Controller/Api/Admin/` に保存します。
```php
namespace BaserCore\Controller\Api\Admin;
class DummyController extends BcAdminApiController {}
```

### CRUDのメソッド名
エンティティを操作するためのCRUDの名称は次のメソッド名としてください。
- view(): 単一エンティティの取得
- index(): 一覧の取得
- new(): 初期値を入れた新規エンティティの取得
- list(): コントロールソース用のリストの取得
- add(): エンティティの作成
- edit(): エンティティの更新
- delete(): エンティティの削除

## ユニットテスト
baserCMSのユニットテストは、PHPUnitを利用しています。詳細については次のページを御覧ください。
- [ユニットテスト](./unittest)

## CakePHPのクラスを上書きする
基本的に、CakePHPが提供するコードは修正してはいけません。変更したい場合はCakePHPの本家にプルリクを送信しましょう。  

ただし、baserCMSの仕様を作り上げる為にどうしても変更が必要な場合があります。その場合は composer.json に autoload を定義することで、名前空間を変更することができます。

```json
# Cake\Routing の名前空間を BaserCore\Routing に変更する
{
    "autoload": {
        "psr-4": {
            "Cake\\Routing\\": "plugins/baser-core/src/Routing"
        }
    }
}
```
その際、autoload を有効にするために、Dockerのコンテナにログインし、次のコマンドを実行します。
```shell
composer dump-autoload
```

なお、CakePHPのソースコードを変更する場合は、[CakePHPのコード修正時のコメント](../terms/coding#cakephpのコード修正時のコメント) に従って、必ずコメントを記述しておきます。

