# 開発環境の構築

開発は、Docker Desctop で行います。

## 構築手順

### 事前準備
Docker Desctop をインストールします。

- [Docker Descktop for Windows](https://hub.docker.com/editions/community/docker-ce-desktop-windows/)
- [Docker Descktop for Mac](https://hub.docker.com/editions/community/docker-ce-desktop-mac/)

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
Docker を起動すると　ucmitzの初期化処理が始まります。初期化に30秒ほどかかりますので、それを待ってからブラウザでアクセスしてください。
以上で環境構築は終了です。

```
cd docker
docker-compose up -d
```

ローカルの ucmitz のディレクトリは、/var/www/shared にマウントされています。  

- アプリケーション：[https://localhost/](https://localhost/)
- phpMyAdmin：[http://localhost:8080/](http://localhost:8080/)
- phpPgAdmin：[http://localhost:10080/](http://localhost:10080/)
- MailCatcher：[http://localhost:1080/](http://localhost:1080/)

### 管理画面にログインする

ブラウザで、次のURLにアクセスして表示を確認します。
[https://localhost/baser/admin/baser-core/users/login](https://localhost/baser/admin/baser-core/users/login)
   
メールアドレスとパスワードを入力し管理画面にログインします。

- ユーザー名：admin@example.com
- パスワード：password

## コンテナへのログイン方法

docker ディレクトリに移動してからログインします。

```
cd docker
docker exec -it bc5-php /bin/bash
```
## 初期データを設定する

マイグレーションに必要なデータを入れる

```
bin/cake migrations migrate --plugin BaserCore
bin/cake migrations seed --plugin BaserCore
```

## データベース情報

| name | value |
|-----------|------------|
| host | bc5-db |
| database | basercms |
| user | root |
| password | root |
