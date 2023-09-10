# トラブルシューティング

baserCMSコアの開発のおけるトラブルシューティングについてまとめています。

## 管理画面にログインできなくなった
### トラブル内容
ログインの際に、 `/var/www/html/config/jwt.key` を読み込む必要があり、 Docker コンテナの初期化の際、604 に設定されているはずですが、lsyncd など何かしらの問題で、600になってしまっている場合があります。その際、ログインができません。

### 解決方法
権限を変更します。
```
cd docker
docker exec bc-php chmod 604 ./config/jwt.key
```

## SoftDeleteTraitが見つからない
### トラブル内容

```
Error: Fatal Error (1): Trait 'SoftDelete\Model\Table\SoftDeleteTrait' not found in [/var/www/html/plugins/baser-core/src/Model/Table/ContentsTable.php, line 37]
```
### 解決法

次のコマンドを実行してパッケージを追加します。
```
docker exec -it bc-php /bin/bash
composer update --prefer-source
```
