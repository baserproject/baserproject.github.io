# Docker環境の管理

## はじめに
Dockerfile では、コンテナ内の環境で何をするかを定義します。
PHPの環境については、DockerHub上のDockerイメージを元にコンテナを構築しているため
Dockerfileを変更して再ビルドしてもローカルのイメージだけしか変更できず、
同様の環境を共有するためには、DockerHubにイメージをプッシュする必要があります。

また、DockerHubは、2021年6月より、GitHub連携や、チーム連携を行う機能が有料化されており、baserproject では、まだ有料プランに加入していないため利用できません。  
そのため、Dockerfile に変更を加えてDockerHubに共有したい場合は、プロダクトマネージャーに依頼する必要があります。

 
## Dockerイメージのビルド

Dockerのイメージをビルドするには、[baser-docker](https://github.com/baserproject/baser-docker){:target="_blank"} レポジトリを利用しますので、まずはローカルにクローンしてください。

### 1. Dockerfileに変更を加える

`/dockerfile/` 内に　Dockerfile があるのでそちらのファイルに変更を加えるか、新しくファイルを作ります。

### 2. ビルド実行
```shell
docker build -t baserproject/basercms:php8.1 -f dockerfile/Dockerfile-php8.1 .
```
### 3. コンテナを起動する

```shell
docker-compose up -d --force-recreate
```

 
## 新しいDockerイメージの共有依頼
Dockerfile の変更を GitHub にコミット後、[baserCMSのSlack](https://app.slack.com/client/T03CAUKTJ/C03CAUKTU) で、プロダクトマネージャーにDMで連絡してください。  
（現在のプロダクトマネージャーは `ryuring` です。）


## DockerHubへの反映手順
こちらの手順はプロダクトマネージャー向けです。

### 1. DockerHubにログインする
baserproject アカウントでログインします。

```shell
docker login
```


### 2. イメージをビルドしてDockerHubにプッシュする
amd64 と arm64 に対応する場合、ローカルに２つ同時に作成できず、ビルド後、DockerHubに直接プッシュする必要があるため、`--push` オプションを利用する必要があります。

```shell
cd docker/
# Dockerfile-php7.4 に変更を加え、それを元に「php8.1」とタグ付けする場合
docker buildx build --platform linux/amd64,linux/arm64 -t baserproject/basercms:php8.1 -f dockerfile/Dockerfile-php8.1 --push .
# latest を更新
docker buildx build --platform linux/amd64,linux/arm64 -t baserproject/basercms -f dockerfile/Dockerfile-php8.1 --push .
```

### 3. ローカルのイメージを削除する
コンテナを起動する際、ローカルにイメージが存在する場合はそちらを利用してしまうので、削除して DockerHubより取得するようにします。

```shell
docker rmi --force baserproject/basercms:php8.1
```

### 4. コンテナを起動する
ローカルにイメージが存在しないのでDockerHubより取得して起動します。
```shell
docker-compose up -d
```

