# アップロードカテゴリの一覧取得

アップロードカテゴリの一覧を表示します。


## 実行に必要な権限

```
システム管理者以上
```

## リクエスト
```
GET /baser/api/admin/bc-uploader/uploader_categories.json
```

### パスパラメーター

| パラメーター名   | 型   | 必須  | 内容        |
|-----------|-----|-----|-----------|
| uploaderCategoryId   | 数値  | ●   | アップロードカテゴリID       |

## レスポンス例

### レスポンスボディ

```json
{
  "uploaderCategories": [
    {
      "id": 1,
      "name": "vietnam",
      "modified": "2023-04-05T12:25:56+09:00",
      "created": "2023-04-05T12:14:23+09:00"
    },
    ...
  ]
}
```
