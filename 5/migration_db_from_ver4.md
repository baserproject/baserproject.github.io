# baserCMS４のデータベースを変換

ここでは [BcDbMigrator](https://github.com/baserproject/BcDbMigrator) を利用して、baserCMS４のデータベースを baserCMS５用に変換する手順を説明します。

## 現在のbaserCMSのバージョンを確認する
BcDbMigratorが利用できるのは、baserCMS v4.5.5以上が対象となります。

管理システムの「設定」→「ユーティリティ」 → 「環境情報」を確認し、バージョンが `4.5.5` 以上であることを確認してください。

`4.5.5` 以下の場合は、事前に４系の最新版にアップデートしてください。

## バックアップの作成
baserCMS5用のデータは、baserCMS4のバックアップデータから作成します。
管理システムの「設定」→「ユーティリティ」 → 「データメンテナンス」からバックアップを作成してください。

## 新しい環境を準備する
既存のサイトをそのままbaserCMS５系にアップグレードすることはできません。新しい環境にbaserCMS５をインストールしておく必要があります。

- [インストールガイド](./introduce/index)

## BcDbMigratorプラグインをインストール
[GitHub](https://github.com/baserproject/BcDbMigrator){:target="_blank"} 、または、[baserマーケット](https://market.basercms.net/products/detail.php?product_id=157){:target="_blank"} 、もしくは、[composer](https://packagist.org/packages/baserproject/bc-db-migrator){:target="_blank"} より、BcDbMigratorプラグインを取得し、新しい環境の `/plugins/` フォルダに配置します。

その後、プラグイン管理よりインストールを実行します。

## データベースを変換する
プラグイン一覧より、BcDbMigratorプラグインの右側にある歯車マークををクリックします。

既存の環境のバックアップファイルをアップロードすると変換が始まります。baserCMS５用への変換が完了するとダウンロードボタンが表示されますのでダウンロードします。

### パスワードを控える
baserCMS４からbaserCMS５へは、ユーザーのパスワードの移行ができません。
変換完了時に、パスワードを表示しますので、控えておいてください。

新しい環境において、全てのユーザーはこのパスワードでログインすることになります。

### 問題が発生した場合
問題が発生した場合は、[ユーザーズフォーラム](https://forum.basercms.net/) に報告するか、[GitHubのIssue](https://github.com/baserproject/BcDbMigrator/issues) を作成してください。

## プラグインをすべてインストール
baserCMS v5.0.7までは、プラグインが全てインストールされている状態でないと、バックアップファイルの復元に失敗します。

新しい環境の管理システムのプラグイン管理より無効となっているプラグインをすべてインストールします。

## バックアップファイルを復元する
新しい環境の管理システムの「設定」→「ユーティリティ」 → 「データメンテナンス」からバックアップを復元します。

「データの復元」より、変換したバックアップファイルをアップロードし、復元します。

### インポートするテーブルに key というカラムがある場合
プラグインなどで、テーブルに `key` というカラムを利用している場合は注意が必要です。MySQL8以降では、key というカラムが、予約語であるため、インポート時にエラーとなってしまいます。
`/config/install.php` に `quoteIdentifiers` という設定を追加し、`true` に設定してください。
そうすることでエラーを回避することができます。

```php
return [
    'Datasources.default' => [
        'className' => 'Cake\\Database\\Connection',
        'driver' => 'Cake\\Database\\Driver\\Mysql',
        'host' => 'xxxx',
        'port' => '3306',
        'username' => 'xxxx',
        'password' => 'xxxx',
        'database' => 'basercms',
        'prefix' => '',
        'schema' => '',
        'persistent' => '',
        'encoding' => 'utf8mb4',
        'log' => filter_var(env('SQL_LOG', false), FILTER_VALIDATE_BOOLEAN),
        'quoteIdentifiers' => true, // この行を追加
    ],
];
```

特に問題がなければ、これで、baserCMS４のデータベースをbaserCMS５用の環境に移行することができました。お疲れ様でした。

こちらも合わせてご覧ください。
- [baserCMS４のテーマを変換](./theme/migration_theme_from_ver4)
- [baserCMS４のプラグインを変換](./plugin/migration_plugin_from_ver4)
- [baserCMS４からの変更点](./core/difference_from_basercms4)