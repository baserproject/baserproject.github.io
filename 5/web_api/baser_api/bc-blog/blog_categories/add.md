# ブログカテゴリの新規追加

新しいブログカテゴリを作成します。


## 実行に必要な権限

```
システム管理者以上
```

## リクエスト
```
POST /baser/api/admin/bc-blog/blog_categories.json
```

### リクエストボディ

| パラメーター名   | 型   | 必須  | 内容                |
|-----------|-----|-----|-------------------|
| blog_content_id   | 数値 | ●   | ブログコンテンツID  |
| name   | 文字列 | ●   | ブログカテゴリー名  |
| title   | 文字列 | ●   | タイトル  |
| no   | 数値 |     | ブログカテゴリーNo  |
| status   | 真偽値 |     | 公開状態  |
| parent_id   | 数値 |     | 親ブログカテゴリー  |
| lft   | 数値 |     | 左位置  |
| rght   | 数値 |     | 右位置  |

## レスポンス例

### レスポンスボディ

```json
{
  "message": "ブログカテゴリー「blog-category-api」を追加しました。",
  "blogCategory": {
    "name": "blog-category-api",
    "title": "test title",
    "blog_content_id": 1,
    "parent_id": 0,
    "no": 4,
    "created": "2023-03-30T15:18:07+09:00",
    "modified": "2023-03-30T15:18:07+09:00",
    "lft": 7,
    "rght": 8,
    "id": 4
  },
  "errors": null
}

```
