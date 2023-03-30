# ブログカテゴリの編集

新しいブログカテゴリを編集します。


## 実行に必要な権限

```
システム管理者以上
```

## リクエスト
```
PATCH /baser/api/bc-blog/blog_categories.json
```

### リクエストボディ

| パラメーター名   | 型   | 必須  | 内容                |
|-----------|-----|-----|-------------------|
| blog_content_id   | 数値 |    | ブログコンテンツID  |
| name   | 文字列 |    | ブログカテゴリー名  |
| title   | 文字列 |     | タイトル  |
| no   | 数値 |     | ブログカテゴリーNo  |
| status   | 真偽値 |     | 公開状態  |
| parent_id   | 数値 |     | 親ブログカテゴリー  |
| lft   | 数値 |     | 左位置  |
| rght   | 数値 |     | 右位置  |

## レスポンス例

### レスポンスボディ

```json
{
    "blogCategory": {
        "id": 1,
        "blog_content_id": 1,
        "no": 1,
        "name": "release",
        "title": "プレスリリース",
        "status": true,
        "parent_id": null,
        "lft": 1,
        "rght": 2,
        "created": "2023-03-29T21:50:36+09:00",
        "modified": null
    },
    "message": "ブログカテゴリー「release」を更新しました。",
    "errors": null
}

```
