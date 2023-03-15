# Web API ドキュメント

（現在、鋭意準備中です。 [ドキュメント準備予定のAPI一覧](https://docs.google.com/spreadsheets/d/1YT5PuZQdDNU0wrZdqYbh74KuLSw1SIt4_EKwPWOfDKA/edit#gid=1129992221) ）

## 権限の定義
- スーパーユーザー：インストール時に一番最初に作ったユーザー
- システム管理者：システム管理グループのユーザー
- ログインユーザー：システム管理グループ以外のユーザー  
  （グループごとにアクセスルールで制限されます）
- 全て：非ログインユーザーも含む全てのユーザー

## コア
### ユーザー
- [ログイン](baser-core/users/login)
- [リフレッシュトークンの取得](baser-core/users/refresh_token)
- [ユーザー一覧の取得](baser-core/users/index)
- [ユーザー情報の取得](baser-core/users/view)
- [ユーザーの追加](baser-core/users/add)
- [ユーザーの編集](baser-core/users/edit)
- [ユーザーの削除](baser-core/users/delete)

### コンテンツフォルダ
- [コンテンツフォルダの追加](baser_core/content_folders/add)

## ブログ
### ブログ記事
- [ブログ記事一覧の取得](bc-blog/blog_posts/index)
