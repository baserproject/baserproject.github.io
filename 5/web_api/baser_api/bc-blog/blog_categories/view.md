# ブログカテゴリ単一取得の取得

指定したブログカテゴリを取得します。

### 実行可能な権限
```
すべてのユーザー：公開された情報のみ
```

### URL
```
GET /baser/api/bc-blog/blog_categories/{blogCategoryId}.json
``` 

### クエリパラメーター

| パラメーター名 | 型 | 内容 |
| --- | --- | --- |
| blogCategoryId | 数値 | ブログカテゴリID |

### レスポンス例
#### レスポンスボディ
```json
{
  "blogCategory": {
    "id": 2,
    "blog_content_id": 1,
    "no": 2,
    "name": "blog-category-add",
    "title": "test title",
    "status": null,
    "parent_id": null,
    "lft": 3,
    "rght": 4,
    "created": "2023-03-30T15:10:35+09:00",
    "modified": "2023-03-30T15:10:35+09:00",
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
  },
  "message": null
}

```
