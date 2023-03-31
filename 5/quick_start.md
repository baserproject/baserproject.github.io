# クイックスタート

{% include looking_for.html %}

baserCMS上での最小構成のプラグイン・テーマ開発を説明します。
この項では、 `{baserCMSの設置フォルダ}/plugins/` を「プラグインフォルダ」と呼びます。

## テーマ

デフォルトテーマをコピーし、CSSを変更した新しいテーマを作成します。
プラグインフォルダ内の `bc-front` フォルダをコピーし、新たに `custom-theme` フォルダとして複製します。

管理画面から識別しやすいよう、configファイルを書き換えます。
`custom-theme/config.php` を編集します。

変更前

```php
'title' => __d('baser_core', 'フロントテーマ'),
```

変更後

```php
'title' => 'カスタムテーマ',
```

次にnamespaceを他のプラグインと重複のないものに変更します。
変更が必要な箇所は `custom-theme/src/Plugin.php` と `custom-theme/src/View/Helper/BcSampleHelper.php` の2箇所です。

`custom-theme/src/Plugin.php`

変更前

```php
namespace BcFront;
```

変更後

```php
namespace CustomTheme;
```

`custom-theme/src/View/Helper/BcSampleHelper.php`

変更前

```php
namespace BcFront\View\Helper;
```

変更後

```php
namespace CustomTheme\View\Helper;
```

テーマの切り替えが確認できるようにCSSファイルの `custom-theme/webroot/style.css` を編集します。
ここでは背景を白から灰色に変更します。

変更前

```css
body {
  margin: 0;
}
```

変更後

```css
body {
  margin: 0;
  background-color: #f2f2f2 !important;
}
```

管理画面から今回作成してテーマを適用すると、背景が灰色に変わります。

baserタグや、その他テーマに関する詳しいドキュメントは[テーマガイド](theme/)を参照してください。

## プラグイン

プラグインをbaserCMSに認識させて、新しい管理画面を作ります。
baserCMSを設置したフォルダで以下のコマンドを叩きます。

```bash
bin/cake bake plugin CustomPlugin
```

```bash
Look okay? (y/n/q)
Do you want to overwrite? (y/n/a/q)
```

上記のようにコンソールから聞かれるので何も入力せずエンターを押します。
処理が走り、プラフインフォルダに `CustomPlugin` フォルダが作成されます。

次に、プラグインをbaserCMSに認識させるため、`CustomPlugin/config.php` を作成します。

```php
<?php
return [
    'type' => ['Plugin'],
    'title' => 'カスタムプラグイン',
    'description' => 'カスタムプラグインです',
    'author' => 'baserCMS User Community',
    'url' => 'https://basercms.net',
    'installMessage' => ''
];
```

続いて、プラグイン管理のためのファイル `CustomPlugin/src/Plugin.php` を作成します。

```php
<?php
declare(strict_types=1);

namespace CustomPlugin;

use BaserCore\BcPlugin;

class Plugin extends BcPlugin
{
}
```

管理画面からプラグインを有効化します。
`管理画面 > プラグイン管理 > プラグイン` へアクセスすると、プラグイン一覧に「CustomPlugin（カスタムプラグイン）」が表示されています。
同じ行の右から2番めのインストールアイコンをクリックし、利用できるユーザを指定してインストールします。

プラグインでできることを詳細に記載したドキュメントは[プラグインガイド](plugin/)を参照してください。