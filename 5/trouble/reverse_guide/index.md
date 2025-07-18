# 逆引きガイド

## ドキュメントルートの位置を変更したい

baserCMS5では、ドキュメントルートの位置が強制的に `/webroot` に変更される仕様となっています。
サーバーで設定されたパスをドキュメントルートに変更したい場合は、以下の手順で行うことができます。

### 1. index.phpの修正

`webroot/index.php` の以下の部分を変更します。

```php
// before
if(file_exists(dirname(__DIR__) . '/vendor/autoload.php')) {
    require dirname(__DIR__) . '/vendor/autoload.php';
} else {
    require dirname(__DIR__) . '/composer_installer.php';
    return;
}
// after
if(file_exists(__DIR__ . '/vendor/autoload.php')) {
    require __DIR__ . '/vendor/autoload.php';
} else {
    require __DIR__ . '/composer_installer.php';
    return;
}
```

```php
// webroot/index.php
// before
$server = new Server(new Application(dirname(__DIR__) . '/config'));
// after
$server = new Server(new Application(__DIR__ . '/config'));
```

### 2. index.php の移動
`webroot/index.php` を `/index.php` に上書きします。

### 3. .htaccess の移動
`webroot/.htaccess` を `/.htaccess` に移動します。

### 4. WWW_ROOTの変更

```php
// config/paths.php
// bofore
define('WWW_ROOT', ROOT . DS . 'webroot' . DS);
// after
define('WWW_ROOT', rtrim($_SERVER['DOCUMENT_ROOT'], DS) . DS);
```

これで、ドキュメントルートをサーバーで設定されたパスに変更することができます。

### 注意点
この設定を行った場合、全てのプログラム群がブラウザからアクセスできてしまうというセキュリティ上の問題が発生します。
そのため、適宜、アクセスさせたくないディレクトリに対しては、`.htaccess` ファイルを配置し、アクセス制限を行う必要があります。

```bash
Order allow,deny
Deny from all
```