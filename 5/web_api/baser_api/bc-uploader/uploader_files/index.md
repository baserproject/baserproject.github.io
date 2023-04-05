# アップロードファイルの一覧取得

アップロードファイルの一覧を表示します。


## 実行に必要な権限

```
システム管理者以上
```

## リクエスト
```
GET /baser/api/admin/bc-uploader/uploader_files.json
```

## レスポンス例

### レスポンスボディ

```json
{
  "uploaderFiles": [
    {
      "id": 4,
      "name": "img4.jpg",
      "alt": "img4.jpg",
      "uploader_category_id": null,
      "user_id": 1,
      "publish_begin": null,
      "publish_end": null,
      "created": "2023-04-05T13:56:46+09:00",
      "modified": "2023-04-05T13:56:46+09:00"
    },
    ...
  ]
}
```
