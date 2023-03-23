# 独自のテーマを作成する

チュートリアルを通じて、baserCMSが提供する機能に触れながら新しくテーマを作成します。

## 基礎知識

基礎的なHTML、CSS、PHPとCakePHPの知識を要します。
CakePHPのことで不明なことがある場合は、CakePHPの[クックブック](https://book.cakephp.org/4/ja/index.html)を参照してください。

### テンプレートの構成

<!--
    TODO: 図のせる
-->

baserCMSのテンプレートは上図のように構成されています。

- レイアウト
    - Webページの全体を構成するテンプレートです
    - エレメントやコンテンツを配置します
- エレメント
    - 繰り返し利用される部品となるテンプレートです
    - ヘッダーやフッターなどに利用します
- コンテンツ
    - CMSで管理しているコンテンツが出力されるエリアです


## チュートリアルの準備

ローカル環境を構築し、開発を始められる状態にしてください。
- [ローカル環境を構築する](/5/developer/build_local_env)

## テーマの作成

### テーマフォルダの作成

pluginsディレクトリに任意の名前のフォルダを作成します。
ここでは「corp-theme」というテーマ名で進めます。
チュートリアルではこのフォルダを「テーマフォルダ」と呼びます。

`{baserCMSの設置フォルダ}/plugins/corp-theme/`

### 最小限のフォルダ・ファイルを作成する

テーマフォルダの中に以下の構成となるようにフォルダ・ファイルを作成します。
ファイルの中身は次のセクションで書いていくので空で構いません。
※screenshot.pngは現時点でなくて構いません

- corp-theme/
    - src/
        Plugin.php
    - templates/
        - layout/
            - default.php
    - config.php
    - screenshot.png

### プラグインファイルを作成する

baserCMSでは、テーマもプラグインのひとつとして動作します。
プラグインの動作のために必要なおまじないとして、以下の内容で `corp-theme/src/Plugin.php` を作成します。

```php
<?php
declare(strict_types=1);

namespace BcFront;

use BaserCore\BcPlugin;

class Plugin extends BcPlugin{}
```

### Configファイルを作成する

baserCMSのコアに、プラグインの情報を認識させるためにConfigファイルを作成します。
以下の内容を参考に `corp-theme/config.php` を作成します。

```php
<?php
return [
    'type' => 'Theme',
    'title' => 'コーポレートテーマ',
    'description' => 'コーポレートサイトに適したテーマです。',
    'author' => 'baserCMS User Community',
    'url' => 'https://basercms.net',
    'installMessage' => ''
];
```

- type: `Theme` を記載してください。
- title: テーマの名前を任意で記載してください。
- description: テーマの詳細を記載してください。
- author: 制作者・企業の名前を記載してください。
- url: 制作者・企業のURLを記載してください。
- installMessage: テーマでは利用しません。空白のままにしてください。

### レイアウトテンプレートの作成


レイアウトテンプレートとは、Webページの枠組みを記述するファイルです。
全ての Webページでの共通部分を含める事でメンテナンス性を高める事ができます。
このファイルを変更するだけで、あらかじめ用意されているブログや、メールフォームのレイアウトも変更する事ができます。

以下の内容で `corp-theme/templates/layout/default.php` を作成します。
これからこのファイルに、baserCMSのタグを組み込んでいきます。

```php
<!DOCTYPE html>
<html>
<head>
    <title>タイトルを記述</title>
    <meta name="description" content="説明文を記述" />
    <meta name="keywords" content="キーワードを記述" />
</head>
<body>

    <div id="Head">
        ヘッダー内容を記述
    </div>

    <div id="Wrap">
        <div id="contensBody">
            コンテンツ内容を記述
        </div>
        <div id="Sidebar">
            メニュー等を記述
        </div>
    </div>

    <div id="Footer">
        フッター内容を記述
    </div>

</body>
</html>
```

#### baserCMSのタグを学ぶ

baserCMSでは、CMS内で管理しているコンテンツを動的に表示・利用するために「baserタグ」を提供しています。
テーマ内で「baserタグ」を利用することでます。
baserタグは以下のような形で利用します。

```php
<?php $this->BcBaser->title() ?>
```

baserタグには、大きく3つの系統があります。

- 取得系
    - コンテンツの情報などを取得します。
    - e.g. `$this->BcBaser->getTitle()`
- 出力系
    - 情報の取得と出力を行います。
    - e.g. `$this->BcBaser->title()`
- 判定系
    - 現在のページ情報やユーザ情報から真偽を判定します。条件分岐に利用します。
    - e.g. `$this->BcBaser->isHome()`


### baserタグを埋め込む

`corp-theme/templates/layout/default.php` にbaserタグを埋め込んでいきます。
ファイルの中身を以下に書き換えてください。

```php
<?php $this->BcBaser->docType('html5') ?>
<html>
<head>
	<?php $this->BcBaser->title() ?>
	<?php $this->BcBaser->metaDescription() ?>
	<?php $this->BcBaser->metaKeywords() ?>
</head>
<body>

    <div id="Head">
        ヘッダー内容を記述
    </div>

    <div id="Wrap">
        <div id="contensBody">
			<?php $this->BcBaser->content() ?>
        </div>
        <div id="Sidebar">
            <?php $this->BcBaser->contentsMenu() ?>
        </div>
    </div>

    <div id="Footer">
        フッター内容を記述
    </div>

</body>
</html>
```

#### $this->BcBaser->docType('html5')

ドキュメントタイプを指定するタグを出力します。
以下のように展開されます。

```html
<!DOCTYPE html>
```

#### $this->BcBaser->title()

メタタグのtitleを出力します。
以下のように展開されます。

```html
<title>コンテンツタイトル  | カテゴリ| サイト名</title>
```

#### $this->BcBaser->metaDescription()

ページ説明文用のメタタグを出力します。
以下のように展開されます。

```html
<meta name="description" content="baserCMS は、CakePHPを利用し、環境準備の素早さに重点を置いた基本開発支援プロジェクトです。WEBサイトに最低限必要となるプラグイン、そしてそのプラグインを組み込みやすい管理画面、認証付きのメンバーマイページを最初から装備しています。">
```

#### $this->BcBaser->metaKeywords()

キーワードメタタグを出力します。
以下のように展開されます。

```html
<meta name="keywords" content="baser,CMS,コンテンツマネジメントシステム,開発支援">
```

#### その他

baserCMSは他にも多数のbaserタグを提供しています。
是非、[関数リファレンス](function_reference.md)を御覧ください。

### 共通部品を利用する

これまででbaserタグを利用して、動的に変化する文章などを表示することができました。
baserCMSでは、別のレイアウトテンプレートからも共通化して利用したいものを部品化するために、エレメントを利用します。
`corp-theme/templates/` に `element` フォルダを作成し、その中に `header.php` と `footer.php` を作成します。

- corp-theme/
    - src/
        Plugin.php
    - templates/
        - element/
            - header.php
            - footer.php
        - layout/
            - default.php
    - config.php
    - screenshot.png

#### ヘッダーファイルを作成する

以下の内容で `corp-theme/templates/element/header.php` を作成します。

```php
<header>
    <ul>
        <li><a href="/">トップページ</a></li>
    </ul>
</header>
```

#### フッターファイルを作成する

以下の内容で `corp-theme/templates/element/footer.php` を作成します。

```php
<footer class="bs-footer">
	<p> Copyright(C)
		<?php $this->BcBaser->copyYear(2023) ?>
		baserCMS Users Community All rights Reserved.
	</p>
</footer>
```

#### エレメントを埋め込む

`corp-theme/templates/layout/default.php` にbaserタグを使ってエレメントを埋め込みます。

ファイルの中身を以下に書き換えてください。

```php
<?php $this->BcBaser->docType('html5') ?>
<html>
<head>
	<?php $this->BcBaser->title() ?>
	<?php $this->BcBaser->metaDescription() ?>
	<?php $this->BcBaser->metaKeywords() ?>
</head>
<body>

    <div id="Head">
        <?php $this->BcBaser->header() ?>
    </div>

    <div id="Wrap">
        <div id="contensBody">
			<?php $this->BcBaser->content() ?>
        </div>
        <div id="Sidebar">
            <?php $this->BcBaser->contentsMenu() ?>
        </div>
    </div>

    <div id="Footer">
        <?php $this->BcBaser->footer() ?>
    </div>

</body>
</html>
```

`$this->BcBaser->header()` `$this->BcBaser->footer()` では、`corp-theme/templates/element/` からそれぞれ `header.php` と `footer.php` を読み込むbaserタグです。


#### 静的ファイルを配置する

CSSや画像、JavaScript等の静的ファイルは、テーマフォルダの `src` フォルダ配下にフォルダとファイルを配置します。

- corp-theme/
    - src/
        - img/
        - css/
        - js/

これらは以下のように呼び出すことができます。

```php
<?php $this->BcBaser->js('example') ?>
<?php $this->BcBaser->js(['example1.js', 'example2.js']) ?>
```


## もっと詳しく知る

- [関数リファレンス](function_reference)
- [テーマのフォルダ構造](folder)
- [用語集]()

## 作ったテーマを販売する

- [プラグイン・テーマを配布・販売する](/5/developer/market/sell)