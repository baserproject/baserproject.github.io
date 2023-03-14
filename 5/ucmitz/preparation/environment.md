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

M1チップをご利用の場合は、docker-compose.yml の中で、コメントアウトされている `platform` が３箇所ほどあるので、そこコメントを全て解除します。 

### Docker を起動する
docker ディレクトリに移動してから Docker 起動します。

初期化に30秒ほどかかりますので、それを待ってからブラウザでアクセスしてください。 `/docker_inited` ファイルが作成されたら、以上で環境構築は終了です。

```
cd docker
docker-compose up -d
```

ローカルの ucmitz のディレクトリは、/var/www/html にマウントされています。  

- アプリケーション：[https://localhost/](https://localhost/){:target="_blank"}
- phpMyAdmin：[http://localhost:8080/](http://localhost:8080/){:target="_blank"}
- phpPgAdmin：[http://localhost:10080/](http://localhost:10080/){:target="_blank"}
- MailCatcher：[http://localhost:1080/](http://localhost:1080/){:target="_blank"}

### インストーラーを起動する

ブラウザで、次のURLにアクセスするとインストーラーが起動しますので、 [baserCMS５インストール手順](./installer) に従ってインストールを進めます。

[https://localhost/](https://localhost/){:target="_blank"}

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

 
## 環境を再構築する
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

 
## Dockerイメージを取得しなおす
Dockerイメージに更新があった場合に新しいイメージからコンテナを再構築する場合は、事前にローカルに保存されたDockerイメージを削除します。

```shell
cd docker
# docker を起動している場合は止める
docker-compose stop
# コンテナを削除する
docker rm bc5-php
# IMAGE ID を確認する
docker images
# イメージ削除する
docker rmi [IMAGE ID]
# その後、環境の再構築を実施する
```

## Docker でサブフォルダの環境を作る
サブフォルダに配置された状態で開発やテストを行う場合には次のように設定を変更します。

### Docker の設定変更
docker-compose.yml の設定を変更します。

bc5-php の 調整
- volumes を `'../../:/var/www/html:delegated'` に変更
- command を `'bash -c "apache2-foreground"'` に変更

Docker を再構築
```shell
docker-compose up -d --force-recreate
```
※ 一度、ノーマルの状態で、環境構築が終わった後に実行してください。

### PHP環境の設定変更
.env の `SITE_URL` / `SSL_URL` をサブフォルダベースに変更
```shell
# パッケージのディレクトリ名が ucmitz の場合
export SITE_URL="https://localhost/ucmitz/"
export SSL_URL="https://localhost/ucmitz/"
```

### テーマへのシンボリックリンクを再作成
Docker コンテナにログインしシンボリックリンクの作成コマンドを実行します。

```shell
docker exec -it bc5-php /bin/bash
bin/cake plugin assets symlink
```
