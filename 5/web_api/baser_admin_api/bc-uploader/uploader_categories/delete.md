# アップロードカテゴリの削除

既存のアップロードカテゴリを削除します

## 実行に必要な権限

```
システム管理者以上
```

## リクエスト
```
DELETE /baser/api/admin/bc-uploader/uploader_categories/{uploaderCategoryId}.json
```

### パスパラメーター

| パラメーター名   | 型   | 必須  | 内容        |
|-----------|-----|-----|-----------|
| uploaderCategoryId   | 数値  | ●   | アップロードカテゴリID       |

## レスポンス例

### レスポンスボディ

```json
{
  "uploaderCategory": {
    "id": 5,
    "name": "blog-1",
    "modified": "2023-04-05T12:19:37+09:00",
    "created": "2023-04-05T12:19:37+09:00"
  },
  "message": "アップロードカテゴリ「blog-1」を削除しました。"
}
```
