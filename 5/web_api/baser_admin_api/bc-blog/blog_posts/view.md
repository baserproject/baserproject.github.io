# ブログ記事の単一取得

指定したブログ記事を取得します。

### 実行可能な権限
```
全ての権限  
ただし、認証なし場合は、status が publish の記事のみ取得可とする。
```

### URL
```
認証なし場合、
GET /baser/api/bc-blog/blog_posts/{blogPostId}.json
認証した場合、
GET /baser/api/admin/bc-blog/blog_posts/{blogPostId}.json
``` 

### パスパラメーター

| パラメーター名         | 型   | 内容       |
|-----------------|-----|----------|
| blogPostId | 数値  |ブログ記事のID |

### レスポンス例
#### レスポンスボディ
```json
{
  "blogPost": {
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
    "blog_tags": [
    ],
    "blog_category": {
      "id": 1,
      "blog_content_id": 1,
      "no": 1,
      "name": "release",
      "title": "プレスリリース",
      "status": true,
      "parent_id": null,
      "lft": 1,
      "rght": 2,
      "created": "2023-03-29T21:50:36+09:00",
      "modified": null
    },
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
        "modified": "2023-03-29T21:50:55+09:00",
        "site": {
          "id": 1,
          "main_site_id": null,
          "name": "",
          "display_name": "My Site",
          "title": "My Site",
          "alias": "",
          "theme": "BcFront",
          "status": true,
          "keyword": "",
          "description": "",
          "use_subdomain": false,
          "relate_main_site": false,
          "device": "",
          "lang": "",
          "same_main_url": false,
          "auto_redirect": false,
          "auto_link": false,
          "domain_type": null,
          "created": "2023-03-29T21:50:36+09:00",
          "modified": "2023-03-29T21:50:54+09:00"
        }
      }
    }
  },
  "message": null
}

```
