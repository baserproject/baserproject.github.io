# カスタムフィールドの単一取得

指定したカスタムフィールド情報を取得します。

## 実行に必要な権限

```
システム管理者以上
```

## リクエスト
```
GET /baser/api/admin/bc-custom-content/custom_fields/{customFieldID}.json
```

### パスパラメーター

| パラメーター名   | 型   | 必須  | 内容                             |
|-----------|-----|-----|--------------------------------|
| customFieldID   | 文字列 | ●   | カスタムフィールドID                    |

## レスポンス例

### レスポンスボディ

```json
{
  "message": null,
  "customField": {
    "id": 33,
    "name": "textarea_midium",
    "title": "テキストエリア（中）",
    "type": "BcCcTextarea",
    "status": true,
    "default_value": "",
    "validate": "",
    "regex": "",
    "regex_error_message": "",
    "counter": false,
    "auto_convert": "",
    "placeholder": "",
    "size": null,
    "line": 6,
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
  }
}
```
