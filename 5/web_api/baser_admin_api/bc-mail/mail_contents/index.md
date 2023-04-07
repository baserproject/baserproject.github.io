# メールコンテンツの一覧取得

メールコンテンツの一覧を表示します。

### 実行可能な権限
```
すべてのユーザー：公開された情報のみ
ログインユーザー以上：全て
```

### リクエスト
```
認証なし場合、
GET /baser/api/bc-mail/mail_contents.json
認証した場合、
GET /baser/api/admin/bc-mail/mail_contents.json
``` 

### クエリパラメーター

| パラメーター名           | 型 | 内容                                  |
|-------------------| --- |-------------------------------------|
| status            | 文字列 | publish：公開されたコンテンツフォルダーのみ<br>all：全て |
| limit             | 数値 | 取得件数                                |
| page              | 数値 | ページ数                                |
| order   | 文字列 | 並び替え                                |


### レスポンス例
#### レスポンスボディ
```json
{
  "mailContents": [
    {
      "id": 1,
      "description": "<p>このコンテンツはメールフォーム機能により作られており、この文章については管理画面の [お問い合わせ] &rarr; [設定] より更新ができます。また、メールフォームは [コンテンツ管理] よりいくつでも作成することができます。</p>",
      "sender_1": "",
      "sender_2": "",
      "sender_name": "テスト名",
      "subject_user": "テストユーザー",
      "subject_admin": "テストアドミン",
      "form_template": "default",
      "mail_template": "mail_default",
      "redirect_url": "/",
      "widget_area": null,
      "ssl_on": false,
      "save_info": true,
      "auth_captcha": true,
      "publish_begin": null,
      "publish_end": null,
      "created": "2023-03-29T21:50:36+09:00",
      "modified": "2023-04-03T15:27:27+09:00"
    },
    ...
  ]
}

```
