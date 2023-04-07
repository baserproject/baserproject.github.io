# メールコンテンツの削除

指定したメールコンテンツを削除します。

### 実行可能な権限
```
システム管理者以上
```

### リクエスト
```
DELETE /baser/api/admin/bc-mail/mail_contents/{mailContentId}.json
``` 

### パスパラメーター

| パラメーター名   | 型   | 必須  | 内容                |
|-----------|-----|-----|-------------------|
| mailContentId        | 数値  | ●   |メールコンテンツのID              |

### レスポンス例
#### レスポンスボディ
```json
{
  "mailContent": {
    "id": 3,
    "description": "<p>このコンテンツはメールフォーム機能により作られており、この文章については管理画面の [お問い合わせ] &rarr; [設定] より更新ができます。また、メールフォームは [コンテンツ管理] よりいくつでも作成することができます。</p>",
    "sender_1": "",
    "sender_2": "",
    "sender_name": "baserCMSサンプル",
    "subject_user": "【baserCMS】お問い合わせ頂きありがとうございます。",
    "subject_admin": "【baserCMS】お問い合わせを受け付けました",
    "form_template": "default",
    "mail_template": "mail_default",
    "redirect_url": "/",
    "widget_area": null,
    "ssl_on": false,
    "save_info": true,
    "auth_captcha": true,
    "publish_begin": null,
    "publish_end": null,
    "created": "2023-04-03T15:10:06+09:00",
    "modified": "2023-04-03T15:10:06+09:00",
    "mail_fields": null,
    "content": {
      "id": 29,
      "name": "contact_2",
      "plugin": "BcMail",
      "type": "MailContent",
      "entity_id": 3,
      "url": "/contact_2/",
      "site_id": 1,
      "alias_id": null,
      "main_site_content_id": null,
      "parent_id": 1,
      "lft": 26,
      "rght": 27,
      "level": 1,
      "title": "メールコンテンツコピー",
      "description": "",
      "eyecatch": "",
      "author_id": 1,
      "layout_template": null,
      "status": false,
      "publish_begin": null,
      "publish_end": null,
      "self_status": false,
      "self_publish_begin": null,
      "self_publish_end": null,
      "exclude_search": false,
      "created_date": "2023-04-03T15:10:06+09:00",
      "modified_date": null,
      "site_root": false,
      "deleted_date": null,
      "exclude_menu": false,
      "blank_link": false,
      "created": "2023-04-03T15:10:06+09:00",
      "modified": "2023-04-03T15:10:06+09:00",
      "site": {
        "id": 1,
        "main_site_id": null,
        "name": "",
        "display_name": "My Site",
        "title": "My Site",
        "alias": "",
        "theme": "BcFront",
        "status": true,
        "keyword": "",
        "description": "",
        "use_subdomain": false,
        "relate_main_site": false,
        "device": "",
        "lang": "",
        "same_main_url": false,
        "auto_redirect": false,
        "auto_link": false,
        "domain_type": null,
        "created": "2023-03-29T21:50:36+09:00",
        "modified": "2023-03-29T21:50:54+09:00"
      }
    }
  },
  "content": {
    "id": 3,
    "description": "<p>このコンテンツはメールフォーム機能により作られており、この文章については管理画面の [お問い合わせ] &rarr; [設定] より更新ができます。また、メールフォームは [コンテンツ管理] よりいくつでも作成することができます。</p>",
    "sender_1": "",
    "sender_2": "",
    "sender_name": "baserCMSサンプル",
    "subject_user": "【baserCMS】お問い合わせ頂きありがとうございます。",
    "subject_admin": "【baserCMS】お問い合わせを受け付けました",
    "form_template": "default",
    "mail_template": "mail_default",
    "redirect_url": "/",
    "widget_area": null,
    "ssl_on": false,
    "save_info": true,
    "auth_captcha": true,
    "publish_begin": null,
    "publish_end": null,
    "created": "2023-04-03T15:10:06+09:00",
    "modified": "2023-04-03T15:10:06+09:00",
    "mail_fields": null,
    "content": {
      "id": 29,
      "name": "contact_2",
      "plugin": "BcMail",
      "type": "MailContent",
      "entity_id": 3,
      "url": "/contact_2/",
      "site_id": 1,
      "alias_id": null,
      "main_site_content_id": null,
      "parent_id": 1,
      "lft": 26,
      "rght": 27,
      "level": 1,
      "title": "メールコンテンツコピー",
      "description": "",
      "eyecatch": "",
      "author_id": 1,
      "layout_template": null,
      "status": false,
      "publish_begin": null,
      "publish_end": null,
      "self_status": false,
      "self_publish_begin": null,
      "self_publish_end": null,
      "exclude_search": false,
      "created_date": "2023-04-03T15:10:06+09:00",
      "modified_date": null,
      "site_root": false,
      "deleted_date": null,
      "exclude_menu": false,
      "blank_link": false,
      "created": "2023-04-03T15:10:06+09:00",
      "modified": "2023-04-03T15:10:06+09:00",
      "site": {
        "id": 1,
        "main_site_id": null,
        "name": "",
        "display_name": "My Site",
        "title": "My Site",
        "alias": "",
        "theme": "BcFront",
        "status": true,
        "keyword": "",
        "description": "",
        "use_subdomain": false,
        "relate_main_site": false,
        "device": "",
        "lang": "",
        "same_main_url": false,
        "auto_redirect": false,
        "auto_link": false,
        "domain_type": null,
        "created": "2023-03-29T21:50:36+09:00",
        "modified": "2023-03-29T21:50:54+09:00"
      }
    }
  },
  "message": "メールフォーム「メールコンテンツコピー」を削除しました。"
}

```
