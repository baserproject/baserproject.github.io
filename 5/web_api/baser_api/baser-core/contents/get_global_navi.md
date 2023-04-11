# グローバルナビ用のコンテンツ一覧の取得

グローバルナビ用のコンテンツ一覧を取得します。

### 実行可能な権限
```
すべてのユーザー：公開された情報のみ
```

### リクエスト
```
GET /baser/api/baser-core/contents/get_global_navi/{contentId}.json
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
      "id": 4,
      "name": "index",
      "plugin": "BaserCore",
      "type": "Page",
      "entity_id": 1,
      "url": "/index",
      "site_id": 1,
      "alias_id": null,
      "main_site_content_id": null,
      "parent_id": 1,
      "lft": 2,
      "rght": 3,
      "level": 1,
      "title": "トップページ",
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
      "modified": "2023-04-04T16:34:21+09:00"
    },
    ...
  ],
  "message": null
}
```
