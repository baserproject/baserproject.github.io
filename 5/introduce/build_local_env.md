# ローカル環境を構築して利用する

サーバー等にアップロードせず、baserCMSの動作を手元のパソコン上で確認したい場合は、baserCMSが提供する Docker による仮想環境を利用する事で簡単に動作環境を構築することができます。

baserCMS本体の開発においてもこの Docker 環境での開発を推奨しています。これにより各開発者の開発環境は画一的に揃えられ、不具合の再現性を高めることができます。インストーラで一発導入できるMAMPやXAMPPも手軽でいいのですが、LAMPで構成される仮想環境は本番環境に近いため安心です。

## 構築手順

### 事前準備
Docker Desktop をインストールします。

- [Docker Desktop for Windows](https://hub.docker.com/editions/community/docker-ce-desktop-windows/)
- [Docker Desktop for Mac](https://hub.docker.com/editions/community/docker-ce-desktop-mac/)

### baserCMS をクローンする

```
git clone https://github.com/baserproject/basercms.git
```

### docker-compose をコピーする

```
cp docker/docker-compose.yml.default docker/docker-compose.yml
```

※ このファイルは自由に編集可能です。

### Docker を起動する
docker ディレクトリに移動してから Docker 起動します。

初期化に30秒ほどかかりますので、それを待ってからブラウザでアクセスしてください。 `/docker_inited` ファイルが作成されたら、以上で環境構築は終了です。

```
cd docker
docker-compose up -d
```

ローカルの baserCMS のディレクトリは、コンテナ上の `/var/www/html` にマウントされています。  

- アプリケーション：[https://localhost/](https://localhost/){:target="_blank"}
- phpMyAdmin：[http://localhost:8080/](http://localhost:8080/){:target="_blank"}
- phpPgAdmin：[http://localhost:10080/](http://localhost:10080/){:target="_blank"}
- MailCatcher：[http://localhost:1080/](http://localhost:1080/){:target="_blank"}

### インストーラーを起動する

ブラウザで、次のURLにアクセスするとインストーラーが起動しますので、 [インストールを実行する](./index#インストールを実行する)  に従ってインストールを進めます。

[https://localhost/](https://localhost/){:target="_blank"}

#### データベース情報

| name | value                       |
|-----------|-----------------------------|
| host | MySQL：bc-db<br>PostgreSQL：bc-pg |
| database | basercms                    |
| user | root                        |
| password | root                        |

## コンテナの操作
### コンテナへのログイン方法

docker ディレクトリに移動してからログインします。

```
cd docker
docker exec -it bc-php /bin/bash
```
 
### 環境を再構築する
PHPのコンテナを違うコンテナにする場合など、環境を再構築する場合は次の手順を踏みます。

```shell
# 初期化完了ファイルを削除
rm ./docker_inited
# dockerフォルダへ移動
cd docker
# docker-compose.yml.default の変更内容を反映する（必要があれば）
cp docker-compose.yml.default docker-compose.yml
# データベースのデータを削除
rm -rf ./volumes
# コンテナを再構築
docker-compose up -d --force-recreate
```

### Dockerイメージを取得しなおす
Dockerイメージに更新があった場合に新しいイメージからコンテナを再構築する場合は、事前にローカルに保存されたDockerイメージを削除します。

```shell
cd docker
# docker を起動している場合は止める
docker-compose stop
# コンテナを削除する
docker rm bc-php
# IMAGE ID を確認する
docker images
# イメージ削除する
docker rmi [IMAGE ID]
# その後、環境の再構築を実施する
```

### Docker でサブフォルダの環境を作る
サブフォルダに配置された状態で開発やテストを行う場合には次のように設定を変更します。

#### Docker の設定変更
docker-compose.yml の設定を変更します。

bc-php の 調整
- volumes を `'../../:/var/www/html:delegated'` に変更
- command を `'bash -c "apache2-foreground"'` に変更

Docker を再構築
```shell
docker-compose up -d --force-recreate
```
※ 一度、ノーマルの状態で、環境構築が終わった後に実行してください。

#### PHP環境の設定変更
.env の `SITE_URL` / `SSL_URL` をサブフォルダベースに変更
```shell
# パッケージのディレクトリ名が basercms の場合
export SITE_URL="https://localhost/basercms/"
export SSL_URL="https://localhost/basercms/"
```

### テーマへのシンボリックリンクを再作成
Docker コンテナにログインしシンボリックリンクの作成コマンドを実行します。

```shell
docker exec -it bc-php /bin/bash
bin/cake plugin assets symlink
```

　
