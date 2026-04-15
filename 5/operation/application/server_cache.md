# サーバーキャッシュ

サーバーキャッシュとは、baserCMSで制作されたサイトの表示スピードを改善する機能です。

## 機能概要
baserCMSは[CakePHPフレームワーク](https://cakephp.org/jp){:target="_blank"}によって動いています。その為、通常の静的なHTMLページの表示に比べ、サーバー内部での処理が多く、表示が遅くなってしまいます。そこで、１度どこからかアクセスがあって表示されたページについては、サーバー内にキャッシュを残して、キャッシュが存在していれば、そちらを優先的に表示させることで、アクセスからページ表示までの処理数を減らし、表示速度を改善します。


## キャッシュの保存場所
サーバーキャッシュは以下の場所に保存されます。


```shell
/app/tmp/cache/
```

上記フォルダ内に設置されたプラグインは、管理画面のプラグイン管理で自動的に認識されます。

## サーバーキャッシュの削除
1. 管理画面にアクセスします
2. ユーティリティ > ユーティリティトップ > サーバキャッシュを削除します　を実行してください
3. 「サーバーキャッシュを削除しました。」というサクセスメッセージが出力した場合、成功です。

## キャッシュの無効化
/config/setting.phpの以下の部分を変更します。
```php

use Cake\Cache\Engine\NullEngine;
return [
    'Cache' => [
        'default' => [
            'className' => NullEngine::class,
        ],
        '_cake_core_' => [
            'className' => NullEngine::class,
        ],
        '_cake_model_' => [
            'className' => NullEngine::class,
        ],
        '_bc_env_' => [
            'className' => NullEngine::class,
        ],
        '_bc_update_' => [
            'className' => NullEngine::class,
        ],
        '_bc_gmaps_' => [
            'className' => NullEngine::class,
        ],
    ],
]
```
なお、デバッグモードで実行した時は、キャッシュがあっても無視されます。 　


## サイトの移設時の問題
テスト環境でbaserCMSでサイトを構築し、本番環境に移す際、テスト環境で残されたこれらのキャッシュが問題になることがあります。その為、サイト移設時には前述の「tmp」フォルダの中にあるファイル・フォルダを全て削除してから本番環境へコピーすることになります。

## 外部参考リンク
[サーバーキャッシュを削除する](https://baserproject.github.io/5/web_api/baser_admin_api/baser-core/utilities/clear_cache){:target="_blank"} -baserCMSユーザーマニュアル



