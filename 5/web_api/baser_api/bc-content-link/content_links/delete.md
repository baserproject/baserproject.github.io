# コンテンツリンクの削除

指定したコンテンツリンクを削除します。

### 実行可能な権限
```
システム管理者以上
```

### リクエスト
```
DELETE baser/api/admin/bc-content-link/content_links/{contentLinkId}.json
``` 

### パスパラメーター

| パラメーター名   | 型   | 必須  | 内容               |
|-----------|-----|-----|------------------|
| contentLinkId        | 数値  | ●   |コンテンツリンクのID              |

### レスポンス例
#### レスポンスボディ
```json
{
  "message": "コンテンツリンク: api test を削除しました。",
  "contentLink": {
    "id": 1,
    "url": "/vn",
    "created": null,
    "modified": null,
    "content": {
      "id": 22,
      "name": "content_api",
      "plugin": "BcContentLink",
      "type": "ContentLink",
      "entity_id": 1,
      "url": "",
      "site_id": 1,
      "alias_id": null,
      "main_site_content_id": null,
      "parent_id": 0,
      "lft": 37,
      "rght": 38,
      "level": 0,
      "title": "api test",
      "description": null,
      "eyecatch": null,
      "author_id": 1,
      "layout_template": null,
      "status": false,
      "publish_begin": null,
      "publish_end": null,
      "self_status": false,
      "self_publish_begin": null,
      "self_publish_end": null,
      "exclude_search": false,
      "created_date": "2023-03-31T14:57:24+09:00",
      "modified_date": null,
      "site_root": false,
      "deleted_date": null,
      "exclude_menu": false,
      "blank_link": false,
      "created": "2023-03-31T14:57:24+09:00",
      "modified": "2023-03-31T14:57:24+09:00",
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
}
```
