# ダッシュボード拡張

管理システムにログインする際に、一番初めに確認するダッシュボードは、テーマにテンプレートを配置するだけで簡単に拡張することができます。

## ダッシュボードパネル
ダッシュボードに配置するダッシュボード情報の１単位をダッシュボードパネルと呼びます。  
プラグインやテーマにテンプレートを配置することで、既存のダッシュボードパネルを非表示にしたり、オリジナルにダッシュボードパネルを追加することができます。

### 既存パネルの非表示化
標準の状態で、ダッシュボードに配置されているのは次の３つとなります。タイトルの右の名称はダッシュボードパネルのファイル名です。

- baserCMSニュース：baser_news.php
- コンテンツ情報：contents_info.php
- 最近の動き：update_log.php

こちらを非表示にするには、[管理システムテーマカスタマイズ](../plugin/customizing_admin_theme) を参考に、管理システムカスタマイズ用のテーマを作成し、同じ名前の空のファイルをテーマの次のパスに配置します。

```shell
/plugins/{カスタム用テーマ}/templates/Admin/element/Dashboard/baser_news.php
/plugins/{カスタム用テーマ}/templates/Admin/element/Dashboard/contents_info.php
/plugins/{カスタム用テーマ}/templates/Admin/element/Dashboard/update_log.php
```

### 新しいパネルの追加

上記と同様の場所に、任意の名称のテンプレートファイルを配置することで、自動的にダッシュボードに読み込むことができます。
また、新しいパネルについては、現在のテーマやその他のプラグインにも配置して読み込むことが可能です。

```shell
/plugins/{現在のテーマやプラグイン}/templates/Admin/element/Dashboard/{your_panel_name}.php
```
