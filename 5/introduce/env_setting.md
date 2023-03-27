# 環境設定

#### 管理画面を http で利用する
baserCMSの管理画面は、https（SSL）でアクセスしないとエラーとなります。  
http でアクセスしたい場合は、`/config/.env` 開いて設定値を変更します。

```shell
#  ADMIN_SSL を false  に設定する
export ADMIN_SSL="false"
```


