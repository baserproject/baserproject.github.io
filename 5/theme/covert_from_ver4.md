# baserCMS４のテーマを変換

baserCMS５のテーマはまだ少なく、テーマの自動マイグレーション機能も存在しません。（2023/04/10現在）  

ここでは baserCMS４のテーマを baserCMS５用に変換する手順を説明します。

## config.php の変更
配列を返却する形式に変換となりましたので例に習って書き換えます。  
また、その際、`type` キーを追加し、`Theme` を設定する事でテーマ管理に認識されます。
```php
// 例
return [
    'type' => 'Theme',
    'title' => 'BcColumn',
    'description' => 'bcColumnは「1カラム」「2カラム左サイド」「2カラム右サイド」のレイアウトが準備されているデザインテーマです。
管理画面からレイアウトを選択することで、基本的な3パターンのレイアウトを簡単に切り替えることができるのが、名前のコンセプトです。
基本的なテーマカラーはテーマ設定から変更できることはもちろん、どんな色にもマッチするサブカラーで『シンプルでカッコいい』デザインを目指しています。

レスポンシブデザインなので、システム設定の「スマホ対応しない」を選択してください。',
    'author' => '小桃クリップ',
    'url' => 'https://komomo.biz/'
];
```

## ファイルの配置変更
### アセットファイルの移動
`webroot` フォルダを作成し、img / js / css / files をそこに移動します。

### テンプレートの移動
`templates` フォルダを作成し、テンプレートは全てそこに移動します。

### レイアウトフォルダのリネーム
`Layouts` を `layout` にリネームします。

### エレメントフォルダのリネーム
`Elements` を `element` にリネームします。

### Config のリネーム
`Config` を `config` にリネームします。

### プラグインのテンプレートの移動
`Blog`、`Mail` など、プラグインのコンテンツテンプレートを `templates/plugin/{PluginName}/` へ移動します。

```shell
# Blog の場合
templates/plugin/BcBlog/Blog/
# Mail の場合
templates/plugin/BcMail/Mail/
```

### Feed関連ファイルの削除
baserCMS５でフィードは削除となりました。  
テンプレートの `Feed` フォルダがあれば削除します。  
また、`config/data/Feed/` が存在する場合、そちらも削除します。

## プラグインクラス追加
CakePHP4より、テーマもプラグインとして扱われることとなりました。  
次のファイルが必要となります。クラスの中身は空でも構いません。

```php
// Sample という名称のテーマの場合
// /plugins/Sample/src/Plugin.php
namespace Sample;

use BaserCore\BcPlugin;

class Plugin extends BcPlugin {}
```

## テンプレートファイルの編集

### モデルデータの変換
モデルより取得したデータは配列よりエンティティオブジェクトに変更となりました。

```php
// 例）$post の name を参照する場合
// 配列の第一階層のキーとなるモデル名は削除となる

// baserCMS４
$post['BlogPost']['name'];
// baserCMS５
$post->name;
```

手作業で変更してもいいですが、テンプレート内にて正規表現を利用して置換するには次の文字列を利用してください。

```shell
# 正規表現
\$([a-zA-Z0-9]+?)\['([a-zA-Z0-9]+?)'\]\['([a-zA-Z0-9_]+?)'\]
# 置き換え後の文字列（後方参照）
\$$1->$3
```

### URLの変更
配列形式で指定しているURLには次の変更が必要です。

- プラグイン名を明示的に指定する
- コントローラー名をキャメルケースに変更する

```php
// 例
$this->BcBaser->link([
    'controller' => 'search_indexes',
    'action' => 'search'
]);
// 置き換え後
$this->BcBaser->link([
    'plugin' => 'BcSearchIndex'
    'controller' => 'SearchIndexes',
    'action' => 'search'
]);
```

### フォーム開始タグ出力関数の変更
`$this->BcForm->create()` の第一引数をエンティティ、もしくは、`null` に設定します。  
フォームの初期値を設定したい場合にエンティティを指定しますが、そうでない場合は `null` とします。

```php
// 例）以前まモデル名を指定していた
$this->BcForm->create('SearchIndex');
// 置き換え後
$this->BcForm->create($searchIndex);
$this->BcForm->create(null);
// 次でも可
$this->BcBaser->createForm($searchIndex);
```

### フォームコントロールの変更
第一引数のモデル名を削除します。また、メソッド名が `input` より `control` に変更となっています。

```php
// 置き換え前
$this->BcForm->input('SearchIndex.q');
// 置き換え後
$this->BcForm->control('q');
```

### 検索パーツの変更

```php
// 置き換え前
echo $this->BcForm->hidden('SearchIndex.s', ['value' => $siteId]);
// 置き換え後
echo $this->BcForm->control('s', ['type' => 'hidden', 'value' => $this->getRequest()->getAttribute('currentSite')->id]);
```

### 固定ページの出力処理を変更
```php
// 例）
$this->BcPage->content();
// 置き換え後
echo $page->contents
```

### ブログコメントのJavascript読み込み変更
blog_comments.php エレメントについて、BcFront テーマを参考に Javascript 読込処理を変更します。

```shell
plugins/bc-front/templates/plugin/BcBlog/element/blog_comments.php
```

### その他の変更

```php
// メンテンナンス中かどうか
Configure::read('BcRequest.isMaintenance')
// 置き換え後
$this->getRequest()->is('maintenance')
```

```php
// 一覧の表示件数
$this->passedArgs['num']
// 置き換え後
$this->getRequest()->getQuery('limit')
```


## 初期データの変更
テーマで初期データを利用している場合は変更が必要です。

### 初期データの構成変更

#### フォルダ直下のCSVを移動
フォルダ直下のCSVファイルについて、BaserCoreフォルダを作成し、その中に移動します。

#### プラグイン名の変更
baserCMS５より、プラグイン名に `Bc` というプレフィックスが追加されました。  
それに伴いフォルダをリネームします。

- `Blog` → `BcBlog`
- `Mail` → `BcMail`

#### その他のファイルの移動
baserCMSのコア BaserCore をシンプルにするという方針から、各種機能がコアプラグイン化されました。  
それに伴いCSVファイルを移動します。

- `theme_configs.csv` を `BcThemeConfig` フォルダへ移動
- `widget_areas.csv` を `BcWidgetArea` フォルダへ  
- `search_indices.csv` を `BcSearchIndex/search_indexes` へ
- `editor_templates.csv` を `BcEditorTemplate` フォルダへ
- `content_links.csv` を `BcContentLink` フォルダへ

### 初期データのカラム変更
DB設計書を参考にし、カラムの変更を行います。
https://baserproject.github.io/5/ucmitz/specification/db
 
### 初期データのデータの変更 
#### contents.csv
- `plugin` カラムの値について、プレフィックスを追加します。
- `site_id` を 0 から 1 に変更します。
#### pages.csv
固定ページではPHPの関数が利用できなくなりました。
`contents` カラムで関数を利用していた場合は削除してください。
#### site_configs.csv
- `name`: `editor` のレコードついて、`value`の値を `BcCkeditor` から `BaserCore.BcCkeditor` に変更します。
#### widget_areas.csv
`widgets` カラムのデータについてシリアライズされていますが、内部的に、プラグイン名が利用されており、前述同様、`Bc` プレフィックスを追加する必要があります。

PHPのプログラムでアンシリアライズ化し、内容を変更した上で、シリアライズ化する必要がありますが、面倒な場合は、空文字にして諦めるというのも手です。

```php
$value = @unserialize(base64_decode($value));
// 内容を変更後
$value = base64_encode(serialize($value));
```

#### search_indexes
`site_id` カラムを 0 から 1 に変更します。

