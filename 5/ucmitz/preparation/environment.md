# 開発環境の構築

開発は、Docker Desctop で行います。

## 構築手順

### 事前準備
Docker Desktop をインストールします。

- [Docker Desktop for Windows](https://hub.docker.com/editions/community/docker-ce-desktop-windows/)
- [Docker Desktop for Mac](https://hub.docker.com/editions/community/docker-ce-desktop-mac/)

### ucmitz をクローンする
ucmitz をクローンし、`dev` ブランチに切り替えます。

```
git clone https://github.com/baserproject/ucmitz.git
git checkout dev
```


### docker-compose をコピーする

```
cp docker/docker-compose.yml.default docker/docker-compose.yml
```

※ このファイルは自由に編集可能です。

### Docker を起動する
docker ディレクトリに移動してから Docker 起動します。
Docker を起動すると　ucmitzの初期化処理（composerによるライブラリのインストール、データベースの初期化、JWT用のキー作成など）が始まります。  

初期化に30秒ほどかかりますので、それを待ってからブラウザでアクセスしてください。 `/docker/check` ファイルが作成されたら、以上で環境構築は終了です。

```
cd docker
docker-compose up -d
```

ローカルの ucmitz のディレクトリは、/var/www/shared にマウントされています。  

- アプリケーション：[https://localhost/](https://localhost/){:target="_blank"}
- phpMyAdmin：[http://localhost:8080/](http://localhost:8080/){:target="_blank"}
- phpPgAdmin：[http://localhost:10080/](http://localhost:10080/){:target="_blank"}
- MailCatcher：[http://localhost:1080/](http://localhost:1080/){:target="_blank"}

### 管理画面にログインする

ブラウザで、次のURLにアクセスして表示を確認します。
[https://localhost/baser/admin/baser-core/users/login](https://localhost/baser/admin/baser-core/users/login){:target="_blank"}
   
メールアドレスとパスワードを入力し管理画面にログインします。

- ユーザー名：admin
- パスワード：basercms

アプリケーションの管理画面は、SSLでアクセスしないとエラーとなります。  
http でアクセスしたい場合は、.env の `ADMIN_SSL` を false  に設定してください。

管理画面にログインができなくなった場合は、 [管理画面にログインができなくなった](https://baserproject.github.io/5/ucmitz/etc/troubleshooting#%E7%AE%A1%E7%90%86%E7%94%BB%E9%9D%A2%E3%81%AB%E3%83%AD%E3%82%B0%E3%82%A4%E3%83%B3%E3%81%A7%E3%81%8D%E3%81%AA%E3%81%8F%E3%81%AA%E3%81%A3%E3%81%9F) を確認してください。

　
## コンテナへのログイン方法

docker ディレクトリに移動してからログインします。

```
cd docker
docker exec -it bc5-php /bin/bash
```

## データベース情報

| name | value |
|-----------|------------|
| host | bc5-db |
| database | basercms |
| user | root |
| password | root |

　
## ブラウザで画面が正常に表示できない場合

初期化が終わっていないか、うまくいっていない可能性があります。
次のコマンドで Docker のログを確認します。

```shell
docker logs bc5-php
````

「Container setup is complete.」と表示されていれば初期化は完了しています。  

「Migration failed.」と表示されている場合は、MySQLの初期化が完了していません。コンテナにログインし、次のコマンドを実行してください。

```shell
/var/www/html/bin/cake migrations migrate --plugin BaserCore
/var/www/html/bin/cake migrations seed --plugin BaserCore
/var/www/html/bin/cake plugin assets symlink
```

　
## lsyncd による高速化

Docker Desktop を利用する前提となっていますが、現在（2022/04/11）Macの環境では、
共有フォルダとしてマウントしたフォルダに直接 Apache の DocumentRoot を設定すると処理速度が非常に遅くなるという問題があります。
そのため、別のフォルダにマウントして、lsyncd というサービスで同期するという仕組みにしています。


### 共有フォルダのマウント設定

ドキュメントルートである `/var/www/html/` ではなく、`/var/www/shared/` に共有フォルダをマウントすることにより高速化を図っています。


### ファイルの同期

共有フォルダ内のファイルを変更した場合、`/var/www/html/` 内に反映させなければ、変更が動作に反映されません。  
そのため、lsyncd を利用して `/var/www/shared/` と `/var/www/html/` を同期します。

```shell
/var/www/shared # 共有フォルダとしてマウントするフォルダ
/var/www/html # Apache の DocumentRoot
```

### ファイルの内容を変更したのに反映できない場合

Docker の起動時に lsyncd を立ち上げる仕様となっていますが、ファイルの内容を変更した場合に反映できない場合はこちらを疑ってください。
コンテナにログインしてサービスの起動状況を確認します。

```shell
service --status-all
```

lsyncd の左側に「+」マークが表示されていれば問題ありません。
そうでない場合は、手動で起動します。

```shell
service lsyncd start
```

なお、同期処理の方向は次のとおりとなっています。

```shell
/var/www/shared → /var/www/html
/var/www/html/tmp → /var/www/shared/tmp
/var/www/html/logs → /var/www/shared/logs
/var/www/html/webroot/files → /var/www/shared/webroot/files
```

　
## 環境を再構築する

PHPのコンテナを違うコンテナにする場合など、環境を再構築する場合は次の手順を踏みます。

```shell
cd docker
# docker-compose.yml.default の変更内容を反映する（必要があれば）
cp docker-compose.yml.default docker-compose.yml
# 初期化完了ファイルを削除
rm ./check
# データベースのデータを削除
rm -rf ./volumes
# コンテナを再構築
docker-compose up -d --force-recreate
```

