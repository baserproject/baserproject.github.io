# 関連フィールドの単一取得

指定した関連フィールドを取得します。

## 実行に必要な権限

```
すべてのユーザー：公開された情報のみ
```

## リクエスト
```
GET baser/api/bc-custom-content/custom_links/{customLinkId}.json
```

### パスパラメーター

| パラメーター名   | 型   | 必須  | 内容                             |
|-----------|-----|-----|--------------------------------|
| customLinkId   | 文字列 | ●   | 関連フィールドID                    |


## レスポンス例

### レスポンスボディ

```json
{
  "customLinks": [
    {
      "id": 152,
      "custom_table_id": 5,
      "custom_field_id": 1,
      "no": null,
      "parent_id": null,
      "level": 0,
      "lft": 1,
      "rght": 2,
      "name": "address",
      "title": "住所",
      "before_head": null,
      "after_head": null,
      "description": null,
      "attention": null,
      "options": null,
      "class": null,
      "group_valid": false,
      "before_linefeed": false,
      "after_linefeed": false,
      "use_loop": false,
      "display_admin_list": null,
      "display_front": null,
      "search_target_admin": null,
      "search_target_front": null,
      "use_api": null,
      "required": null,
      "status": null,
      "created": "2023-04-06T20:29:13+09:00",
      "modified": "2023-04-06T20:31:03+09:00",
      "children": [
      ]
    }
  ]
}
```
