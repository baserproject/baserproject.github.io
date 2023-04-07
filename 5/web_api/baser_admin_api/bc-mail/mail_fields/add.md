# メールフィールドの新規追加

新しいメールフィールドを追加します。追加の際、メッセージテーブルのフィールドも追加します。

## 実行に必要な権限

```
システム管理者以上
```

## リクエスト
```
POST /baser/api/admin/bc-mail/mail_fields.json
```

### リクエストボディ

| パラメーター名   | 型   | 必須  | 内容         |
|-----------|-----|-----|------------|
| mail_content_id   | 数値  | ●   | メールコンテンツID |
| field_name   | 文字列 | ●   | フィールド名 |
| no   | 数値 | 　   | No         |
| name   | 文字列 | 　   | 送信先メールアドレス |
| field_name   | 文字列 | 　   | 項目名        |
| type   | 文字列 | 　   | タイプ        |
| head   | 文字列 | 　   | 項目見出し      |
| attention   | 文字列 | 　   | 必須マーク      |
| before_attachment   | 文字列 | 　   | 前見出し       |
| after_attachment   | 文字列 | 　   | 後見出し       |
| source   | 文字列 | 　   | 選択リスト      |
| size   | 数値 | 　   | 表示サイズ      |
| text_rows   | 数値 | 　   | 行数         |
| maxlength   | 数値 | 　   | 最大文字数      |
| options   | 文字列 | 　   | オプション      |
| class   | 文字列 | 　   | クラス名       |
| separator   | 文字列 | 　   | セパレーター     |
| default_value   | 文字列 | 　   | 初期値        |
| description   | 文字列 | 　   | 説明文        |
| group_field   | 文字列 | 　   | グループ名      |
| group_valid   | 文字列 | 　   | グループ入力チェック |
| valid   | 文字列 | 　   | 入力必須       |
| valid_ex   | 文字列 | 　   | 入力チェック     |
| auto_convert   | 文字列 | 　   | 自動変換       |
| not_empty   | 真偽値 | 　   | 必須マーク      |
| use_field   | 真偽値 | 　   | 利用状態       |
| no_send   | 真偽値 | 　   | メール送信      |
| sort   | 数値 | 　   | 送信先メールアドレス |

## レスポンス例

### レスポンスボディ

```json
{
  "mailField": {
    "mail_content_id": 1,
    "field_name": "last_name",
    "type": "text",
    "name": "性",
    "head": "お名前",
    "no": 21,
    "sort": 20,
    "source": "",
    "created": "2023-04-04T11:29:15+09:00",
    "modified": "2023-04-04T11:29:15+09:00",
    "id": 33
  },
  "message": "新規メールフィールド「性」を追加しました。",
  "errors": null
}

```
