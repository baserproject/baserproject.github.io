# ブログコンテンツの単一取得

指定したブログコンテンツを取得します。

### 実行可能な権限
```
すべてのユーザー：公開された情報のみ
```

### リクエスト
```
GET baser/api/bc-blog/blog_contents/{blogContentId}.json
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
    "widget_area": 2,
    "eye_catch_size": "YTo0OntzOjExOiJ0aHVtYl93aWR0aCI7czozOiIzMDAiO3M6MTI6InRodW1iX2hlaWdodCI7czozOiIzMDAiO3M6MTg6Im1vYmlsZV90aHVtYl93aWR0aCI7czozOiIxMDAiO3M6MTk6Im1vYmlsZV90aHVtYl9oZWlnaHQiO3M6MzoiMTAwIjt9",
    "use_content": true,
    "created": "2023-04-14T15:29:19+09:00",
    "modified": null,
    "auth_captcha": true,
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
      "created_date": "2023-04-14T15:29:36+09:00",
      "modified_date": null,
      "site_root": false,
      "deleted_date": null,
      "exclude_menu": false,
      "blank_link": false,
      "created": "2023-04-14T15:29:19+09:00",
      "modified": "2023-04-14T15:29:36+09:00",
      "site": {
        "id": 1,
        "main_site_id": null,
        "name": "",
        "display_name": "My Site",
        "title": "My Site",
        "alias": "",
        "theme": "BcThemeSample",
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
        "created": "2023-04-14T15:29:19+09:00",
        "modified": "2023-04-14T15:29:35+09:00"
      }
    }
  },
  "message": null
}
```
