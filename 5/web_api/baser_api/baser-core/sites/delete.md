# サイトの削除

指定したサイト情報を削除します。

### 実行可能な権限
```
システム管理者以上
```

### リクエスト
```
DELETE baser/api/baser-core/sites/{siteId}.json
``` 

### パスパラメーター

| パラメーター名   | 型   | 必須  | 内容                |
|-----------|-----|-----|-------------------|
| siteId        | 数値  | ●   | サイトID              |

### レスポンス例
#### レスポンスボディ
```json
{
  "site": {
    "id": 3,
    "main_site_id": 1,
    "name": "name2",
    "display_name": "display_name",
    "title": "title site",
    "alias": "alias2",
    "theme": null,
    "status": null,
    "keyword": null,
    "description": null,
    "use_subdomain": false,
    "relate_main_site": null,
    "device": null,
    "lang": null,
    "same_main_url": false,
    "auto_redirect": false,
    "auto_link": false,
    "domain_type": 0,
    "created": "2023-03-29T12:08:50+09:00",
    "modified": "2023-03-29T12:08:50+09:00"
  },
  "message": "サイト: name2 を削除しました。"
}

```
