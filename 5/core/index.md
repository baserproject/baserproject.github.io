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

## テーブル
### 継承
テーブルを作成する際は、AppTable クラスを継承します。  
AppTable クラスは、バリデーション機能の拡張等 baserCMSのコアの機能を提供しています。

```php
class Dummy extends AppTable {}
```

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

なお、CakePHPのソースコードを変更する場合は、[CakePHPのコードを修正する場合のコメントルール](../terms/coding#cakephpのコードを修正する場合のコメントルール) に従って、必ずコメントを記述しておきます。

