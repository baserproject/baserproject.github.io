# 検索インデックスの削除

指定した検索インデックスを削除します。

### 実行可能な権限
```
ログインユーザー以上
```

### リクエスト
```
DELETE /baser/api/admin/bc-search-index/search_indexes/{searchIndexId}.json
```

### パスパラメーター

| パラメーター名   | 型   | 必須  | 内容             |
|-----------|-----|-----|----------------|
| searchIndexId        | 数値  | ●   | 検索インデックスID     |

### レスポンス例
#### レスポンスボディ
```json
{
  "searchIndex": {
    "id": 19,
    "type": "ページ",
    "model": "Page",
    "model_id": 3,
    "site_id": 1,
    "content_id": 11,
    "content_filter_id": null,
    "lft": 9,
    "rght": 10,
    "title": "サービス１",
    "detail": "サービス１サービスの案内文がはいります。サービスの案内文がはいります。サービスの案内文がはいります。 サービスの案内文がはいります。サービスの案内文がはいります。サービスの案内文がはいります。 サービスの案内文がはいります。サービスの案内文がはいります。サービスの案内文がはいります。 サービスの案内文がはいります。サービスの案内文がはいります。サービスの案内文がはいります。サービスの案内文がはいります。サービスの案内文がはいります。サービスの案内文がはいります。 サービスの案内文がはいります。サービスの案内文がはいります。サービスの案内文がはいります。 サービスの案内文がはいります。サービスの案内文がはいります。サービスの案内文がはいります。 サービスの案内文がはいります。サービスの案内文がはいります。サービスの案内文がはいります。サービスの案内文がはいります。サービスの案内文がはいります。サービスの案内文がはいります。 サービスの案内文がはいります。サービスの案内文がはいります。サービスの案内文がはいります。 サービスの案内文がはいります。サービスの案内文がはいります。サービスの案内文がはいります。 サービスの案内文がはいります。サービスの案内文がはいります。サービスの案内文がはいります。",
    "url": "/service/service1",
    "status": true,
    "priority": "0.5",
    "publish_begin": null,
    "publish_end": null,
    "created": "2023-04-04T16:34:22+09:00",
    "modified": "2023-04-04T16:34:22+09:00"
  },
  "message": "検索インデックス: サービス１ を削除しました。"
}

```
