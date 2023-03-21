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

## ブログ
### ブログ記事
- [ブログ記事一覧の取得](bc-blog/blog_posts/index)
