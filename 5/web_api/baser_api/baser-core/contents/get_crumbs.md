# パンくず用のコンテンツ一覧の取得

グローバルナビ用のコンテンツ一覧を取得します。

### 実行可能な権限
```
すべてのユーザー：公開された情報のみ
```

### リクエスト
```
GET /baser/api/baser-core/contents/get_crumbs/{contentId}.json
```
### パスパラメーター

| パラメーター名         | 型   | 内容            |
|-----------------|-----|---------------|
| contentId | 数値  | コンテンツのID |

### レスポンス例
#### レスポンスボディ
```json
{
  "contents": [
    {
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
      "rght": 38,
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
      "created_date": "2023-03-29T21:50:55+09:00",
      "modified_date": null,
      "site_root": true,
      "deleted_date": null,
      "exclude_menu": false,
      "blank_link": false,
      "created": "2023-03-29T21:50:36+09:00",
      "modified": "2023-04-04T16:34:21+09:00"
    }
  ],
  "message": null
}
```
