# WordPressとの共存

コンテンツ管理には baserCMSを利用し、ブログだけを WordPressを利用したいという場合があります。
baserCMSは、少しの調整を行うことで WordPressと共存させることができます。

## 共存手順
### index.php のリネーム
baserCMS でも WordPress でも 実行ファイルに同盟の index.php を利用するため、baserCMS側の index.php をリネームします。

`/webroot/index.php` を `/webroot/index_basercms.php` に変更します。

### WordPress の配置
WordPressのプログラム群は、全て `/webroot/` 配下に配置します。このディレクトリがドキュメントルートとして機能します。

### .htaccess の調整
baserCMSの index.php をリネームしたためそれでも動作するように .htaccess を調整します。  
以下の例は `archive` 配下（WordPressの管理画面から記事のパーマリンクを `archive` に設定）をWordPress で表示する場合で、変更後の.htaccessを示しています。

```shell
#（例）archives 配下のみWordPressにしたい場合
<IfModule mod_rewrite.c>
    RewriteEngine On
    
    # トップページ（baserCMS）
    RewriteRule ^$ index_basercms.php [L]
    
    # WordPress
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_URI} ^/archives/ [NC]
    RewriteRule . /index.php [L]

    # baserCMS    
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteRule ^(.*)$ index_basercms.php [L]
</IfModule>
```
