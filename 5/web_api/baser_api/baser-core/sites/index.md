# サイト一覧の取得

サイト情報の一覧を取得します。

### 実行可能な権限
```
システム管理者以上
```

### リクエスト
```
GET /baser/api/admin/baser-core/sites.json
``` 

### クエリパラメーター

| パラメーター名           | 型 | 内容                                       |
|-------------------| --- |------------------------------------------|
| status            | 文字列 | publish：公開されたコンテンツフォルダーのみ<br>all：全て |
| limit             | 数値 | 取得件数                                     |
| name              | 数値 | サイト名称（あいまい検索）                                |

### レスポンス例
#### レスポンスボディ
```json
{
  "sites": [
    {
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
    ...
  ]
}

```
