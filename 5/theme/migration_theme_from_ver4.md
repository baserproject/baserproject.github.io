# baserCMS４のテーマを変換

ここでは [BcAddonMigrator](https://github.com/baserproject/BcAddonMigrator) を利用して、baserCMS４のテーマを baserCMS５用に変換する手順を説明します。

## BcAddonMigratorプラグインについて
BcAddonMigratorプラグインは、baserCMS４から、baserCMS５への移行をサポートするプラグインです。

baserCMS５では、かなりの大きな仕様変更が入っており、完全に自動変換することはできませんが、BcAddonMigratorプラグインを利用することで、手作業で変更する部分を最小限にすることができます。

## テーマをZIP化する
OSの機能やツールを使って既存のテーマをZIP化します。

## 新しい環境を準備する
既存のサイトをそのままbaserCMS５系にアップグレードすることはできません。新しい環境にbaserCMS５をインストールしておく必要があります。

- [インストールガイド](./introduce/index)

## BcAddonMigratorプラグインをインストール
[GitHub](https://github.com/baserproject/BcAddonMigrator){:target="_blank"} 、または、baserマーケットより、BcAddonMigratorプラグインを取得し、新しい環境の `/plugins/` フォルダに配置します。

その後、プラグイン管理よりインストールを実行します。

## テーマを変換する
プラグイン一覧より、BcAddonMigratorプラグインの右側にある歯車マークををクリックします。

既存の環境のZip化したテーマをアップロードすると変換が始まります。baserCMS５用への変換が完了するとダウンロードボタンが表示されますのでダウンロードします。

### 問題が発生した場合
問題が発生した場合は、[ユーザーズフォーラム](https://forum.basercms.net/) に報告するか、[GitHubのIssue](https://github.com/baserproject/BcAddonMigrator/issues) を作成してください。

## テーマを適用する
新しい環境の、`/plugins/` に、ダウンロードしたテーマを解凍して、配置します。

その後、管理システムの「テーマ管理」よりテーマを適用します。

## フロントページの確認
フロントページにアクセスに問題が発生していないか確認します。

問題がなければ、これで、baserCMS４のテーマをbaserCMS５用の環境に移行することができました。お疲れ様でした。

問題が発生していたら、テーマを問題の内容に合わせて修正します。
以下に、手動による調整についてポイントを記載しています。


## テンプレートファイルの調整

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
vendor/baserproject/bc-front/templates/plugin/BcBlog/element/blog_comments.php
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
$this->passedArgs['limit']
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
[DB設計書](../package/database) を参考にし、カラムの変更を行います。
 
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

## 問題が発生した場合
自分で解決できない場合は、[ユーザーズフォーラム](https://forum.basercms.net/) に相談するか、[GitHubのIssue](https://github.com/baserproject/BcAddonMigrator/issues) を作成してください。

## フィードバックしたい場合
例えば、コードの置換処理で追加したいものがある場合は、GitHubでプルリクエストを送信してください。Issueの作成でも構いません。
一緒にコードを育てる事で他の人も喜びます。

こちらも合わせてご覧ください。
- [baserCMS４のプラグインを変換](../plugin/migration_plugin_from_ver4)
- [baserCMS４のデータベースを変換](../migration_db_from_ver4)
- [baserCMS４からの変更点](../core/difference_from_basercms4)
