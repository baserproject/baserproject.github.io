# メールコンテンツのコピー

メールフォームをコピーします。コピー元のメールフォームに関連するメールフィールドも同時にコピーします。<br>
コピー時には、メッセージテーブルも新しく作成します。

### 実行可能な権限
```
システム管理者以上
```

### リクエスト
```
POST /baser/api/admin/bc-mail/mail_contents/copy.json
``` 

### リクエストボディ

| パラメーター名   | 型   | 必須  | 内容                |
|-----------|-----|-----|-------------------|
| entity_id        | 数値  | ●   | 実体ID              |
| title        | 文字列  | ●   | タイトル              |
| site_id        | 数値  | ●   | サイトID              |
| parent_id        | 数値  |     | 親コンテンツID              |

### レスポンス例
#### レスポンスボディ
```json
{
  "mailContent": {
    "description": "<p>このコンテンツはメールフォーム機能により作られており、この文章については管理画面の [お問い合わせ] &rarr; [設定] より更新ができます。また、メールフォームは [コンテンツ管理] よりいくつでも作成することができます。</p>",
    "sender_1": "",
    "sender_2": "",
    "sender_name": "baserCMSサンプル",
    "subject_user": "【baserCMS】お問い合わせ頂きありがとうございます。",
    "subject_admin": "【baserCMS】お問い合わせを受け付けました",
    "form_template": "default",
    "mail_template": "mail_default",
    "redirect_url": "/",
    "ssl_on": false,
    "save_info": true,
    "auth_captcha": true,
    "content": {
      "name": "contact_2",
      "parent_id": 1,
      "title": "メールコンテンツコピー",
      "author_id": 1,
      "site_id": 1,
      "exclude_search": false,
      "description": "",
      "eyecatch": "",
      "self_status": false,
      "self_publish_begin": null,
      "self_publish_end": null,
      "created_date": "2023-04-03T15:10:06+09:00",
      "site_root": false,
      "plugin": "BcMail",
      "type": "MailContent",
      "entity_id": 3,
      "lft": 26,
      "rght": 27,
      "level": 1,
      "created": "2023-04-03T15:10:06+09:00",
      "modified": "2023-04-03T15:10:06+09:00",
      "id": 29,
      "url": "/contact_2/",
      "status": false,
      "main_site_content_id": null
    },
    "created": "2023-04-03T15:10:06+09:00",
    "modified": "2023-04-03T15:10:06+09:00",
    "id": 3
  },
  "content": {
    "name": "contact_2",
    "parent_id": 1,
    "title": "メールコンテンツコピー",
    "author_id": 1,
    "site_id": 1,
    "exclude_search": false,
    "description": "",
    "eyecatch": "",
    "self_status": false,
    "self_publish_begin": null,
    "self_publish_end": null,
    "created_date": "2023-04-03T15:10:06+09:00",
    "site_root": false,
    "plugin": "BcMail",
    "type": "MailContent",
    "entity_id": 3,
    "lft": 26,
    "rght": 27,
    "level": 1,
    "created": "2023-04-03T15:10:06+09:00",
    "modified": "2023-04-03T15:10:06+09:00",
    "id": 29,
    "url": "/contact_2/",
    "status": false,
    "main_site_content_id": null
  },
  "message": "メールフォームのコピー「メールコンテンツコピー」を追加しました。"
}

```
