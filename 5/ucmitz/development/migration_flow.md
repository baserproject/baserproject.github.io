# 移行の流れ

## データベースのデータを作成する

### SQLファイルよりデータベースにスキーマを作成
`__assets/basercms4.sql` より対象のテーブルの create 文と、 insert 文を探し、phpMyAdmin 等で、スキーマを作成し、データを投入します。  
その際、ファイルの下の方に、Primary Key の作成と、auto increment の設定文があるのでそちらも忘れないように実行します。 

```sql
ALTER TABLE `blog_categories`
  ADD PRIMARY KEY (`id`);
  
ALTER TABLE `blog_posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
```

### マイグレーションファイルを作成 

データベースのデータを元にマイグレーションファイルを作成します。
```shell
bin/cake bake migration_diff CreateTableName --plugin PluginName    
bin/cake bake seed --data TableName --plugin PluginName
```
※ TableName、PluginName は任意の名称にします。

参考: [データベースにおける注意点](https://baserproject.github.io/5/ucmitz/development/migration_point/database)

　
## Entity を作成する
対象データ用の Entityを作成します。

　
## Table を移行する
baserCMS4の Model は、Table へと移行します。とりあえずエラーが出なくなるようにするところまで調整していきます。

参考: [モデルにおける注意点](https://baserproject.github.io/5/ucmitz/development/migration_point/model)

### 既存の対象モデルを確認
/Model/Table/_NotYetMigratedに対象クラスがないか確認します。あれば Table直下に移動します。

### バリデーションの移行
バリデーションは、`validationDefault` メソッドにて再定義します。  
なお、独自バリデーションが存在する場合は、バリデーションクラスとして実装します。
次のようなファイル名として配置してください。テストも書きます。

```shell
/Model/Talbe/Validation/EntityNameValidation.php
```

`validationDefault` メソッドにて次のコードを定義することで利用できます。
```php
 $validator->setProvider('entityName', 'BaserCore\Model\Validation\EntityNameValidation');
 ```
 
### Serviceクラスへの移行を検討する

メソッドが対象テーブルのみについての処理でない場合、Serviceクラスへの移行を検討します。
移行する場合は、フォルダ内検索などで、メソッドの利用箇所の確認を行い、そちらのコードの変更も行います。

　
## Table のテストを移行する

### 既存のテストを確認
`/TestCase/Model/Table/_NotYetMigrated` に対象クラスがないか確認します。あれば、Table直下に移動します。

### Fixture を移行する
Fixtureは、`/Fixture/Default` 内のものをFixtureフォルダ直下に配置して移行します。  
クラス名は単数形から複数形に変更してください。

また、import プロパティを定義します。

```php
public $import = ['table' => 'sites'];
```

　
## Service を作成する

Serviceクラスでは、まず、基本的なメソッドとテストを作成します。

参考: [アーキテクチャー設計方針](https://baserproject.github.io/5/ucmitz/basic/architecture_design_policy)

### Interface を作成
先に Interface を作成します。

### Service クラスを作成
基本的なメソッドとテストを作成し、必要に応じて他のユースケースとなるメソッドをを追加します。

- get(): 単一エンティティの取得
- getIndex(): 一覧の取得
- getNew(): 初期値を入れた新規エンティティの取得
- getList(): コントロールソース用のリストの取得
- create(): エンティティの作成
- update(): エンティティの更新
- delete(): エンティティの削除

### ServiceProvider で利用サービスの定義
`\BaserCore\ServiceProvider\BcServiceProvider` にて利用するサービスの定義を追加します。

　
## API を作成する
REST API として基本的なメソッドとテストを作成します。  
DIコンテナで Service クラスを注入して作成します。

- view(): 単一エンティティの取得
- index(): 一覧の取得
- new(): 初期値を入れた新規エンティティの取得
- list(): コントロールソース用のリストの取得
- add(): エンティティの作成
- edit(): エンティティの更新
- delete(): エンティティの削除

　
## Controller を移行する
DIコンテナで Service クラスを注入し実装し、テストを作成します。  
必要があれば処理を ManageServiceに移行し、ビューに処理が移行するまでにエラーが出なくなるようにします。
    
参考: [コントローラーにおける注意点](https://baserproject.github.io/5/ucmitz/development/migration_point/controller)

### リクエスト判定を変更
postリクエストの判定を `$this->request->is('post')` に変更します。

### 表示に関する処理を View に移行する
`$this->setTitle()` / `$this->setHelp()` / `$this->setSearch()` を テンプレートファイルに移行します。

BcAdminHelper経由でテンプレートファイルの冒頭に配置します。
```php
$this->BcAdmin->setTitle();
$this->BcAdmin->setHelp();
$this->BcAdmin->setSearch();
```

　
## View を移行

参考: [ビューにおける注意点](https://baserproject.github.io/5/ucmitz/development/migration_point/view)  
参考: [ヘルパーにおける注意点](https://baserproject.github.io/5/ucmitz/development/migration_point/helper)

### 一覧のAjaxコードを削除
一覧でのAjax呼び出しは廃止になりました。次のような Javascript は削除します。

```php
$this->BcBaser->js([
  'admin/libs/jquery.baser_ajax_data_list',
  'admin/libs/jquery.baser_ajax_batch',
  'admin/libs/baser_ajax_data_list_config',
  'admin/libs/baser_ajax_batch_config'
]);
<script type="text/javascript">
  $(function () {
    $.baserAjaxDataList.init();
    $.baserAjaxBatch.init({url: $("#AjaxBatchUrl").html()});
  });
</script>
```

### 配列のモデルデータをエンティティに置き換える
エディタの正規表現付きの置換機能で置き換えます。

```
例）
`/\$site\['.+?'\]\['(.+?)'\]/` → `\$site->$1`
```

### エレメントの読み込み処理を変更
エレメントの読み込みパスについてモデル名をアッパーキャメルケースに変更します。

```
sites/index → Sites/index
```

### ブラウザバリデーションの無効化
ブラウザバリデーションを無効にするため、BcAdminForm::create() の 第２引数に `['novalidate' => true]` を追加します。

```php
$this->BcAdminForm->control($entity, ['novalidate' => true]);
```

### フォームコントロールのクラス名を削除
フォームコントロールにおいてクラス名は不要となりました。フィールド名だけに変更します。

```php
$this->BcAdminForm->control('field_name');
```

### 各画面用のヘルパを作成する
テンプレート内の処理において、プログラムの処理はできるだけ冒頭にまとめ、可能であれば、ヘルパー化します。

ヘルパーは、 `BcAdmin{EntityName}Helper` として作成し、適宜、必要があれば `BcContainerTrait` を利用してサービスクラスを利用します。  
メソッドを作成する際、サービスクラスのメソッドの完全なるラッパーメソッドで、シグネチャが全く同じ場合は、テストは書きません。

　
## Javascriptを移行する

### ID属性による参照の変更
フォームコントロールのID属性が、キャメルケースからハイフン区切りになっているので、それに伴いJavascript側のコードの変更を行います。

参考: [BcAdminThirdの開発](https://github.com/baserproject/ucmitz/blob/dev/plugins/bc-admin-third/README.md)

　
## メニューを表示する
`/plugins/baser-core/config/setting.php` の `BcApp.adminNavigation` を編集してメニューを表示します。   
