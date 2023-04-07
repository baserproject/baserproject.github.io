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
- [ユーザーグループ情報の取得](baser-core/user_groups/view)
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

### 検索インデックス
- [検索インデックス一覧の取得](bc-search-index/search_indexes/index)
- [検索インデックスの削除](bc-search-index/search_indexes/delete)
- [検索インデックスの優先度変更](bc-search-index/search_indexes/change_priority)
- [検索インデックスの再構築](bc-search-index/search_indexes/reconstruct)
- [検索インデックスの一括処理](bc-search-index/search_indexes/batch)

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
- [アクセスルールグループ情報の取得](baser-core/permission_groups/view)
- [アクセスルールグループの追加](baser-core/permission_groups/add)
- [アクセスルールグループの編集](baser-core/permission_groups/edit)
- [アクセスルールグループの削除](baser-core/permission_groups/delete)
- [アクセスルールグループのリスト](baser-core/permission_groups/list)
- [アクセスルールグループの再構築](baser-core/permission_groups/rebuild_by_user_group)

### プラグイン管理
- [プラグイン一覧の取得](baser-core/plugins/index)
- [プラグイン情報の取得](baser-core/plugins/view)
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
- [サイトの情報の取得](baser-core/sites/view)
- [サイトの新規追加](baser-core/sites/add)
- [サイトの編集](baser-core/sites/edit)
- [サイトの削除](baser-core/sites/delete)
- [選択可能なデバイスと言語の一覧を取得](baser-core/sites/get_selectable_devices_and_lang)

### テーマ管理
- [テーマ一覧の取得](baser-core/themes/index)
- [テーマ情報の取得](baser-core/themes/view)
- [新しいテーマのアップロード](baser-core/themes/add)
- [テーマの適用](baser-core/themes/apply)
- [初期データの読み込む](baser-core/themes/load_default_data)
- [テーマのコピー](baser-core/themes/copy)
- [テーマの削除](baser-core/themes/delete)
- [baserマーケットよりテーマの一覧の取得](baser-core/themes/get_market_themes)

### ユーティリティ
- [サーバーキャッシュを削除](baser-core/utilities/clear_cache)
- [コンテンツ管理のツリー構造をチェック](baser-core/utilities/verity_contents_tree)
- [コンテンツ管理のツリー構造をリセット](baser-core/utilities/reset_contents_tree)
- [バックアップダウンロード](baser-core/utilities/download_backup)
- [バックアップよりレストア](baser-core/utilities/restore_db)
- [ログファイルダウンロード](baser-core/utilities/download_log)
- [ログファイルを削除](baser-core/utilities/delete_log)
- [検索ボックスの表示状態を保存する](baser-core/utilities/save_search_opend)

## ブログ

### ブログコンテンツ
- [ブログコンテンツの一覧の取得](bc-blog/blog_contents/index)
- [ブログコンテンツ情報の取得](bc-blog/blog_contents/view)
- [ブログコンテンツのリストを取得](bc-blog/blog_contents/list)
- [ブログコンテンツの新規追加](bc-blog/blog_contents/add)
- [ブログコンテンツの編集](bc-blog/blog_contents/edit)
- [ブログコンテンツの削除](bc-blog/blog_contents/delete)
- [ブログコンテンツのコピー](bc-blog/blog_contents/copy)

### ブログ記事
- [ブログ記事一覧の取得](bc-blog/blog_posts/index)
- [ブログ記事情報の取得](bc-blog/blog_posts/view)
- [ブログ記事一覧の新規追加](bc-blog/blog_posts/add)
- [ブログ記事一覧の編集](bc-blog/blog_posts/edit)
- [ブログ記事一覧の削除](bc-blog/blog_posts/delete)
- [ブログ記事一覧のコピー](bc-blog/blog_posts/copy)
- [ブログ記事一覧の公開状態に設定](bc-blog/blog_posts/publish)
- [ブログ記事一覧の非公開状態に設定](bc-blog/blog_posts/unpublish)
- [ブログ記事一覧の一括処理](bc-blog/blog_posts/batch)

### ブログカテゴリ
- [ブログカテゴリの一覧の取得](bc-blog/blog_categories/index)
- [ブログカテゴリ情報の取得](bc-blog/blog_categories/view)
- [ブログカテゴリのリストを取得](bc-blog/blog_categories/list)
- [ブログカテゴリの新規追加](bc-blog/blog_categories/add)
- [ブログカテゴリの編集](bc-blog/blog_categories/edit)
- [ブログカテゴリの削除](bc-blog/blog_categories/delete)
- [ブログカテゴリの一括処理](bc-blog/blog_categories/batch)

### ブログタグ
- [ブログタグの一覧の取得](bc-blog/blog_tags/index)
- [ブログタグ情報の取得](bc-blog/blog_tags/view)
- [ブログタグの新規追加](bc-blog/blog_tags/add)
- [ブログタグの編集](bc-blog/blog_tags/edit)
- [ブログタグの削除](bc-blog/blog_tags/delete)
- [ブログタグの一括処理](bc-blog/blog_tags/batch)

### ブログコメント
- [ブログコメントの一覧取得](bc-blog/blog_comments/index)
- [ブログコメント情報の取得](bc-blog/blog_comments/view)
- [ブログコメントの新規追加](bc-blog/blog_comments/add)
- [ブログコメントの削除](bc-blog/blog_comments/delete)
- [ブログコメントの一括処理](bc-blog/blog_comments/batch)


## メールフォーム

### メールコンテンツ
- [メールコンテンツ一覧の取得](bc-mail/mail_contents/index)
- [メールコンテンツ情報の取得](bc-mail/mail_contents/view)
- [メールコンテンツのリストを取得](bc-mail/mail_contents/list)
- [メールコンテンツの新規追加](bc-mail/mail_contents/add)
- [メールコンテンツの編集](bc-mail/mail_contents/edit)
- [メールコンテンツの削除](bc-mail/mail_contents/delete)
- [メールコンテンツのコピー](bc-mail/mail_contents/copy)

### メールフィールド
- [メールフィールドの一覧取得](bc-mail/mail_fields/index)
- [メールフィールド情報の取得](bc-mail/mail_fields/view)
- [メールフィールドリストの取得](bc-mail/mail_fields/list)
- [メールフィールドの新規追加](bc-mail/mail_fields/add)
- [メールフィールドの編集](bc-mail/mail_fields/edit)
- [メールフィールドの削除](bc-mail/mail_fields/delete)
- [メールフィールドのコピー](bc-mail/mail_fields/copy)
- [メールフィールドの一括処理](bc-mail/mail_fields/batch)

### メールメッセージ
- [メールメッセージの一覧取得](bc-mail/mail_messages/index)
- [メールメッセージ情報の取得](bc-mail/mail_messages/view)
- [メールメッセージの新規追加](bc-mail/mail_messages/add)
- [メールメッセージの編集](bc-mail/mail_messages/edit)
- [メールメッセージの削除](bc-mail/mail_messages/delete)
- [メールメッセージの一括処理](bc-mail/mail_messages/batch)
- [メールメッセージのCSVダウンロード](bc-mail/mail_messages/download)

## ファイルアップローダー

### アップロードファイル管理
- [アップロードファイルの一覧取得](bc-uploader/uploader_files/index)
- [アップロードファイルの新規追加](bc-uploader/uploader_files/upload)
- [アップロードファイルの編集](bc-uploader/uploader_files/edit)
- [アップロードファイルの削除](bc-uploader/uploader_files/delete)

### アップロードファイルカテゴリ管理
- [アップロードカテゴリの一覧取得](bc-uploader/uploader_categories/index)
- [アップロードカテゴリの新規追加](bc-uploader/uploader_categories/add)
- [アップロードカテゴリの編集](bc-uploader/uploader_categories/edit)
- [アップロードカテゴリの削除](bc-uploader/uploader_categories/delete)
- [アップロードカテゴリのコピー](bc-uploader/uploader_categories/copy)
- [アップロードカテゴリの一括処理](bc-uploader/uploader_categories/batch)

### ファイルアップローダー設定
- [アップロードカテゴリの取得](bc-uploader/uploader_configs/view)
- [アップロードカテゴリの保存](bc-uploader/uploader_configs/edit)

## その他

### コンテンツリンク
- [コンテンツリンク情報の取得](bc-content-link/content_links/view)
- [コンテンツリンクの新規追加](bc-content-link/content_links/add)
- [コンテンツリンクの編集](bc-content-link/content_links/edit)
- [コンテンツリンクの削除](bc-content-link/content_links/delete)

### お気に入り
- [お気に入り一覧の取得](bc-favorite/favorites/index)
- [お気に入り情報の取得](bc-favorite/favorites/view)
- [お気に入りの新規追加](bc-favorite/favorites/add)
- [お気に入りの編集](bc-favorite/favorites/edit)
- [お気に入りの削除](bc-favorite/favorites/delete)
- [お気に入りの並び替え](bc-favorite/favorites/change_sort)
- [よく使う項目の表示状態を保存](bc-favorite/favorites/save_favorite_box)
- [よく使う項目の表示状態を取得](bc-favorite/favorites/get_favorite_box_opened)

### ウィジェットエリア
- [ウィジェットエリアの一覧取得](bc-widget-area/widget_areas/index)
- [ウィジェットエリア情報の取得](bc-widget-area/widget_areas/view)
- [ウィジェットエリアの新規追加](bc-widget-area/widget_areas/add)
- [ウィジェットエリアの編集](bc-widget-area/widget_areas/edit)
- [ウィジェットエリアの削除](bc-widget-area/widget_areas/delete)
- [ウィジェットエリアのリスト取得](bc-widget-area/widget_areas/list)
- [ウィジェットエリアの一括処理](bc-widget-area/widget_areas/batch)
- [ウィジェットエリア名の変更](bc-widget-area/widget_areas/update_title)
- [ウィジェットの並び替え](bc-widget-area/widget_areas/update_sort)
- [ウィジェットの更新](bc-widget-area/widget_areas/update_widget)
- [ウィジェットの削除](bc-widget-area/widget_areas/delete_widget)

### テーマファイル管理

#### テーマファイル

- [テーマファイルの新規追加](bc-theme-file/theme_files/add)
- [テーマファイルの編集](bc-theme-file/theme_files/edit)
- [テーマファイルの削除](bc-theme-file/theme_files/delete)
- [テーマファイルのコピー](bc-theme-file/theme_files/copy)
- [現在のテーマにファイルをコピー](bc-theme-file/theme_files/copy_to_theme)
- [テーマファイルのファイル表示](bc-theme-file/theme_files/view)
- [テーマファイルの画像表示](bc-theme-file/theme_files/img)
- [テーマファイルの画像のサムネイル表示](bc-theme-file/theme_files/img_thumb)
- [ファイルアップロード](bc-theme-file/theme_files/upload)

#### テーマフォルダー

- [テーマフォルダーの一覧取得](bc-theme-file/theme_folders/index)
- [テーマフォルダーの表示](bc-theme-file/theme_folders/view)
- [テーマフォルダーの新規追加](bc-theme-file/theme_folders/add)
- [テーマフォルダーの編集](bc-theme-file/theme_folders/edit)
- [テーマフォルダーの削除](bc-theme-file/theme_folders/delete)
- [テーマフォルダーのコピー](bc-theme-file/theme_folders/copy)
- [現在のテーマにフォルダをコピー](bc-theme-file/theme_folders/copy_to_theme)
- [テーマフォルダーの一括処理](bc-theme-file/theme_folders/batch)

### テーマ設定
- [テーマ設定の取得](bc-theme-config/theme_configs/view)
- [テーマ設定の保存](bc-theme-config/theme_configs/edit)

### エディタテンプレート管理

- [エディタテンプレートの一覧取得](bc-editor-template/editor_templates/index)
- [エディタテンプレートの表示](bc-editor-template/editor_templates/view)
- [エディタテンプレートの新規追加](bc-editor-template/editor_templates/add)
- [エディタテンプレートの編集](bc-editor-template/editor_templates/edit)
- [エディタテンプレートの削除](bc-editor-template/editor_templates/delete)
- [エディタテンプレートのリスト取得](bc-editor-template/editor_templates/list)

### カスタムコンテンツ

#### カスタムコンテンツ
- [カスタムコンテンツの一覧取得](bc-custom-content/custom_contents/index)
- [カスタムコンテンツ情報の取得](bc-custom-content/custom_contents/view)
- [カスタムコンテンツの新規追加](bc-custom-content/custom_contents/add)
- [カスタムコンテンツの編集](bc-custom-content/custom_contents/edit)
- [カスタムコンテンツの削除](bc-custom-content/custom_contents/delete)
- [カスタムコンテンツのリスト取得](bc-custom-content/custom_contents/list)

#### カスタムテーブル
- [カスタムテーブルの一覧取得](bc-custom-content/custom_tables/index)
- [カスタムテーブル情報の表示](bc-custom-content/custom_tables/view)
- [カスタムテーブルの新規追加](bc-custom-content/custom_tables/add)
- [カスタムテーブルの編集](bc-custom-content/custom_tables/edit)
- [カスタムテーブルの削除](bc-custom-content/custom_tables/delete)
- [カスタムテーブルのリスト取得](bc-custom-content/custom_tables/list)

#### 関連フィールド
- [関連フィールドの一覧取得](bc-custom-content/custom_links/index)
- [関連フィールド情報の表示](bc-custom-content/custom_links/view)
- [関連フィールドの新規追加](bc-custom-content/custom_links/add)
- [関連フィールドの編集](bc-custom-content/custom_links/edit)
- [関連フィールドの削除](bc-custom-content/custom_links/delete)

#### カスタムフィールド
- [カスタムフィールドの一覧取得](bc-custom-content/custom_fields/index)
- [カスタムフィールド情報の表示](bc-custom-content/custom_fields/view)
- [カスタムフィールドの新規追加](bc-custom-content/custom_fields/add)
- [カスタムフィールドの編集](bc-custom-content/custom_fields/edit)
- [カスタムフィールドの削除](bc-custom-content/custom_fields/delete)
- [カスタムフィールドのリスト取得](bc-custom-content/custom_fields/list)

#### カスタムエントリー
- [カスタムエントリーの一覧取得](bc-custom-content/custom_entries/index)
- [カスタムエントリー情報の表示](bc-custom-content/custom_entries/view)
- [カスタムエントリーの新規追加](bc-custom-content/custom_entries/add)
- [カスタムエントリーの編集](bc-custom-content/custom_entries/edit)
- [カスタムエントリーの削除](bc-custom-content/custom_entries/delete)
- [カスタムエントリーのリスト取得](bc-custom-content/custom_entries/list)