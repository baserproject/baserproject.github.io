# ブログコンテンツの削除

指定したブログコンテンツを削除します。

### 実行可能な権限
```
システム管理者以上
```

### リクエスト
```
DELETE baser/api/bc-blog/blog_contents/{blogContentId}.json
``` 

### パスパラメーター

| パラメーター名   | 型   | 必須  | 内容                |
|-----------|-----|-----|-------------------|
| blogContentId        | 数値  | ●   |ブログコンテンツのID              |

### レスポンス例
#### レスポンスボディ
```json
{
  "blogContent": {
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
    "created": "2023-03-29T16:37:42+09:00",
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
      "created_date": null,
      "modified_date": null,
      "site_root": false,
      "deleted_date": null,
      "exclude_menu": false,
      "blank_link": false,
      "created": "2023-03-29T16:37:41+09:00",
      "modified": "2023-03-29T18:11:56+09:00",
      "site": {
        "id": 1,
        "main_site_id": null,
        "name": "",
        "display_name": "メインサイト",
        "title": "メインサイト",
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
        "created": "2023-03-29T16:37:42+09:00",
        "modified": "2023-03-29T16:37:44+09:00"
      }
    }
  },
  "message": "ブログコンテンツ「<p>このコンテンツはブログ機能により作られており、この文章については管理画面の [NEWS] &rarr; [設定] より更新ができます。また、ブログは [コンテンツ管理] よりいくつでも作成することができます。</p>」を削除しました。"
}

```
