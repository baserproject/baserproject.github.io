# 固定ページの削除

指定した固定ページ情報を削除します。

### 実行可能な権限
```
システム管理者以上
```

### リクエスト
```
DELETE baser/api/baser-core/pages/{pageId}.json
``` 

### パスパラメーター

| パラメーター名   | 型   | 必須  | 内容                |
|-----------|-----|-----|-------------------|
| pageId        | 数値  | ●   | 固定ページのID              |

### レスポンス例
#### レスポンスボディ
```json
{
  "page": {
    "id": 18,
    "contents": null,
    "draft": null,
    "page_template": null,
    "modified": "2023-03-28T12:16:34+09:00",
    "created": "2023-03-28T12:16:34+09:00",
    "content": {
      "id": 24,
      "name": "%E6%9C%AC%E6%96%87",
      "plugin": "BaserCore",
      "type": "Page",
      "entity_id": 18,
      "url": "/%E6%9C%AC%E6%96%87",
      "site_id": 1,
      "alias_id": null,
      "main_site_content_id": null,
      "parent_id": 1,
      "lft": 40,
      "rght": 41,
      "level": 1,
      "title": "新しい page",
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
      "created_date": "2023-03-28T12:16:34+09:00",
      "modified_date": null,
      "site_root": false,
      "deleted_date": null,
      "exclude_menu": false,
      "blank_link": false,
      "created": "2023-03-28T12:16:34+09:00",
      "modified": "2023-03-28T12:16:34+09:00",
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
        "created": "2023-03-13T12:36:40+09:00",
        "modified": "2023-03-13T12:36:41+09:00"
      }
    }
  },
  "content": {
    "id": 24,
    "name": "%E6%9C%AC%E6%96%87",
    "plugin": "BaserCore",
    "type": "Page",
    "entity_id": 18,
    "url": "/%E6%9C%AC%E6%96%87",
    "site_id": 1,
    "alias_id": null,
    "main_site_content_id": null,
    "parent_id": 1,
    "lft": 40,
    "rght": 41,
    "level": 1,
    "title": "新しい page",
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
    "created_date": "2023-03-28T12:16:34+09:00",
    "modified_date": null,
    "site_root": false,
    "deleted_date": null,
    "exclude_menu": false,
    "blank_link": false,
    "created": "2023-03-28T12:16:34+09:00",
    "modified": "2023-03-28T12:16:34+09:00",
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
      "created": "2023-03-13T12:36:40+09:00",
      "modified": "2023-03-13T12:36:41+09:00"
    }
  },
  "message": "固定ページ: 新しい page をゴミ箱に移動しました。"
}
```
