# アップロードカテゴリのコピー

既存のアップロードカテゴリを複製します

## 実行に必要な権限

```
システム管理者以上
```

## リクエスト
```
POST /baser/api/admin/bc-uploader/uploader_categories/copy/{uploaderCategoryId}.json
```

### パスパラメーター

| パラメーター名   | 型   | 必須  | 内容        |
|-----------|-----|-----|-----------|
| uploaderCategoryId   | 数値  | ●   | アップロードカテゴリID       |

## レスポンス例

### レスポンスボディ

```json
{
  "message": "アップロードカテゴリ「blog-1_copy」をコピーしました。",
  "uploaderCategory": {
    "name": "blog-1_copy",
    "created": "2023-04-05T12:22:31+09:00",
    "modified": "2023-04-05T12:22:31+09:00",
    "id": 6
  }
}
```
