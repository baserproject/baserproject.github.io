# 検索インデックスの優先度変更

優先度を変更します。

### 実行可能な権限
```
ログインユーザー以上
```

### リクエスト
```
POST /baser/api/admin/bc-search-index/search_indexes/change_priority/{searchIndexeId}.json
``` 

### パスパラメーター

| パラメーター名   | 型   | 必須  | 内容             |
|-----------|-----|-----|----------------|
| searchIndexeId        | 数値  | ●   |  検索インデックスID     |

### リクエストボディ

| パラメーター名   | 型   | 必須  | 内容          |
|-----------|-----|-----|-------------|
| priority        |  数値   |    ●  |       優先順位      |

### レスポンス例
#### レスポンスボディ
```json
{
  "searchIndex": {
    "id": 1,
    "type": "ブログ",
    "model": "BlogPost",
    "model_id": 3,
    "site_id": 1,
    "content_id": 10,
    "content_filter_id": null,
    "lft": 4,
    "rght": 5,
    "title": null,
    "detail": "",
    "url": "/news/archives/3",
    "status": null,
    "priority": "2",
    "publish_begin": null,
    "publish_end": null,
    "created": "2023-03-30T12:15:47+09:00",
    "modified": "2023-04-04T16:24:53+09:00"
  },
  "message": "検索インデックス「」の優先度を変更しました。"
}

```
