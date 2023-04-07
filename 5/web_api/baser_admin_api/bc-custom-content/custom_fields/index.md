# カスタムフィールドの一覧取得

カスタムフィールドの一覧を取得します。

## 実行に必要な権限

```
システム管理者以上
```

## リクエスト
```
GET /baser/api/admin/bc-custom-content/custom_fields.json
```

### クエリパラメーター

| パラメーター名   | 型   | 必須  | 内容                     |
|-----------|-----|-----|------------------------|
| status            | 文字列 |  | publish：公開のみ<br>all：全て |

## レスポンス例

### レスポンスボディ

```json
{
  "customFields": [
    {
      "id": 8,
      "name": "recruit_category",
      "title": "求人分類",
      "type": "BcCcRelated",
      "status": true,
      "default_value": "新卒採用",
      "validate": "",
      "regex": "",
      "regex_error_message": "",
      "counter": false,
      "auto_convert": "",
      "placeholder": "",
      "size": null,
      "line": null,
      "max_length": null,
      "source": "",
      "meta": {
        "BcCcAutoZip": {
          "pref": "",
          "address": ""
        },
        "BcCcCheckbox": {
          "label": ""
        },
        "BcCcRelated": {
          "custom_table_id": "1",
          "filter_name": "",
          "filter_value": ""
        },
        "BcCcWysiwyg": {
          "width": "",
          "height": "",
          "editor_tool_type": "simple"
        },
        "BcCustomContent": {
          "email_confirm": "",
          "max_file_size": "",
          "file_ext": ""
        }
      },
      "created": null,
      "modified": null
    },
    ...
  ]
}
```
