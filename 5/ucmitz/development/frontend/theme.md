# テーマについて

## プラグインのテンプレートの優先順
テンプレートは次の優先順で読み込まれます。

```shell
1. /plugins/{現在のテーマ}/templates/plugin/{PluginName}/{ControllerName}/{action_name}.php
2. /plugins/{現在のテーマ}/templates/{ControllerName}/{action_name}.php
3. /plugins/{対象プラグイン}/templates/{ControllerName}/{action_name}.php
```
1. のプラグイン名はアッパーキャメルケースになります。

ただし、管理画面については、`customAdminTheme` を利用する事でさらに優先順位の高いパスを設定できます。
[管理画面テーマカスタマイズ](../../specification/baser-core/common/customize_admin_theme) を参照してください。

## プラグインのアセットファイルの優先順
画像、CSS、Javascript のアセットファイルは次の優先順で読み込まれます。

```shell
# Javascriptの場合
1. /plugins/{現在のテーマ}/webroot/{plugin_name}/js/{js_file_name}.js
2. /plugins/{対象プラグイン}/webroot/js/{js_file_name}.js
```
1. プラグイン名はスネークケースになります。



