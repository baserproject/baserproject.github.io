# クイックスタート

クイックスタートでは、baserCMSでの開発経験がない方が、ローカルPCの環境を構築し baserCMS に触れるようになることを目指します。

## 準備

すぐに baserCMS に触れるようにするために、Docker を利用した仮想環境を構築します。
まずは、コマンドを実行するためのアプリケーションと、お好みのテキストエディタ、または、IDEをご用意ください。

「コマンドを実行をするためのアプリケーション」は、Windowsの場合、コマンドプロンプトか、PowerShell、Macの場合は、ターミナルなどを利用します。

コマンドの実行は５行程度です。怖がらずに進めていきましょう。

## 構造を知る

基本的な構成はフォルダ構成やデータベース構造はCakePHP 4と同じです。
baseCMSは「BaserCore」というCake PHPのプラグインとして開発しています。

CakePHPの構成は [CakePHPのCookbook](https://book.cakephp.org/4/ja/intro/cakephp-folder-structure.html){:target="_blank"} に記載があります。こちらを参照してください。

baserCMSに機能を追加したい場合や新しくテーマを作成する場合も、CakePHP 4のプラグインとして開発します。

テーマもプラグインも`{baserCMSの設置フォルダ}/plugins/`フォルダで制作を進めるため、そのフォルダを「プラグインフォルダ」と呼んで進めます。


## ローカル環境を立ち上げる

[ローカル環境を構築して利用する](introduce/build_local_env) ページを参考に Docker を使った仮想環境を立ち上げます。コマンドはここで利用します。

「インストーラーを起動する」まで手順を進め、必要なデータベースやアプリケーションが構築します。
インストールが完了すると、baserCMSの開発環境の完成です。


## テーマを作る

まずは、既に存在しているサンプルテーマをカスタマイズしてみます。

デフォルトテーマをコピーし、CSSを変更した新しいテーマを作成します。

プラグインフォルダ内の `BcThemeSample` フォルダをコピーし、新たに `CustomTheme` フォルダとして複製します。

### configファイルの書き換え
管理画面から識別しやすいよう、configファイルを書き換えます。
`CustomTheme/config.php` を編集します。

```php
// 変更前
'title' => __d('baser_core', 'サンプルテーマ'),
// 変更後
'title' => 'カスタムテーマ',
```

### namespace の書き換え
次に、テーマが正常動作するように、 namespace と呼ばれるおまじないを、作成したプラグイン名に合わせて変更します。

変更が必要なファイルは `Plugin.php` と `BcThemeSampleHelper.php` の2箇所です。

```php
// CustomTheme/src/Plugin.php
// 変更前
namespace BcThemeSample;
// 変更後
namespace CustomTheme;
```

```php
// CustomTheme/src/View/Helper/BcThemeSampleHelper.php
// 変更前
namespace BcThemeSample\View\Helper;
// 変更後
namespace CustomTheme\View\Helper;
```

### 存在しないファイルの実体の場所

テーマ内にはスタイルシートファイルはどこにも存在しません。  
なのに、ページを確認するとスタイルシートが読み込まれています。  

これは、テーマ内に存在しないファイルを記述した場合に、コアテーマを読み込む仕様となっているためです。

存在しないファイルの実体は、コアテーマである、`BcFront` テーマの中に存在します。

例えば、スタイルシート `/plugin/bc-front/webroot/css/style.css` というファイルが存在しますが、適用しているテーマ内で、baserCMSの関すを使って `style.css` を呼び出した場合、こちらが読み込まれます。

```php
$this->BcBaser->css('style.css');
```

ただし、適用したテーマ内の次の場所に同名のファイルを配置するとそちらを優先して読み込みます。

```
/plugin/CustomTheme/webroot/css/style.css
```

この仕組を利用してコアテーマのファイルをコピーしつつカスタマイズを進めます。


### スタイルシートの書き換え

まずは、`style.css` をコアテーマから テーマ「CustomTheme」内にコピーします。

```
/plugin/bc-front/webroot/css/style.css
↓
/plugin/CustomTheme/webroot/css/style.css
```


テーマの切り替えが確認できるようにCSSファイルの `CustomTheme/webroot/style.css` を編集します。  
ここでは背景を白から灰色に変更します。



```css
// 変更前
body {
  margin: 0;
}
// 変更後
body {
  margin: 0;
  background-color: #f2f2f2 !important;
}
```

### 管理画面でテーマを適用する

`管理画面 > プラグイン管理` にアクセスし、今回作成してテーマを適用し、フロントページを確認すると、背景が灰色に変わっている事が確認できるでしょう。


このような方法で、baserCMSのテーマは簡単にカスタマイズする事ができます。  

その他テーマに関する詳細は [テーマガイド](theme/) を参照してください。



## プラグインを作る

プラグインをbaserCMSに認識させて、新しい管理画面を作ります。

### ジェネレーターを実行する
baserCMSを設置したフォルダで以下のコマンドを叩きます。

```bash
bin/cake bake plugin CustomPlugin
```

下記のようにコンソールから聞かれるので何も入力せずエンターを押します。

```bash
Look okay? (y/n/q)
Do you want to overwrite? (y/n/a/q)
```

下記のようにコンソールから聞かれた場合、「n」を入力します。  
baserCMSでは、プラグインを composer を利用せず独自に管理することができます。  
composer で管理したい場合は、「y」を入力しても構いません。

```shell
File `/var/www/html/composer.json` exists
Do you want to overwrite? (y/n/a/q) 
```

処理が進み、プラフインフォルダに `CustomPlugin` フォルダが作成されます。

### configファイルを設置する
次に、プラグインをbaserCMSに認識させるため、configファイルを作成します。

```php
<?php
// CustomPlugin/config.php
return [
    'type' => ['Plugin'],
    'title' => 'カスタムプラグイン',
    'description' => 'カスタムプラグインです',
    'author' => 'baserCMS User Community',
    'url' => 'https://basercms.net',
    'installMessage' => ''
];
```

### Pluginクラスを設置する
続いて、プラグイン管理のためのファイル `CustomPlugin/src/Plugin.php` を作成します。  

ジェネレーターでプラグインを作成した場合、既に、`CustomPlugin/src/CustomPluginPlugin.php` というファイルができていると思いますが、baserCMSの管理画面でインストールしたり、管理するためには、`Plugin.php` にリネームする必要があります。

それに伴い、クラス名を `Plugin`へ、継承クラスを `BcPlugin` へと変更します。 

動作させるための最低限のコードは次のようになります。
```php
// `CustomPlugin/src/Plugin.php
namespace CustomPlugin;

use BaserCore\BcPlugin;

class Plugin extends BcPlugin
{
}
```

### 管理画面でプラグインをインストールする

管理画面からプラグインを有効化します。

`管理画面 > プラグイン管理` へアクセスすると、プラグイン一覧に「CustomPlugin（カスタムプラグイン）」が表示されています。

同じ行の右から2番めのインストールアイコンをクリックし、利用できるユーザを指定してインストールします。

これであなたが作ったプラグインを利用する準備が整いました。

ここで有効化したプラグインは、baserCMS側にてオートローダーの設定などを自動で行うため、composer を意識せずとも baserCMS上で利用可能となります。

### 新しい管理画面を作成する

CakePHPと同様に、コントローラーとビューファイルを設置すれば、管理画面は簡単に作成できます。

いくつか、baserCMSでお約束があるのでそちらにならって作成します。 詳しくは、[管理システムを作成する](./plugin/develop_plugin#管理システムを作成する) ご覧ください。

その他プラグインに関する詳細はは [プラグインガイド](plugin/) を参照してください。


## baserCMSに興味が出てきたら

これでクイックスタートは終了です！お疲れさまでした！

baserCMSは、バージョン５より、CMS機能だけでなく、REST API やカスタムコンテンツが実装されヘッドレスCMSとしても利用できるようになりました。

baserCMSについてもっと知りたい場合は次のコンテンツを読んでみてください。

- [baserCMS５ツアー](ver5_tour)
- [テーマガイド](theme/)
- [プラグインガイド](plugin/)
- [Web APIガイド](web_api/)



