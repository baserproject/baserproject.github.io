# 国際化
## はじめに
ここでは、`baserCMS５`のアプリケーション部分の表示やメッセージを国際化対応する方法について解説します。
## 国際化対応方針
通常、翻訳対象となる言語は、英語を用いるケースが多数を占めます。しかし、`baserCMS５`は日本語をベース言語とし、原則的に英訳にのみ対応する方針としています。

ただし、`baserCMS５`のコア以外のプラグインやテーマなどを開発する場合、あるいは、他の言語への対応についても、翻訳のサポートが十分に得られる場合については、この限りではありません。
## 技術的背景について
`baserCMS５`は、`CakePHP 4.x`が用意している国際化機構を用いて国際化に対応しております。

なお、ここでは国際化機構の詳細については解説致しませんので、必要に応じて下記URLを参照してください。

[国際化と地域化 - 4.x](https://book.cakephp.org/4/ja/core-libraries/internationalization-and-localization.html)
### 翻訳関数
`baserCMS５`では、次の翻訳関数を利用し日本語を記述します。

```php
echo __d('baser_core', '日本語を記述します。');
```

そうする事で、`BaserCore` プラグイン配下の次の言語ファイル（バイナリファイル）を読み込む事ができます。

```bash
/plugins/baser-core/resources/locales/en/baser_core.mo
```

翻訳フォルダー名は、2文字または3文字の言語 ISO コード、または、言語及び話されている国を含む fr_FR, es_AR, da_DK のような完全なロケールの名称にする必要があります。

※ `baserCMS５`では、英語に対応するためのフォルダー名をenとしております。

参考URL：
[https://www.localeplanet.com/icu/](https://www.localeplanet.com/icu/)

翻訳ファイルの具体例は以下のようになります。
```
msgid "私の名前は {0} です"
msgstr "My name is {0}"

msgid "I'm {0,number} years old"
msgstr "J'ai {0,number} ans"
```
注意事項：
翻訳はキャッシュされています。翻訳を変更した後は、必ずキャッシュをクリアしてください。

実行例：
`bin/cake cache clear _cake_core_`
## 国際化の流れ
```
1. Githubの自分のアカウントでbaserproject.github.ioをフォークする
↓
2. ローカルにbaserproject.github.ioをクローンする
↓
3. gitコマンドでローカル環境を最新の状態へ更新する
↓
4. Potファイルを生成する
↓
5. Poeditなどで翻訳する
↓
6. プルリクエストを送る
↓
3. へ戻る
```
## 翻訳準備
### 前提条件
pot ファイルの生成に必要なツールを利用するには、CakePHPのライブラリをローカルの開発環境へインストールする必要があります。
#### ライブラリのインストール
ローカル環境構築の際、baserCMS５のインストールに先駆けてライブラリのインストールを済ませておいてください
### I18n を利用して Pot ファイルを生成する
アプリケーション内の、`__d()関数`や英訳されたメッセージから pot ファイルを生成するためには、`CakePHP`の`I18n シェル`が利用できます。

翻訳を行う前に、CakePHP の I18n シェルを利用して、POTファイルを生成します。  
Docker コンテナにログインし、コマンドを実行します。  
全てのプラグインを一つのPOTファイルにまとめます。

Docker コンテナにログインするコマンド実行例
```bash
docker exec -it bc-php /bin/bash
```

Docker コンテナ内部でのコマンド実行例
```bash
bin/cake i18n extract  --paths /var/www/html/plugins/baser-core,\
/var/www/html/plugins/bc-admin-third,\
/var/www/html/plugins/bc-blog,\
/var/www/html/plugins/bc-content-link,\
/var/www/html/plugins/bc-custom-content,\
/var/www/html/plugins/bc-editor-template,\
/var/www/html/plugins/bc-favorite,\
/var/www/html/plugins/bc-front,\
/var/www/html/plugins/bc-installer,\
/var/www/html/plugins/bc-mail,\
/var/www/html/plugins/bc-search-index,\
/var/www/html/plugins/bc-theme-config,\
/var/www/html/plugins/bc-theme-file,\
/var/www/html/plugins/bc-uploader,\
/var/www/html/plugins/bc-widget-area

#Would you like to extract the messages from the CakePHP core? (y/n)
→ n を入力

#What is the path you would like to output?
→ /var/www/html/plugins/baser-core/resources/locales/ を入力
```

### 翻訳の機能を利用する
メッセージをまとめる必要がある場合は、 別のドメインからメッセージを取ってくるのに`__d()関数`が利用できます。

```php
echo __d('baser_core', '日本語を記述します。');
```

## 翻訳を行う
### POファイルを開く
次のPOファイルを [Poedit](https://poedit.net/) で開きます。

```bash
/plugins/baser-core/resources/locales/en/baser_core.po
```
### POTファイルを読み込む
Poedit の メニューから、POTファイルを読み込みます。

メニュー　→　翻訳　→　POTファイルから更新

次のファイルを選択します。

```bash
/plugins/baser-core/resources/locales/baser_core.pot
```

新しい翻訳対象が増えた場合に反映されます。

翻訳対象が、新たに追加されている場合にPOファイルが更新されます。

## 翻訳ファイルを作成する
PoeditでPOファイルを保存すると、すぐに翻訳ファイルMOファイルとしてが作成されます。

## プルリクエストを送る
翻訳が終わったらGitにコミットし、プルリクエストを作成します。

## marker error(s) detected が発生した場合
翻訳関数の利用箇所でエラーが発生しています。

Dockerコンテナ内部で、`i18nシェル`実行時に`--marker-error`オプションを追加すると詳細な内容が確認できます。

実行例：
```bash
bin/cake i18n extract --marker-error --paths
```
## 最後に
このページを執筆するにあたり、下記のWEBサイトを参考にさせていただきました。

参照URL：[国際化(ucmitz)](https://baserproject.github.io/5/ucmitz/i18n/index)
