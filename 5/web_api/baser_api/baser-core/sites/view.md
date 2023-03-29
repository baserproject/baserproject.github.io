# サイトの取得

サイト情報を取得します。

### 実行可能な権限
```
システム管理者以上
```

### リクエスト
```
GET /baser/api/baser-core/sites/{siteId}.json
``` 

### パスパラメーター

| パラメーター名   | 型   | 必須  | 内容    |
|-----------|-----|-----|-------|
| siteId        | 数値  | ●   | サイトID |

### レスポンス例
#### レスポンスボディ
```json
{
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
    "modified": "2023-03-29T09:47:02+09:00"
  },
  "message": null
}

```
