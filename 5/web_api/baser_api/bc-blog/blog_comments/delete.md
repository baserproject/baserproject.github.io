# ブログコメントの削除

指定したブログコメントを削除します。

### 実行可能な権限
```
システム管理者以上
```

### リクエスト
```
DELETE /baser/api/admin/bc-blog/blog_comments/{blogCommentId}.json
``` 

### パスパラメーター

| パラメーター名   | 型   | 必須  | 内容                |
|-----------|-----|-----|-------------------|
| blogCommentId        | 数値  | ●   | ブログコメントID              |

### レスポンス例
#### レスポンスボディ
```json
{
  "blogComment": {
    "id": 1,
    "blog_content_id": 1,
    "blog_post_id": 1,
    "no": 4,
    "status": true,
    "name": "ベトナムくん",
    "email": "",
    "url": "",
    "message": "最高！",
    "created": "2023-03-30T19:30:51+09:00",
    "modified": "2023-03-30T19:30:51+09:00",
    "blog_post": {
      "id": 1,
      "blog_content_id": 1,
      "no": 1,
      "name": "",
      "title": "メールフォーム機能について説明します",
      "content": "",
      "detail": "<p>baserCMSのメールフォームでは、管理画面上にて入力項目を自由に変更することができ、受信したメールを管理画面で閲覧することができます。</p>\n\n<h3>入力項目の変更</h3>\n\n<p>メールフォームの各入力項目をフィールドと呼びます。フィールドを削除したり新しく追加するには、まず、管理画面より、[お問い合わせ] &rarr; [フィールド] と移動し、登録されているフィールドを確認しましょう。その画面よりフィールドの新規登録や変更、削除が行えます。</p>\n\n<h3>受信メールの確認</h3>\n\n<p>管理画面より、[お問い合わせ] &rarr; [受信メール] と移動すると、受信したメールを一覧で確認できます。データベースに受信したメールを保存しない場合は、[お問い合わせ] &rarr; [設定] &rarr; [詳細設定] より、[送信情報をデータベースに保存しない] にチェックを入れて保存します。</p>",
      "blog_category_id": 1,
      "user_id": 1,
      "status": true,
      "posted": null,
      "content_draft": "",
      "detail_draft": "",
      "publish_begin": null,
      "publish_end": null,
      "exclude_search": false,
      "eye_catch": "2023/02/00000001_eye_catch.jpg",
      "created": "2023-03-29T21:50:36+09:00",
      "modified": null,
      "blog_content": {
        "id": 1,
        "description": "<p>このコンテンツはブログ機能により作られており、この文章については管理画面の [NEWS] &rarr; [設定] より更新ができます。また、ブログは [コンテンツ管理] よりいくつでも作成することができます。</p>",
        "template": "default",
        "list_count": 10,
        "list_direction": "DESC",
        "feed_count": 10,
        "tag_use": true,
        "comment_use": true,
        "comment_approve": false,
        "auth_captcha": true,
        "widget_area": 2,
        "eye_catch_size": "YTo0OntzOjExOiJ0aHVtYl93aWR0aCI7czozOiIzMDAiO3M6MTI6InRodW1iX2hlaWdodCI7czozOiIzMDAiO3M6MTg6Im1vYmlsZV90aHVtYl93aWR0aCI7czozOiIxMDAiO3M6MTk6Im1vYmlsZV90aHVtYl9oZWlnaHQiO3M6MzoiMTAwIjt9",
        "use_content": true,
        "created": "2023-03-29T21:50:36+09:00",
        "modified": null,
        "content": {
          "id": 10,
          "name": "news",
          "plugin": "BcBlog",
          "type": "BlogContent",
          "entity_id": 1,
          "url": "/news/",
          "site_id": 1,
          "alias_id": null,
          "main_site_content_id": null,
          "parent_id": 1,
          "lft": 4,
          "rght": 5,
          "level": 1,
          "title": "NEWS",
          "description": "",
          "eyecatch": "",
          "author_id": 1,
          "layout_template": "",
          "status": true,
          "publish_begin": null,
          "publish_end": null,
          "self_status": true,
          "self_publish_begin": null,
          "self_publish_end": null,
          "exclude_search": false,
          "created_date": "2023-03-29T21:50:55+09:00",
          "modified_date": null,
          "site_root": false,
          "deleted_date": null,
          "exclude_menu": false,
          "blank_link": false,
          "created": "2023-03-29T21:50:36+09:00",
          "modified": "2023-03-29T21:50:55+09:00"
        }
      }
    }
  },
  "message": "ブログコメント「4」を削除しました。"
}


```
