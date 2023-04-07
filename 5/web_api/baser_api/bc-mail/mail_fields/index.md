# メールフィールドの一覧取得

メールフィールドの一覧を表示します。

### 実行可能な権限
```
すべてのユーザー：公開された情報のみ
ログインユーザー以上：全て
```

### リクエスト
```
GET /baser/api/bc-mail/mail_fields.json
``` 

### クエリパラメーター

| パラメーター名           | 型 | 内容                                  |
|-------------------| --- |-------------------------------------|
| mail_content_id            | 数値 | メールコンテンツID |
| status            | 文字列 | publish：公開されたコンテンツフォルダーのみ<br>all：全て |
| limit             | 数値 | 取得件数                                |
| page              | 数値 | ページ数                                |
| use_field   | 真偽値 | 利用状態                                |


### レスポンス例
#### レスポンスボディ
```json
{
  "mailFields": [
    {
      "id": 1,
      "mail_content_id": 1,
      "no": 1,
      "name": "姓",
      "field_name": "name_1",
      "type": "text",
      "head": "お名前",
      "attention": "",
      "before_attachment": "",
      "after_attachment": "",
      "source": "",
      "size": null,
      "text_rows": null,
      "maxlength": 255,
      "options": "placeholder|姓",
      "class": "",
      "default_value": "",
      "description": "",
      "group_field": "name",
      "group_valid": "name",
      "valid": "1",
      "valid_ex": "",
      "auto_convert": "",
      "not_empty": true,
      "use_field": true,
      "no_send": false,
      "sort": 1,
      "created": "2023-03-29T21:50:36+09:00",
      "modified": "2023-04-04T11:55:48+09:00"
    },
    ...
  ],
  "message": null
}


```
