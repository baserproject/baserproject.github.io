# コアプラグインの開発

baserCMSではコアパッケージに梱包して配布するプラグインを「コアプラグイン」と呼びます。  
コアプラグインは特別な扱いとしてベンダープラグインとは区別されます。

## ディレクトリ名
コアプラグインのディレクトリ名は、ハイフン区切りとします。

例）bc-blog、bc-mail、bc-custom-content


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
コアプラグインは独自にバージョンを持ちません。次に記載する「コアパッケージ」のバージョン番号と同一のバージョンとして認識されます。
 
## コアパッケージの設定
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










