# カスタムフィールドの編集

指定したカスタムフィールドを編集します。

## 実行に必要な権限

```
システム管理者以上
```

## リクエスト
```
POST /baser/api/admin/bc-custom-content/custom_fields/{customFieldID}.json
```

### パスパラメーター

| パラメーター名   | 型   | 必須  | 内容                             |
|-----------|-----|-----|--------------------------------|
| customFieldID   | 文字列 | ●   | カスタムフィールドID                    |

### リクエストボディ

| パラメーター名   | 型   | 必須  | 内容         |
|-----------|-----|-----|------------|
| name   | 文字列 | ●   | カスタムフィールド名 |
| title   | 文字列 | ●   | タイトル       |
| type   | 数値 |     | タイプ        |
| status   | 真偽値 |     | 利用状況       |
| default_value   | 文字列 |     | 初期値        |
| validate   | 文字列 |     | バリデーション          |
| regex   | 文字列 |     | 正規表現によるバリデーション          |
| regex_error_message   | 文字列 |     | 正規表現によるバリデーションに失敗した場合のエラーメッセージ          |
| counter   | 真偽値 |     | 文字数カウンター利用有無          |
| auto_convert   | 文字列 |     | 自動変換          |
| placeholder   | 文字列 |     | プレースホルダー          |
| size   | 数値 |     | サイズ          |
| line   | 数値 |     | 行数          |
| max_length   | 数値 |     | 最大文字数          |
| source   | 数値 |     | データソース          |
| meta   | 数値 |     | メタ情報          |

## レスポンス例

### レスポンスボディ

```json
{
  "customField": {
    "id": 42,
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
    "created": "2023-04-06T15:38:44+09:00",
    "modified": "2023-04-06T16:35:06+09:00"
  },
  "message": "フィールド「ランキング」を更新しました。",
  "errors": null
}
```
