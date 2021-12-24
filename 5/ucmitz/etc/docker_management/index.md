### はじめに

Dockerfile では、コンテナ内の環境で何をするかを定義します。
ただ、現在phpに関しては、baserproject/basercms:~のdockerイメージを元にコンテナを構築しているため
Dockerfileの変更やコンテナの更新だけでは変更されません。
なので、DockerHub上の共有されたbaserproject/basercmsリポジトリに変更をコミットする必要があります。

### 手順

##### (1)Docker Hub アカウントのセットアップ

まずはDocker Hubに登録し、アカウントを作成してください
その後、アカウント設定からアクセストークンを設定します。
そして、cli側からdocker login後アクセストークンを入力しログイン完了です。

```
docker login [OPTIONS] [SERVER]
```

##### (2)Docker HubにCollaboratorsとして登録

Docker Hubのbaserproject管理者に自分のアカウントIDを登録してもらいます

##### (3)dockerリポジトリに変更を加える

```
<!-- dockerディレクトリにて、変更を加えたDockerfileファイルを元に新規でコンテナを立ち上げる -->
cd docker/
docker  build -t baserproject/basercms:5-php7.4 -f dockerfile/Dockerfile-php7.4 . 
<!-- backgroundで走らせる -->
docker run -itd baserproject/basercms:5-php7.4 /bin/bash
docker ps
--
CONTAINER ID   IMAGE                         
b9bec8df6b79   baserproject/basercms:5-php7.4 
--

<!-- 立ち上がったコンテナIDをイメージとしてコミットする コミットメッセージを残す -->
docker container commit -m "php7.4に~モジュールを追加など" b9bec8df6b79 baserproject/basercms:5-php7.4

<!-- 別のイメージとする場合はtag付けする -->
docker image tag baserproject/basercms:5-php7.~ baserproject/basercms:5-php7.4

<!-- コミットし、タグ付したイメージをdocker hubリポジトリにプッシュする -->
docker image push baserproject/basercms:5-php7.4
docker image ls
--
REPOSITORY                            TAG                  IMAGE ID       CREATED         SIZE
baserproject/basercms                 5-php7.4             c0e9f0887eb5   5 minutes ago   668MB
--
<!-- コミットメッセージの確認 -->
docker history baserproject/basercms:5-php7.4
IMAGE          CREATED          CREATED BY                                      SIZE      COMMENT
c0e9f0887eb5   35 minutes ago   bash -c /var/www/html/docker/apache/init.sh …   4.69kB    
0b227123741d   3 hours ago      RUN /bin/sh -c curl -sS https://getcomposer.…   2.35MB    buildkit.dockerfile.v0
```

##### (4)最新のdockerイメージの使用
  
```
docker compose pull // 全体の再取得
docker compose up -d --force-recreate // --force-recreateにより再作成
```