# アップデートテスト
baserCMSのコアのアップデートは、composer を利用しますので、通常であれば、リリースを完了しないとアップデートのテストが行えません。
ここでは、リリース前にアップデートのテストを行う方法を説明します。

## 概要
composer では、設定によって、開発ブランチより、最新のコードを取得することができます。
アップデートのテスト環境を準備し、その仕組を利用して、リリース前にアップデートのテストを行います。

## 開発環境での作業
開発環境では、命名規則に沿ったブランチを作成し、GitHubにプッシュします。
次のように「x」を指定したブランチを作成すると、packagist では、開発版として扱われます。
- パッチアップデート：「5.1.x」
  - packagist では、「5.1.x-dev」として扱われます。
- マイナーアップデート：「5.x」
  - packagist では、「5.x-dev」として扱われます。

### 開発ブランチを作成
命名規則に沿った開発ブランチを作成します。

```
git checkout -b 5.1.x
```

### バージョン番号を更新

バージョン番号は、実際のリリース予定のバージョンに合わせて更新します。 
開発ブランチ名と同じように「5.1.x」のような形式にすると、baserCMSのアップデート時のアップデートスクリプトが実行できませんので注意が必要です。
```
# plugins/baser-core/VERSION.txt
5.1.0
```

### GitHubにプッシュ
GitHubにプッシュすると、GitHubActionsで、monorepo-builderにより、レポジトリの分割が行われ、「baserproject/baser-core」などの子パッケージのレポジトリに開発ブランチが反映されます。
```
git push origin 5.1.x
```

## Packagist確認
「baserproject/baser-core」などの子パッケージのレポジトリに開発ブランチが作成されると、自動的に Packagist にも反映されます。
反映されていれば、これで composer で開発ブランチの取得が可能となります。

- [baser-core の Packagist](https://packagist.org/packages/baserproject/baser-core)

```
# Packagist でのバージョン名
5.1.x-dev
```

## テスト環境での作業
テスト環境では、アップデート前に composer.json にて、開発ブランチを取得できるように設定が必要です。

### composer.json を更新
開発ブランチが取得できるようなバージョン指定になっている必要があります。
```
"require": {
    "baserproject/baser-core": "5.1.x",
    ...
}
```
開発版が取得できるように設定を追加します。
```
    "minimum-stability": "dev",
    "prefer-stable": false
```

もし、replace があれば除外します。
```
    "replace": {
        "baserproject/baser-core": "5.0.18",
        ...
    }    
```

## アップデートの実行
管理画面にログインし、直接アップデート画面を開いて、アップデートを実行します。
### アップデート画面に移動
```
https://your-update-test/baser/admin/baser-core/plugins/update
```

### 最新版をダウンロード
「利用可能なバージョンに関わらず、composer.json の内容でダウンロードする」にチェックを入れて「最新版をダウンロード」をクリックします。
※ v5.0.19 以降から利用可能です。

### アップデートを実行
「アップデートを実行」をクリックします。
