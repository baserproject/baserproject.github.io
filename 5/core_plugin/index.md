# コアプラグインの開発

baserCMSではコアパッケージに梱包して配布するプラグインを「コアプラグイン」と呼びます。  
コアプラグインは特別な扱いとしてベンダープラグインとは区別されます。

## コアパッケージ
コアプラグインとは別に、プラグイン管理画面では制御せずに、baserCMSコア側で動作制御を行うものを「コアパッケージ」と呼びます。これらのパッケージは、プラグイン管理の一覧には表示されません。

コアパッケージは現在次の４つとなります。
- BaserCore
- BcInstaller
- BcFront
- BcAdminThird

コアパッケージは次の設定に定義されています。
```php
return [
    'BcApp' => [
        'core' => ['BaserCore', 'BcAdminThird', 'BcFront', 'BcInstaller'],
    ]
];        
```

## ディレクトリ名
通常のプラグインは、キャメルケースのディレクトリ名としますが、コアプラグインのディレクトリ名は、特別にハイフン区切りとします。  
ただし、プログラムコード上ではキャメルケースで記述します。

例）bc-blog、bc-mail、bc-custom-content

## Composer による管理
### 統合的なパッケージ管理
[パッケージ構成](../package/index) に記載しているとおり、baserCMSではモノレポによる統合的なパッケージ管理を採用しています。  

子パッケージの `composer.json` 記述したパッケージは、`monorepo-builder` により、親パッケージの `composer.json` にまとめあげることができ、`vendor` ディレクトリも親の `vendor` で統合的に管理することができます。

そのため、子パッケージの `composer.lock` と `vendor` ディレクトリは利用しません。（.gitignore で除外済です）

### 子パッケージの構成をまとめあげる
パッケージを追加する場合は、子パッケージの `composer.json` に記述します。

子パッケージの `composer.json` を変更した場合は、次のコマンドを実行して親パッケージにまとめあげる必要があります。

```shell
vendor/bin/monorepo-builder merge
```

### パッケージの追加
パッケージを実際に追加する際は、親パッケージの `composer.json` に子パッケージの定義内容がまとめ上げられていることを前提として、親パッケージの composer.json に対してコマンドを実行します。
 
```shell
composer update
```

## 新しいコアプラグインの追加
新しいコアプラグインを追加するには特別な設定が必要です。

### 無視設定の変更
`/.gitignore` にてプラグイン本体の無視設定を解除し、シンボリックリンクの無視設定を追加します。
```shell
!/plugins/bc-blog
/webroot/bc_blog
```

### コアプラグインの定義
`/config/setting.php` の `BcApp.corePlugins` にプラグイン名を記載します。
```php
return [
    'BcApp' => [
        'corePlugins' => ['BcBlog']
    ]
];
```

### 初期インストール設定
baserCMSのインストールの際に一緒にインストールする場合は次の設定に追加します。
```php
return [
    'BcApp' => [
        'defaultInstallCorePlugins' => ['BcBlog']
    ]
];
```

### BaserCore に依存関係を追加
BaserCore の composer.json に依存関係を追加します。  
これにより、インストーラーを実行した際に一緒に取得する事ができます。

```json
# /plugins/baser-core/composer.json
{
    "require": {
        "baserproject/bc-custom-content": "^5.1",
    }
}        
``` 



### モノレポの準備
Composer で個別に管理するため、読み取り専用のGitHubレポジトリを準備し、モノレポの設定ファイルに追加します。

```yml
// .github/workflows/split_monorepo.yml
jobs:
        strategy:
            matrix:
                package:
                    -
                        local_path: 'bc-custom-content'
                        split_repository: 'bc-custom-content'
```


## コアプラグインのバージョン
コアプラグインは独自にバージョンを持ちません。baserCore と同一のバージョンとして認識されます。


