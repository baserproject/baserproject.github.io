# 関連フィールドの一覧取得

関連フィールドの一覧を取得します。

## 実行に必要な権限

```
すべてのユーザー：公開された情報のみ
ログインユーザー以上：全て
```

## リクエスト
```
認証なし場合、
GET baser/api/bc-custom-content/custom_links.json
認証した場合、
GET baser/api/admin/bc-custom-content/custom_links.json
```

### クエリパラメーター

| パラメーター名   | 型   | 必須  | 内容                     |
|-----------|-----|-----|------------------------|
| custom_table_id            | 数値  | ● | カスタムテーブルID             |
| status            | 文字列 |  | publish：公開のみ<br>all：全て |

## レスポンス例

### レスポンスボディ

```json
{
  "message": null,
  "customLink": {
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
    "custom_table": {
      "id": 5,
      "type": "1",
      "name": "country",
      "title": "国",
      "display_field": "1",
      "has_child": true,
      "created": "2023-04-06T10:30:45+09:00",
      "modified": "2023-04-06T10:30:45+09:00",
      "custom_content": {
        "id": 3,
        "custom_table_id": 5,
        "description": "",
        "template": "default",
        "widget_area": null,
        "list_count": 10,
        "list_order": "id",
        "list_direction": "DESC",
        "created": "2023-04-06T10:52:36+09:00",
        "modified": "2023-04-06T11:22:01+09:00",
        "content": {
          "id": 32,
          "name": "%E3%83%AD%E3%82%B7%E3%82%A2%E3%81%AE%E3%81%93%E3%81%A8",
          "plugin": "BcCustomContent",
          "type": "CustomContent",
          "entity_id": 3,
          "url": "/%E3%83%AD%E3%82%B7%E3%82%A2%E3%81%AE%E3%81%93%E3%81%A8/",
          "site_id": 1,
          "alias_id": null,
          "main_site_content_id": null,
          "parent_id": 1,
          "lft": 32,
          "rght": 33,
          "level": 1,
          "title": "ロシア",
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
          "created_date": "2023-04-06T11:22:01+09:00",
          "modified_date": null,
          "site_root": false,
          "deleted_date": null,
          "exclude_menu": false,
          "blank_link": false,
          "created": "2023-04-06T10:52:36+09:00",
          "modified": "2023-04-06T11:22:01+09:00"
        }
      }
    },
    "custom_field": null
  }
}
```
