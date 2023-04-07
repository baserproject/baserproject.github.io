# カスタムフィールドの新規追加

新しいカスタムフィールドを追加します。

## 実行に必要な権限

```
システム管理者以上
```

## リクエスト
```
POST /baser/api/admin/bc-custom-content/custom_fields.json
```

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
  "message": "フィールド「文化」を追加しました。",
  "customField": {
    "title": "文化",
    "name": "culture",
    "status": true,
    "created": "2023-04-06T15:38:44+09:00",
    "modified": "2023-04-06T15:38:44+09:00",
    "id": 42
  },
  "errors": null
}
```
