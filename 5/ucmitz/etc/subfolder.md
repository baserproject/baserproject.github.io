# サブフォルダに設置する

基本的に特別な作業は必要ありませんが、うまく動作しない場合に次を確認してください。

## .env の設定

- `SITE_URL` / `SSL_URL` にセットされているURLにサブフォルダが含まれいている事
- `SITE_URL` / `SSL_URL` にセットされているURLの最後がスラッシュで終わっている事

## .htaccess の設定

２箇所の .htaccess の RwriteBase の設定に　サブフォルダのパスを記述

```shell
# /.htaccess
RewriteBase /subdir

# /webroot/.htaccess
RewriteBase /subdir
```
