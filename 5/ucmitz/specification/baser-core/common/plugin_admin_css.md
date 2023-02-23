# プラグイン向け管理画面CSS自動読み込み

決まった命名規則で特定の場所にCSSファイルを設置することで、管理画面において、対象プラグインの画面も含め全画面でそのCSS読み込む事ができます。

```shell
# 例）
plugins/{PluginName}/webroot/css/admin/{plugin_name}_admin.css
```
CSSファイル名は、アンダースコア区切りとなります。  
主にはコンテンツ管理で利用するアイコンの設定で利用します。

 
## 実装箇所
BcBaserHelper::scripts()
