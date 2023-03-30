# ブログ記事の編集

指定したブログ記事情報を編集します。

### 実行可能な権限
```
システム管理者以上
```

### リクエスト
```
PATCH /baser/api/bc-blog/blog_posts/{blogPostId}.json
``` 

### パスパラメーター

| パラメーター名   | 型   | 必須  | 内容                |
|-----------|-----|-----|-------------------|
| blogPostId        | 数値  | ●   | ブログ記事ID              |

### リクエストボディ

| パラメーター名   | 型   | 必須  | 内容                |
|-----------|-----|-----|-------------------|
| title   | 文字列 |  ●   | タイトル  |
| no   | 数値 |     | No  |
| name   | 文字列 |     | スラッグ  |
| content   | 文字列 |     | 概要  |
| detail   | 文字列 |     | 本文  |
| blog_category_id   | 数値 |     | ブログカテゴリー  |
| user_id   | 数値 |     | 作成者   |
| status   | 真偽値 |     | 公開状態  |
| posted   | 文字列 |     | 作成日  |
| content_draft   | 文字列 |     | 概要草稿  |
| detail_draft   | 文字列 |     | ブログコ本文草稿ンテンツID  |
| publish_begin   | 文字列 |     | 公開開始日  |
| publish_end   | 文字列 |     | 公開終了日  |
| exclude_search   | 検索除外設定 |     | 検索除外設定  |
| eye_catch   | 文字列 |     | アイキャッチ画像  |

### レスポンス例
#### レスポンスボディ
```json
{
  "blogPost": {
    "id": 5,
    "blog_content_id": 1,
    "no": 5,
    "name": "API  test name",
    "title": "title edit api",
    "content": "概要文",
    "detail": null,
    "blog_category_id": null,
    "user_id": null,
    "status": true,
    "posted": null,
    "content_draft": null,
    "detail_draft": null,
    "publish_begin": null,
    "publish_end": null,
    "exclude_search": null,
    "eye_catch": null,
    "created": "2023-03-30T13:04:36+09:00",
    "modified": "2023-03-30T14:08:31+09:00",
    "blog_tags": [
    ],
    "blog_category": null,
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
  "message": "記事「title edit api」を更新しました。",
  "errors": null
}

```
