# 管理画面CSS自動読み込み

プラグインでは、決まった命名規則で特定の場所にCSSファイルを設置することで、管理システムにおいて、全画面でそのCSSを自動的に読み込みます。

```shell
plugins/{PluginName}/webroot/css/admin/{plugin_name}_admin.css
# 例）
plugins/SamplePlugin/webroot/css/admin/sample_plugin_admin.css
```

CSSファイル名は、アンダースコア区切りとなります。

なお、CSSの読み込みは、管理システムのレイアウトテンプレートに記述された `BcBaserHelper::scripts()` を利用して読み込みます。


