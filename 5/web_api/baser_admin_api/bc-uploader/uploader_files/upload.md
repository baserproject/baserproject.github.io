# アップロードファイルの新規追加

新しいアップロードファイルを作成します。

## 実行に必要な権限

```
システム管理者以上
```

## リクエスト
```
POST /baser/api/admin/bc-uploader/uploader_files/upload.json
```

### リクエストボディ

| パラメーター名 | 型    | 必須  | 内容             |
|---------|------|-----|----------------|
| file    | ファイル |     | アップロードファイルファイル |
| alt    | 文字列   |     | alt属性 |
| uploader_category_id    | 数値   |     | アップローダーカテゴリ |

## レスポンス例

### レスポンスボディ

```json
{
    "message": "アップロードファイル「img4.jpg」を追加しました。",
    "uploaderFile": {
        "user_id": 1,
        "file": {
            "tmp_name": "/tmp/php3VzDyC",
            "error": 0,
            "name": "img4.jpg",
            "type": "image/jpeg",
            "size": 22091
        },
        "alt": "img4.jpg",
        "created": "2023-04-05T13:56:46+09:00",
        "modified": "2023-04-05T13:56:46+09:00",
        "id": 4,
        "name": "img4.jpg"
    },
    "errors": null
}
```
