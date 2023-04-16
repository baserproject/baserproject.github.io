# プラグイン設定ファイル

baserCMSでは、CakePHP形式の設定ファイルを `config` ディレクトリに `setting.php` として配置すると自動的に読み込まれます。

```php
// 例
// /plugins/{YourPluginName}/config/setting.php
return ['Sample' => [
    'key1' => 'value1',
    'key2' => 'value2'
]];
```
