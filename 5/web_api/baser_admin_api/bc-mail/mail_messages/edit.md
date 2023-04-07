# メールメッセージの新規追加

新しいメールメッセージを作成します。

## 実行に必要な権限

```
システム管理者以上
```

## リクエスト
```
PATCH /baser/api/admin/bc-mail/mail_messages.json
```

### クエリパラメーター

| パラメーター名   | 型   | 必須  | 内容          |
|-----------|-----|-----|-------------|
| mail_content_id        | 数値  | ●   | メールコンテンツのID |

### リクエストボディ

| パラメーター名   | 型   | 必須  | 内容          |
|-----------|-----|-----|-------------|
| メールフィールドに連動してカラム        |     |     |             |



## レスポンス例

### レスポンスボディ

```json
{
  "mailMessage": {
    "id": 3,
    "modified": "2023-04-04T14:10:47+09:00",
    "created": "2023-04-04T14:10:47+09:00",
    "name_1": "安藤",
    "name_2": "富士",
    "sex": null,
    "email_1": null,
    "email_2": null,
    "tel": null,
    "zip": null,
    "address_1": null,
    "address_2": null,
    "address_3": null,
    "category": null,
    "message": null,
    "root": null,
    "name": null,
    "first_name": null,
    "name_1_copy": null
  },
  "message": "コンテンツタイトル への受信データ NO「3」を更新しました。",
  "errors": null
}
```
