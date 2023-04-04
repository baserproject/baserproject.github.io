# メールメッセージの一覧取得

メールメッセージの一覧を表示します。

### 実行可能な権限
```
ログインユーザー以上
```

### リクエスト
```
GET /baser/api/admin/bc-mail/mail_messages.json
``` 

### クエリパラメーター

| パラメーター名           | 型 | 内容                                  |
|-------------------| --- |-------------------------------------|
| mail_content_id            | 数値 | メールコンテンツID |
| limit             | 数値 | 取得件数                                |
| direction              | 数値 | 並び順                                |
| order   | 真偽値 | 並び順対象のフィールド                                |


### レスポンス例
#### レスポンスボディ
```json
{
  "mailMessages": [
    {
      "id": 1,
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
    ...
  ]
}

```
