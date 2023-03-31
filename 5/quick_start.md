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

