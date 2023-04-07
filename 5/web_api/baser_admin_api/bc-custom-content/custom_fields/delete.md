# カスタムフィールドの削除

カスタムフィールドを削除します。

## 実行に必要な権限

```
システム管理者以上
```

## リクエスト
```
DELETE /baser/api/admin/bc-custom-content/custom_fields/{customFieldID}.json
```

### パスパラメーター

| パラメーター名   | 型   | 必須  | 内容                             |
|-----------|-----|-----|--------------------------------|
| customFieldID   | 文字列 | ●   | カスタムフィールドID                    |

## レスポンス例

### レスポンスボディ

```json
{
  "customField": {
    "id": 43,
    "name": "ranking",
    "title": "ランキング",
    "type": null,
    "status": true,
    "default_value": null,
    "validate": null,
    "regex": null,
    "regex_error_message": null,
    "counter": null,
    "auto_convert": null,
    "placeholder": null,
    "size": null,
    "line": null,
    "max_length": false,
    "source": null,
    "meta": null,
    "created": "2023-04-06T15:43:21+09:00",
    "modified": "2023-04-06T15:43:21+09:00"
  },
  "message": "フィールド「ランキング」を削除しました。"
}
```
