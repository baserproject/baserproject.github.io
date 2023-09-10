# baserCMS４からの変更点

baserCMS５では、CakePHP4系にアップデートしたことに伴い、baserCMS４からの変更点が多数ありますのでご注意ください。

## ルーティング
### URL解析
```php
// baserCMS４
Router::parse($url);
// baserCMS５
Router::getRouteCollection()->parse($url);
```

## モデル
### モデルクラスの取得
テーブルロケータの利用に変更となっています。
```php
// baserCMS４
ClassRegistry::init('User');
// baserCMS５
TableRegistry::getTableLocator()->get('BaserCore.Users');
// コントローラーの場合
$this->getTableLocator()->get('BaserCore.Users');
```

### バリデーションの定義
`validate` プロパティでの定義から、`validationDefault` メソッドでの定義へと変更となっています。

## ビヘイビア
### TreeBehavior
#### generateTreeListの廃止
カスタムファインダー `treeList` を利用します。
```php
$list = $categories->find('treeList', ['spacer' => ...]);
```

## コントローラー

### 廃止となったプロパティ
次のプロパティは廃止となりました。
- subMenuElements
- crumbs

### POST送信判定の変更
```php
// baserCMS４
if ($this->request->data) {}
// baserCMS５
if ($this->request->is('post')) {}
```

### リクエストの取得
```php
$request = $this->getRequest();    // Controller / View
$request = Router::getRequest();    // Other
```

### リクエストデータの取得
```php
// baserCMS４
$data = $request->data;
// baserCMS５
$data = $request->getData();
// リクエストの書き換え
// CakePHP4系の getRequest() は clone されることが前提のため注意が必要
$this->setRequest($this->getRequest->withParsedBody($data));
```

### パラメーターの取得
```php
// baserCMS４
$action = $request->params['action'];
// baserCMS５
$action = $request->getParam('action');
```

### 現在のURL取得
```php
// パラメータなし
$url = $request->getPath();
// パラメータあり
$url = $request->getRequestTarget();
```

### セッションの取得
セッションはリクエストから取得する仕様に変更となりました。

```php
$session = $request->getSession();
$data = $session->read('etc');
```

### フォームの初期値設定
baserCMS４ では、`$this->request->data` にセットしていましたが、エンティティによるセットに変更となりました。
サービスクラスに `getNew()` メソッドを作成しそこで初期値を生成し、Adminサービスクラスにより一括設定を行います。

```php
// サービス
class SitesService
{
    public function getNew(): EntityInterface
    {
        return $this->Sites->newEntity([
            'status' => false,
        ], [
            'validate' => false,
        ]);
    }
}

// Adminサービス
class SitesAdminService
{
    public function getViewVarsForAdd()
    {
        return [
            'site' => $this->getNew()
        ];       
    }
}

// コントローラー
class SitesController extends BcAdminAppController
{
    public function add(SiteAdminServiceInterface $service)
    {
        $this->set($service->getViewVarsForAdd());
    }
}

// ビュー
$this->BcAdminForm->create($site);
``` 

### 検索フォームの設定
```php
// baserCMS４
$this->search = $templateName;
// baserCMS５
$this->setSearch($templateName); // コントローラー
$this->BcAdmin->setSearch($templateName); // テンプレート 
```
テンプレートのヘッダーでの定義を推奨しています。

 
### ヘルプの設定
```php
// baserCMS４
$this->help = $templateName;
// baserCMS５
$this->setHelp($templateName); // コントローラー
$this->BcAdmin->setHelp($templateName); // テンプレート
```
テンプレートのヘッダーでの定義を推奨しています。

 
### タイトルの設定
```php
// baserCMS４
$this->pageTitle = $title;
// baserCMS５
$this->setTitle($title); // コントローラー
$this->BcAdmin->setTitle($templateName); // テンプレート
```
テンプレートのヘッダーでの定義を推奨しています。

### セキュリティコンポーネント
CSRF対策用の処理は、セキュリティコンポーネントから、ミドルウェアに移行となり、SSL要求、バリデートポストをセキュリティコンポーネントにて実装します。


### Ajaxの処理について
管理画面から呼び出す Ajax のアクションについて、返却値を JSON化できるものは、Api 用のコントローラーに移行し、そちらを呼び出すようになりました。

ただし、HTMLを返却するもので、JSON化の難易度が高いものは、Admin 用のコントローラーでそのまま移行しています。


## ビュー
### テンプレートの配置
ビューのテンプレートは、管理画面用のものは、BcAdminThirdプラグイン内に、フロントページのものは、BcFrontプラグイン内に全て取りまとめています。

### フォームコントロールの出力
```php
// baserCMS４
$this->BcForm->input()
// baserCMS５
$this->BcAdminForm->control()
```

### エンティティの型変更
エンティティは配列からオブジェクトに変更となっています。
```php
// baserCMS４
$user['User']['real_name_1'];
// baserCMS５
$user->real_name_1;
```
既存の配列は次の正規表現でオブジェクトのコードに置換できます。
```shell
# 検索対象
\$modelName\['ModelName'\]\['(.+?)'\]
# 置き換え後
\$modelName->$1
```

### 検索フォームの送信
baserCMS４では、検索処理について POST でデータを渡していましたが、検索状態をURLで共有できるようにするため、GET で渡すように処理を変更します。

### BcTime::format() の引数の順番変更
```php
// baserCMS４
$this->BcTime->format($format, $date);
// baserCMS５
$this->BcTime->format($date, $format);
```
また、フォーマットの形式が変更となっているので注意が必要です。`YYYY-MM-dd`  

- [Date/Time Format Syntax](https://unicode-org.github.io/icu/userguide/format_parse/datetime/#datetime-format-syntax)

### 名前付きパラメータ
名前付きパラメータは仕様から削除されています。クエリーストリングに変換します。

```php
// 名前付きパラメーター
$this->BcBaser->link('hoge', ['controller' => 'Users', 'action' => 'index', 'name1' => 1, 'named2' => 2]);
// クエリーストリング
$this->BcBaser->link('hoge', ['controller' => 'Users', 'action' => 'index', '?' => ['name1' => 1, 'named2' => 2]]);
```

### テーマの定義について
テーマの定義は、次のメソッドにて行っています。
```php
// 管理画面
BaserCore\Controller\Admin\BcAdminAppController::beforeRender()
// フロントページ
BaserCore\Controller\BcFrontAppController::beforeRender()
```

### 一覧のAjax
baserCMS４にて一覧で利用していたAjax呼び出しは廃止になりました。

### フォームコントロールの名称
フォームコントロールにおいてクラス名は不要となりました。フィールド名だけ定義します。

```php
$this->BcAdminForm->control('field_name');
```

## ヘルパー
### 継承先の変更

`AppHelper` はなくなりました。  
継承先が `Helper` になっています。

### イベントの実装
イベントを実装するには、`BcEventDispatcherTrait` を利用します。

```php
class ClassName extends Cake\View\Helper {
    use BcEventDispatcherTrait;
}    
```

### フォームコントロールのID

フォームコントロールのIDは、baserCMS４系でドットを境にアッパーキャメルケースになっていましたが、ハイフン区切りになっています。

```php
// コード例
echo $this->BcAdminForm->control('ViewSetting.mode', ['type' => 'hidden', 'value' => 'index']);
// 出力HTML
<input type="hidden" name="ViewSetting[mode]" class="bca-hidden__input" id="viewsetting-mode" value="index">
```

## プラグイン
### プラグインのパス取得
```php
Cake\Core\Plugin::path($pluginName)
```
## テスト
### フィクスチャ
これまでの FixtureManager によるフィクスチャは非推奨となりました。FixtureFactory を利用します。


## CakeSchema
CakeScheme はなくなりました。コマンド `Console/cake schema` は利用できません。
[マイグレーション](../core/index#マイグレーション) を利用してください。