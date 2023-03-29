# baser API

baserCMSコアが提供するAPIの一覧です。利用方法については、[Web API](./index) をご覧ください。

（現在、鋭意準備中です。 [ドキュメント準備予定のAPI一覧](https://docs.google.com/spreadsheets/d/1YT5PuZQdDNU0wrZdqYbh74KuLSw1SIt4_EKwPWOfDKA/edit#gid=1129992221) ）

## コア
### ユーザー
- [ログイン](baser-core/users/login)
- [リフレッシュトークンの取得](baser-core/users/refresh_token)
- [ユーザー情報の取得](baser-core/users/view)
- [ユーザー一覧の取得](baser-core/users/index)
- [ユーザーの追加](baser-core/users/add)
- [ユーザーの編集](baser-core/users/edit)
- [ユーザーの削除](baser-core/users/delete)

### ユーザーグループ
- [ユーザーグループ一覧の取得](baser-core/user_groups/index)
- [ユーザーグループの取得](baser-core/user_groups/view)
- [ユーザーグループの追加](baser-core/user_groups/add)
- [ユーザーグループの編集](baser-core/user_groups/edit)
- [ユーザーグループの削除](baser-core/user_groups/delete)
- [ユーザーグループのリスト](baser-core/user_groups/list)
- [ユーザーグループのコピー](baser-core/user_groups/copy)

### コンテンツ
- [コンテンツ情報の取得](baser-core/contents/view)
- [コンテンツ一覧の取得](baser-core/contents/index)
- [コンテンツの編集](baser-core/contents/edit)
- [コンテンツの削除](baser-core/contents/delete)
- [コンテンツの公開状態の変更](baser-core/contents/change_status)
- [コンテンツ情報の一括処理](baser-core/contents/batch)
- [コンテンツの存在確認](baser-core/contents/exists)
- [URLがユニークか確認](baser-core/contents/is_unique_content)
- [コンテンツのフルURLの取得](baser-core/contents/get_full_url)
- [コンテンツフォルダーのリストの取得](baser-core/contents/get_content_folder_list)
- [コンテンツの移動](baser-core/contents/move)
- [コンテンツのリネーム](baser-core/contents/rename)
- [ゴミ箱のコンテンツ一覧の取得](baser-core/contents/index_trash)
- [ゴミ箱のコンテンツ情報の取得](baser-core/contents/view_trash)
- [ゴミ箱のコンテンツを戻す](baser-core/contents/trash_return)
- [ゴミ箱を空にする](baser-core/contents/trash_empty)

### コンテンツフォルダ
- [コンテンツフォルダ情報の取得](baser-core/content_folders/view)
- [コンテンツフォルダ一覧の取得](baser-core/content_folders/index)
- [コンテンツフォルダの追加](baser-core/content_folders/add)
- [コンテンツフォルダの編集](baser-core/content_folders/edit)
- [コンテンツフォルダの削除](baser-core/content_folders/delete)

### ログ管理
- [ログ管理一覧の取得](baser-core/dblogs/index)
- [ログ管理の追加](baser-core/dblogs/add)
- [ログ管理の一括削除](baser-core/dblogs/delete_all)

### 固定ページ
- [固定ページ一覧の取得](baser-core/pages/index)
- [固定ページ情報の取得](baser-core/pages/view)
- [固定ページの追加](baser-core/pages/add)
- [固定ページの編集](baser-core/pages/edit)
- [固定ページの削除](baser-core/pages/delete)
- [固定ページのコピー](baser-core/pages/copy)

### アクセス制限設定
- [アクセス制限設定一覧の取得](baser-core/permissions/index)
- [アクセス制限設定情報の取得](baser-core/permissions/view)
- [アクセス制限設定の追加](baser-core/permissions/add)
- [アクセス制限設定の編集](baser-core/permissions/edit)
- [アクセス制限設定の削除](baser-core/permissions/delete)
- [アクセス制限設定のコピー](baser-core/permissions/copy)
- [アクセス制限設定の一括処理](baser-core/permissions/batch)
- [アクセス制限設定の並び替え](baser-core/permissions/update_sort)

### アクセスルールグループ
- [アクセスルールグループ一覧の取得](baser-core/permission_groups/index)
- [アクセスルールグループの取得](baser-core/permission_groups/view)
- [アクセスルールグループの追加](baser-core/permission_groups/add)
- [アクセスルールグループの編集](baser-core/permission_groups/edit)
- [アクセスルールグループの削除](baser-core/permission_groups/delete)
- [アクセスルールグループのリスト](baser-core/permission_groups/list)
- [アクセスルールグループの再構築](baser-core/permission_groups/rebuild_by_user_group)

### プラグイン管理
- [プラグイン一覧の取得](baser-core/plugins/index)
- [単一プラグインの取得](baser-core/plugins/view)
- [プラグインの追加](baser-core/plugins/add)
- [プラグインの有効化](baser-core/plugins/attach)
- [プラグインの無効化](baser-core/plugins/detach)
- [プラグイン管理の一括処理](baser-core/plugins/batch)
- [プラグイン管理のbaserマーケット](baser-core/plugins/get_market_plugins)
- [プラグインのインストール](baser-core/plugins/install)
- [プラグインのアンインストール](baser-core/plugins/uninstall)
- [プラグインのデータベースの初期化](baser-core/plugins/reset_db)
- [プラグイン管理の並び替え](baser-core/plugins/update_sort)
- [取得可能なコアのバージョン情報の取得](baser-core/plugins/get_available_core_version_info)

### サイト基本設定
- [メールの送信テスト実行](baser-core/site_configs/check_sendmail)
- [システム基本設定の取得](baser-core/site_configs/view)
- [システム基本設定の編集](baser-core/site_configs/edit)

### サイト管理
- [サイト一覧の取得](baser-core/sites/index)
- [単一サイトの取得](baser-core/sites/view)
- [サイトの新規追加](baser-core/sites/add)
- [サイトの編集](baser-core/sites/edit)
- [サイトの削除](baser-core/sites/delete)
- [選択可能なデバイスと言語の一覧を取得](baser-core/sites/get_selectable_devices_and_lang)

### テーマ管理
- [テーマ一覧の習得](baser-core/themes/index)
- [単一テーマ情報の取得](baser-core/themes/view)
- [新しいテーマのアップロード](baser-core/themes/add)
- [テーマの適用](baser-core/themes/apply)
- [初期データの読み込む](baser-core/themes/load_default_data)
- [テーマのコピー](baser-core/themes/copy)
- [テーマの削除](baser-core/themes/delete)
- [baserマーケットよりテーマの一覧の取得](baser-core/themes/get_market_themes)

## ブログ
### ブログ記事
- [ブログ記事一覧の取得](bc-blog/blog_posts/index)
