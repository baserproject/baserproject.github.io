# 独自プラグインのユニットテスト

プラグイン単体でユニットテストを行うには、[BcBake](https://github.com/baserproject/BcBake){:target="_blank"} を利用すると便利です。  
アプリケーション本体を準備せずともユニットテストを行うことができます。

Docker等のPHPの実行環境は必要となりますので別途ご用意ください。

## BcBakeの構成
BcBakeでアプリケーションを作成した場合、ユニットテスト実行時は、`tests/TestApp` がアプリケーションディレクトリとして見なされる仕様となっています。

## composer 
composer で必要なパッケージをインストールします。

```shell
composer install
```

## DBの準備
ユニットテスト実行時、データベースに接続しようとしますので、事前にデータベースを準備してください。

## .env
データベースの接続情報は、`tests/TestApp/config/install.php` に記載してあります。  
直接書き換えてもいいですが、GitHubActionsで利用する場合は、`.env` ファイルを作成し、次のように記載してください。

```shell
# tests/TestApp/config/.env
export DB_HOST="localhost"
```

## テストの作成

テストの作成時は、`BaserCore\TestSuite\BcTestCase` を継承して作成します。

## テストの実行

テストの実行は、`vendor/bin/phpunit` コマンドで行います。


## baserCMS本体のFixtureの利用

baserCMS本体の `FixtureFactory` や、`FixtureScenario` を利用したい場合もあるかと思いますが、そのままでは利用できません。

利用したい場合は、`composer.json` に、オートロードセットを追加し、`composer install` を実行します。

```json
    "autoload-dev": {
        "psr-4": {
            "BaserCore\\Test\\": "vendor/baserproject/baser-core/tests/",
        }
    },
```

## GitHubActionsでの実行
BcBakeを利用した場合、`.github/workflows/test.yml` が用意されていますので、そのまま利用できます。

## 既存のプラグインでのユニットテスト
既存のプラグインでプラグイン単体でユニットテストを行うには、BcBakeで、サンプルプラグインを作成し、次のフォルダをコピーし、composer.json など適宜調整してください。

- `.github`
- `tests`
- `composer.json`