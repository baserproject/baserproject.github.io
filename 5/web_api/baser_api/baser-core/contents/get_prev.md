# 前のコンテンツの取得

前のコンテンツを取得します。

### 実行可能な権限
```
すべてのユーザー：公開された情報のみ
```

### リクエスト
```
GET /baser/api/baser-core/contents/get_prev/{contentId}.json
```
### パスパラメーター

| パラメーター名         | 型   | 内容            |
|-----------------|-----|---------------|
| contentId | 数値  | コンテンツのID |

### レスポンス例
#### レスポンスボディ
```json
{
  "content": {
    "id": 1,
    "name": "",
    "plugin": "BaserCore",
    "type": "ContentFolder",
    "entity_id": 1,
    "url": "/",
    "site_id": 1,
    "alias_id": null,
    "main_site_content_id": null,
    "parent_id": null,
    "lft": 1,
    "rght": 34,
    "level": null,
    "title": "baserCMSサンプル",
    "description": "",
    "eyecatch": "",
    "author_id": 1,
    "layout_template": "default",
    "status": true,
    "publish_begin": null,
    "publish_end": null,
    "self_status": true,
    "self_publish_begin": null,
    "self_publish_end": null,
    "exclude_search": false,
    "created_date": "2023-03-15T07:09:19+09:00",
    "modified_date": null,
    "site_root": true,
    "deleted_date": null,
    "exclude_menu": false,
    "blank_link": false,
    "created": null,
    "modified": "2023-03-15T07:09:19+09:00",
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
      "created": "2023-03-15T07:09:00+09:00",
      "modified": "2023-03-15T07:09:18+09:00"
    }
  },
  "message": null
}

```
