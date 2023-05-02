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
マージコマンドを使って、パッケージの設定をルートの composer.json にマージします。

```shell
vendor/bin/monorepo-builder merge
```

 
## VERSION.txt を更新
`VERSION.txt` の先頭行をリリースするバージョン番号に変更し、変更内容をまとめます。  
その後、コミットしてプッシュします。

```shell
git commit -a -m "ucmitz-5.0.0 をリリース"
```

 
## master ブランチにマージ
`dev` ブランチを `master` ブランチにマージします。

```shell
git checkout master
git merge dev
```

 
## リリースコマンドを実行
モノレポを使うことで、GitHub 上のパッケージごとのレポジトリへ、一括でリリースすることができます。  
リリースの際は、モノレポのリリースコマンドを実行します。  
自動的にタグを作成しプッシュします。

```shell
vendor/bin/monorepo-builder release 5.0.0
```

親パッケージより一括リリースするため、子パッケージは、読み取り専用の扱いとします。

## GitHubActions の実行結果を確認

[GitHubActions](https://github.com/baserproject/basercms/actions) より、次の２つのCIが成功していることを確認します。

- master の Packages Split と PhpDocumentor
- リリース対象バージョンタグ の Packages Split と PhpDocumentor

## Packagist の確認

[baser-core の Packagist](https://packagist.org/packages/baserproject/baser-core) に新しいバージョンが反映されているか確認します。

 
## dev ブランチにマージ
master ブランチにおいてのリリースコマンドで更新された composer.json の変更内容を、 dev ブランチにマージした上でプッシュします。
```shell
git checkout dev
git merge master
git push origin dev
```


## パッケージの作成
Dockerコンテナにログインし、次のコマンドを実行しパッケージを作成します。

```shell
bin/cake create release
cd tmp
# バージョン番号付きのファイル名にリネーム
mv basercms.zip basercms-5.x.x.zip
```

master ブランチより作成しますので、**必ずリリースコマンド実行後** に行う必要がありますが、開発ブランチでパッケージを作成し、インストール等の動作を確認したい場合は、`branch` オプションとして引数にブランチ名を追加します。

```shell
bin/cake create release dev-5
```

## パッケージのアップロード
baserCMSのオフィシャルサイトの /files/basercms/ ディレクトリにアップロードします。

## オフィシャルサイトのダウンロードページを更新
baserCMSのオフィシャルサイトのダウンロードページを更新します。過去バージョンダウンロードについても忘れないように更新します。

- [baserCMSのダウンロード](https://basercms.net/download/index.html)
 
## GitHubでリリース記事を作成
GitHubにて [新しいリリース記事](https://github.com/baserproject/basercms/releases/new) を作成します。

こちらの記事に先ほど作成した、basercms-5.x.x.zip を添付します。

## オフィシャルサイトでリリース記事を作成
最後にbaserCMSのオフィシャルサイトでリリース記事を作成します。

これでリリース作業は完了です。お疲れさまでした。


　
