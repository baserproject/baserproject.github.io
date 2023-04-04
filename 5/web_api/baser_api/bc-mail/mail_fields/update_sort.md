# メールフィールドの並べ替え

フィールドの表示順を並べ替えします。

### 実行可能な権限
```
ログインユーザー以上
```

### リクエスト
```
GET /baser/api/admin/bc-mail/mail_fields/update_sort/{mailContentId}.json
```

### パスパラメーター

| パラメーター名       | 型   | 必須  | 内容          |
|---------------|-----|-----|-------------|
| mailContentId | 数値  | ●   | メールコンテンツID  |

### リクエストボディ

| パラメーター名       | 型     | 必須    | 内容         |
|---------------|-------|-------|------------|
| id | 数値   | ●     | メールフィールドID |
| offset         | 数値 | ●     | 並び順        |

### レスポンス例
#### レスポンスボディ
```json
{
  "mailField": {
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
    "sort": 15,
    "created": "2023-03-29T21:50:36+09:00",
    "modified": "2023-04-04T12:31:24+09:00",
    "mail_content": {
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
      "modified": "2023-04-03T15:27:27+09:00",
      "content": {
        "id": 9,
        "name": "%E3%82%B3%E3%83%B3%E3%83%86%E3%83%B3%E3%83%84%E5%90%8D",
        "plugin": "BcMail",
        "type": "MailContent",
        "entity_id": 1,
        "url": "/%E3%82%B3%E3%83%B3%E3%83%86%E3%83%B3%E3%83%84%E5%90%8D/",
        "site_id": 1,
        "alias_id": null,
        "main_site_content_id": null,
        "parent_id": 1,
        "lft": 16,
        "rght": 17,
        "level": 1,
        "title": "コンテンツタイトル",
        "description": "",
        "eyecatch": "",
        "author_id": 1,
        "layout_template": "",
        "status": false,
        "publish_begin": null,
        "publish_end": null,
        "self_status": false,
        "self_publish_begin": null,
        "self_publish_end": null,
        "exclude_search": false,
        "created_date": "2023-04-03T15:27:27+09:00",
        "modified_date": null,
        "site_root": false,
        "deleted_date": null,
        "exclude_menu": false,
        "blank_link": false,
        "created": "2023-03-29T21:50:36+09:00",
        "modified": "2023-04-03T15:27:27+09:00"
      }
    }
  },
  "message": "メールフィールド「姓」の並び替えを更新しました。"
}


```
