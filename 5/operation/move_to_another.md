# 別環境への移設

Webサイト制作において、テスト環境で構築したサイトを本番環境に移設するという事はよくある事です。
baserCMS を別の環境に移設するには注意点がいくつかあります。
ここでは baserCMS の移設手順について説明します。

## 事前準備
### 一時ファイルを全て削除する
`/tmp/` フォルダ内の一時ファイルをすべて削除します。

### ログ・ファイルを全て削除する
`/logs/` フォルダ内の一時ファイルをすべて削除します。

### データベース設定の変更
`/config/install.php` を開き、サーバーの環境にあわせて設定内容を変更します。

その際、baserCMS のコア用の設定とテスト用の設定の二つの記述ありますが、同じデータベース環境を利用する場合は、`database` 以外は 同じ内容で構いません。
MySQL、PostgreSQL をご利用の場合は事前にデータベース環境を用意しておきます。

### 環境設定の変更
環境に合わせて `/config/.env` の編集が必要です。  
主に `SITE_URL` と `SSL_URL` を環境に合わせて調整します。

### .htaccess の調整
環境に合わせて 次の２箇所の .htaccess の編集が必要な場合があります。  
主に、`RewriteBase` を環境に合わせて調整します。

```shell
/.htaccess
/webroot/.htaccess
```

## 移設作業
### ファイルアップロード
FTPソフト等でファイルを全てサーバーにアップロードします。

## 移設先サーバーでの作業
### ファイル・フォルダの権限変更
環境に合わせてサーバー上のファイル・フォルダの権限を変更する

```shell
# baserCMSの設置パスが /var/www/html の場合
chmod -R 777 /var/www/html/tmp
chmod -R 777 /var/www/html/logs
chmod 777 /var/www/html/plugins
chmod 777 /var/www/html/vendor
chmod 777 /var/www/html/config
chmod -R 777 /var/www/html/webroot/files
chmod -R 777 /var/www/html/db
```

なお、テーマファイル管理プラグインで、管理システムでテーマ内のファイルを編集する場合は、テーマ内の全てのファイルに書き込み権限を与える必要があります。

```shell
chmod -R 777 /var/www/html/plugins/ThemeName
```

## テーマへのシンボリックリンクを再作成

下記のコマンドでwebrootフォルダ内のシンボリックリンクを再作成できます。（インストール画面のデザインが崩れていたりする場合など）

```shell
# baserCMSの設置パスが /var/www/html の場合
cd /var/www/html/
bin/cake plugin assets symlink
```


## ブラウザで動作確認
ブラウザで、新しいサーバーのURL へアクセスして動作を確認します。  
これで移設作業は完了です。お疲れさまでした。
