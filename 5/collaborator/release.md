# リリース手順

## プラグインをモノレポと Packagist に登録する

新しいプラグインを作成した場合は、リリース時にモノレポの分割対象のパッケージとして登録します。  

パッケージの分割は、 master ブランチ、または、タグをプッシュした際には、GitHub Actions にて実行されますので、 
`/.github/workflow/split_monorepo.yml` を編集して登録します。

```shell
jobs:
    packages_split:
        strategy:
            matrix:
                package:
                    -
                        local_path: 'new-plugin-name'
                        split_repository: 'new-plugin-name'
```

また、新しいプラグインのリポジトリを [Packagist](https://packagist.org/packages/submit) に登録します。

## composer の設定をマージ
Dockerコンテナにログインし、マージコマンドを使って、パッケージの設定をルートの composer.json にマージします。

```shell
# PHPの実行環境が必要
cd docker
docker exec -it bc-php /bin/bash
vendor/bin/monorepo-builder merge
```

 
## VERSION.txt を更新
`plugins/baser-core/VERSION.txt` の先頭行をリリースするバージョン番号に変更し、変更内容をまとめます。  

現在(2023年1月時点)では月に一度行われるマイルストーンミーティングにて、記載内容を決定します。

VERSION.txt に記載するログは、次の形式でまとめます。
```shell
-改修タイプ: [パッケージの省略文字] 改修内容
（例）
-BUG [BC] fixes #7385 RSSフィードの読込時に本文中の<img>タグが読み取れていない 問題を改善
```

改修タイプ
- 新機能：NEW
- 仕様変更：CHG
- 不具合修正：BUG
- パッケージの省略文字

パッケージの省略文字
- baserCMSコア：BC
- ブログプラグイン：BG
- メールプラグイン：ML
- アップローダー：UL
- カスタムコンテンツ：CC



その後、コミットしてプッシュします。

```shell
git commit -a -m "basercms-5.x.x をリリース"
```

## アップデートテストを実行する
[アップデートテスト](./update_test) を参考に、開発ブランチにて、アップデートテストを実行します。
問題なければ、次の手順に進みます。


 
## master ブランチにマージ
`5.1.x` ブランチを `master` ブランチにマージします。

```shell
git checkout master
git merge 5.1.x
```

 
## リリースコマンドを実行
モノレポを使うことで、GitHub 上のパッケージごとのレポジトリへ、一括でリリースすることができます。  
リリースの際は、モノレポのリリースコマンドを実行します。  
自動的にタグを作成しプッシュします。

**GitHubへのプッシュ権限が必要となり、Dockerのコンテナ内で実行する場合、Gitのセットアップができているかを確認してください。**

Git のセットアップについては、事前に 5.1.x ブランチをプルすることでテストを行ってもよいかもしれません。
```shell
# PHPの実行環境が必要
# パッチの場合
vendor/bin/monorepo-builder release patch
# メジャー、マイナーの場合
vendor/bin/monorepo-builder release 5.x.x
```

親パッケージより一括リリースするため、子パッケージのレポジトリは、読み取り専用の扱いとします。


## GitHubActions の実行結果を確認

[GitHubActions](https://github.com/baserproject/basercms/actions) より、次の２つのCIが成功していることを確認します。

- master の Packages Split と PhpDocumentor
- リリース対象バージョンタグ の Packages Split と PhpDocumentor

## Packagist の確認

[baser-core の Packagist](https://packagist.org/packages/baserproject/baser-core) に新しいバージョンが反映されているか確認します。

 
## 開発ブランチにマージ
master ブランチにおいてのリリースコマンドで更新された composer.json の変更内容を、 dev ブランチにマージした上でプッシュします。
```shell
git checkout 5.1.x
git merge master
git push origin 5.1.x
```


## パッケージの作成
Dockerコンテナにログインし、次のコマンドを実行しパッケージを作成します。

```shell
# PHPの実行環境が必要
bin/cake create release master
cd tmp
# バージョン番号付きのファイル名にリネーム
mv basercms.zip basercms-5.x.x.zip
```

master ブランチより作成しますので、**必ずリリースコマンド実行後** に行う必要がありますが、開発ブランチでパッケージを作成し、インストール等の動作を確認したい場合は、`branch` オプションとして引数にブランチ名を追加します。

```shell
bin/cake create release 5.1.x
```

## パッケージのアップロード
baserCMSのオフィシャルサイトの /files/basercms/ ディレクトリにアップロードします。

## オフィシャルサイトのダウンロードページを更新
baserCMSのオフィシャルサイトのダウンロードページを更新します。過去バージョンダウンロードについても忘れないように更新します。

- [baserCMSのダウンロード](https://basercms.net/download/index.html)
 
## GitHubでリリース記事を作成
GitHubにて [新しいリリース記事](https://github.com/baserproject/basercms/releases/new) を作成します。  
※ コミット履歴から参加者を抽出するコマンド `git log --after="YYYY-MM-DD" --pretty=format:"%an" |sort| uniq` 

こちらの記事に先ほど作成した、basercms-5.x.x.zip を添付します。

## 機能一覧の更新
必要があれば、[baserCMS公式ガイドの機能一覧](../functions/index)を更新します。

## オフィシャルサイトでリリース記事を作成
最後にbaserCMSのオフィシャルサイトでリリース記事を作成します。  
その際、カテゴリについて「リリースノート」を選択します。

## スペシャルサンクス更新
baserCMSプロジェクトメンバー名簿より、新しくメンバーとなった方で、スペシャルサンクスへの登録希望の方をピックアップし、baserCMS公式サイトのスペシャルサンクスリストに追加します。

## 告知
バージョンアップした事を広く認知してもらえるよう、告知を行います。

- 広報担当に連絡
- [Slack](https://basercms.slack.com/archives/C03CAUKTU) に告知
- [baserCMSユーザーズフォーラム](https://forum.basercms.net/c/news/6) に告知
- [Facebookページ](https://www.facebook.com/basercms) に告知 　


これでリリース作業は完了です。お疲れさまでした。

## 事後作業

### 1. バージョンファイルの更新
バージョンファイルの先頭行を次のバージョンに変更し、プッシュします。

```
# 以前は、5.1.1-dev というようにサフィックスを付けていましたが
# 5.1.0 以降からは付けなくなりました。

# plugins/baser-core/VERSION.txt
5.x.x

git commit -a -m "バージョンを5.x.xに変更"
```

### 2. 運営サイトのアップデート
バージョンアップに合わせて次の２サイトのアップデートを行います。
- [baserCMS公式サイト](https://basercms.net/)
- [baserCMSデモサイト](https://trial.basercms.net/)


## トラブルシューティング
### リリースコマンドを再度実行するには
リリースについてコミット漏れがあるなど、同じバージョンで再度リリース作業を行いたい場合があります。

その際、次の手順に従います。

#### 1. composer.json を戻す
リリースコマンドを実行すると、composer.json の `replace` の箇所について、各パッケージごとのバージョン番号が、最新バージョン番号で更新されます。  
こちらを手動で元のバージョンに戻します。

```json
    "replace": {
        "baserproject/baser-core": "5.0.2",
        "baserproject/bc-admin-third": "5.0.2",
        "baserproject/bc-blog": "5.0.2",
        "baserproject/bc-column": "5.0.2",
        "baserproject/bc-content-link": "5.0.2",
        "baserproject/bc-custom-content": "5.0.2",
        "baserproject/bc-editor-template": "5.0.2",
        "baserproject/bc-favorite": "5.0.2",
        "baserproject/bc-front": "5.0.2",
        "baserproject/bc-installer": "5.0.2",
        "baserproject/bc-mail": "5.0.2",
        "baserproject/bc-search-index": "5.0.2",
        "baserproject/bc-theme-config": "5.0.2",
        "baserproject/bc-theme-file": "5.0.2",
        "baserproject/bc-uploader": "5.0.2",
        "baserproject/bc-widget-area": "5.0.2"
    },
```

#### 2. ローカルのタグを削除する
リリースコマンドで作成されたローカルタグを削除します。

```shell
git tag -d 5.0.2
```

#### 3. リモートのタグを削除する
リリースコマンドで作成されたリモートタグを削除します。

```shell
git push origin :5.0.2
```

#### 4. リリースコマンドを実行する
その後、修正コミットなどを追加して、準備ができたら、リリースコマンドを実行します。

```shell
vendor/bin/monorepo-builder release 5.0.2
```
