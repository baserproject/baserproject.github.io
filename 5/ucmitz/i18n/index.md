# 国際化

baserCMS５では、日本語をベース言語として英語のみ対応する方針としています。

## 翻訳関数

baserCMS５では、次の翻訳関数を利用し日本語を記述します。  

```php
echo __d('baser_core', '日本語を記述します。');
```

そうする事で、`BaserCore` プラグイン配下の次の言語ファイルを読み込む事ができます。

```shell
/plugins/baser-core/resources/locales/en_US/baser_core.mo
```

## 翻訳準備
翻訳を行う前に、I18nツールを利用して、POTファイルを生成します。  
Docker コンテナにログインし、コマンドを実行します。  
全てのプラグインを一つのPOTファイルにまとめます。

```shell
cd docker
docker exec -it bc-php /bin/bash
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

## 翻訳を行う

### POファイルを開く
次のPOファイルを [Poedit](https://poedit.net/) で開きます。

```shell
/plugins/baser-core/resources/locales/en_US/baser_core.po
```

### POTファイルを読み込む
Poedit の メニューから、POTファイルを読み込みます。

メニュー　→　翻訳　→　POTファイルから更新

次のファイルを選択します。

```shell
/plugins/baser-core/resources/locales/baser_core.pot
```

新しい翻訳対象が増えた場合に反映されます。

### 翻訳を行います。
文字色がオレンジのものが未翻訳となります。  
右側のペインに、提案となる英語の文章が表示されますが、内容をしっかり確認して問題ない場合だけ受け入れます。

受け入れる場合には、右下の「要確認」をクリックします。

### 翻訳ファイルを作成する
POファイルを保存すると、すぐにMOファイルとして翻訳ファイルが作成されます。

## プルリクエストを作成する
翻訳が終わったらGitにコミットし、プルリクエストを作成します。

## marker error(s) detected が発生した場合
翻訳関数の利用箇所でエラーが発生しています。  
コマンド実行時に `--marker-error` オプションを追加すると詳細な内容が確認できます。

