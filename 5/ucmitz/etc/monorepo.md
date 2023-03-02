# monorepo-builder の仕組み

## リリースコマンド
リリースコマンドを時刻すると 次の事を実行する

- package.json を更新
- マスターにコミット
- タグを作成
- package.json を更新
- マスターにコミット
- タグと共にプッシュ

```shell
vendor/bin/monorepo-builder release 2.0.0
```

1/8) Update "replace" version in "composer.json" to new tag to avoid circular dependencies conflicts  
「composer.json」の「replace」バージョンを新しいタグに更新して、循環依存関係の競合を回避します

2/8) Set packages mutual dependencies to "^3.0.23" version  
パッケージの相互依存関係を "^3.0.23" バージョンに設定

3/8) Change "Unreleased" in `CHANGELOG.md` to "3.0.23 - 2023-02-27"  
`CHANGELOG.md` の「Unreleased」を「3.0.23 - 2023-02-27」に変更

4/8) Add local tag "3.0.23"  
ローカルタグ「3.0.23」を追加

5/8) Push "3.0.23" tag to remote repository  
「3.0.23」タグをリモートリポジトリにプッシュ

6/8) Set packages mutual dependencies to "^3.1" (alias of dev version)  
パッケージの相互依存関係を "^3.1" (dev バージョンのエイリアス) に設定します。

7/8) Set branch alias "3.1-dev" to all packages  
すべてのパッケージにブランチ エイリアス「3.1-dev」を設定します

8/8) Push "3.1-dev" open to remote repository  
「3.1-dev」を開いてリモートリポジトリにプッシュします

## Packages Split
GitHubActions 上で、`.github/workflows/split_monorepo.yml` を元にパッケージの分割を実行する。

Docker で ubuntu のコンテナを作成し、その中で実行する。

タグが存在する場合には、各パッケージにおいてタグを作成してプッシュする。

## 分割がうまくいかない場合

`symplify/monorepo-split-github-action` のバージョンが低い可能性がある。

[レポジトリ](https://github.com/danharrin/monorepo-split-github-action) で、新しいタグが存在しないか確認し、存在する場合は、設定を書き換える。

```shell
# .github/workflows/split_monorepo.yml
symplify/monorepo-split-github-action@2.1
↓
symplify/monorepo-split-github-action@v2.3.0
```

