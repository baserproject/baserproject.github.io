# ファイル読み込みの優先順位

baserCMSでは、テーマにおいて、動作に必要な全てのテンプレートを準備しなくても動くように、読み込み対象のファイルが現在のテーマに存在しない場合は、コアテーマを読み込む仕様となっています。

また、デフォルトのテーマのファイルをコピーして、現在のテーマに配置すると、そちらのファイルが優先して読み込まれるようになっています。

ここでは、カスタマイズ時に baserCMS の仕組みが把握しやすいように、テンプレートファイルやアセットファイルの読み込みの優先順位についてご説明します。

## テンプレートの読み込み順
テンプレートの読み込み優先順位について、レイアウトファイルを例にとってご説明します。

```shell
# レイアウトンプレート（defaultの場合）
1. /plugins/{現在のテーマ}/templates/plugin/{PluginName}/layout/default.php
2. /plugins/{現在のテーマ}/templates/layout/default.php
3. /plugins/{コアテーマ}/templates/plugin/{PluginName}/layout/default.php
4. /plugins/{コアテーマ}/templates/layout/default.php
5. /plugins/{PluginName}/templates/layout/default.php

# コンテンツテンプレート
1. /plugins/{現在のテーマ}/templates/plugin/{PluginName}/{ControllerName}/{action_name}.php
2. /plugins/{現在のテーマ}/templates/{ControllerName}/{action_name}.php
3. /plugins/{コアテーマ}/templates/plugin/{PluginName}/{ControllerName}/{action_name}.php
4. /plugins/{コアテーマ}/templates/{ControllerName}/{action_name}.php
5. /plugins/{PluginName}/templates/{ControllerName}/{action_name}.php
```

プラグイン名がアッパーキャメルケース（PluginName）になっていることにご注意ください。

ただし、管理画面については、アプリケーション設定 `BcApp.customAdminTheme` を利用する事でさらに優先順位の高いパスを設定できます。
[管理画面テーマカスタマイズ](../plugin/customizing_admin_theme) を参照してください。

## アセットファイルの読み込み順
CSS、Javascript、画像などアセットファイルの読み込み優先順位について、Javascript を例にとって説明します。

```shell
# Javascriptの場合
1. /plugins/{現在のテーマ}/webroot/{plugin_name}/js/{js_file_name}.js
2. /plugins/{plugin_name}/webroot/js/{js_file_name}.js
```

プラグイン名はスネークケース（plugin_name）になっていることにご注意ください。
