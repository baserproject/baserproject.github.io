# ブログコメントの新規追加

新しいブログコメントを作成します。


## 実行に必要な権限

```
システム管理者以上
```

## リクエスト
```
POST /baser/api/admin/bc-blog/blog_comments.json
```

### リクエストボディ

| パラメーター名   | 型   | 必須  | 内容                |
|-----------|-----|-----|-------------------|
| blog_content_id   | 数値 | ●   | ブログコンテンツID  |
| blog_post_id   | 数値 | ●   | ブログポスト名  |
| no   | 文字列 |     | ブログコメントNo  |
| status   | 真偽値 |     | 公開状態  |
| name   | 文字列 |     | 名前  |
| email   | 文字列 |     | メールアドレス  |
| url   | 文字列 |     | URL  |
| message   | 文字列 |     | メッセージ  |

## レスポンス例

### レスポンスボディ

```json
{
  "blogComment": {
    "name": "ベトナムくん",
    "url": "",
    "email": "",
    "auth_captcha": null,
    "captcha_id": null,
    "blog_content_id": 1,
    "blog_post_id": 1,
    "message": "最高！",
    "status": true,
    "no": 3,
    "created": "2023-03-30T19:28:23+09:00",
    "modified": "2023-03-30T19:28:23+09:00",
    "id": 1
  },
  "message": "",
  "errors": [
  ]
}

```
