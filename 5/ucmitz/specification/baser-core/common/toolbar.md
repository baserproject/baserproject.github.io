# ツールバー設計書

フロントページと管理画面共通のツールバー。画面上部に固定する。

## 機能

### 管理画面・フロントページ共通

#### デバッグモード時の状態表示
デバッグモードに設定の際は「デバッグモード」と表示する。

#### サイト切り替え
現在の管理対象のサイトを切り替える。  
メニューには管理対象となるメニューを表示する。  
現在のサイトは、 `ServerRequest::getAttributes('currentSite')` で取得できる。

#### ユーザーメニュー
  - **元のユーザーに戻る:** 代理ログイン時に変更前のユーザーに戻る
  - **アカウント設定:** アカウント編集画面へのリンク
  - **ログアウト**

#### キャッシュクリア
サーバーキャッシュファイルを削除する。  
キャッシュは `/tmp/cache/` 内のファイルを対象とする。

 
### 管理画面

#### トップページへの移動リンク
リンクには「サイト表示」と表示する。

#### 各コンテンツのフロントページへの移動リンク
リンクは、`BcAdminHelper::setPublishLink()` で設定する。

 
### フロントページ

#### ダッシュボードへの移動リンク
リンクには「ダッシュボード」と表示する。

#### 各コンテンツの編集画面への移動リンク
リンクは、`BcAdminHelper::setEditLink()` で設定する。


