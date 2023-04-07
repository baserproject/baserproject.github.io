# 検索インデックスの一覧取得

検索インデックス一覧を表示します。
タイプ、サイト、フォルダ、キーワード、公開状態、優先度で検索ができます。

### 実行可能な権限
```
すべてのユーザー：公開された情報のみ
```

### リクエスト
```
GET /baser/api/bc-search-index/search_indexes.json
``` 

### クエリパラメーター

| パラメーター名  | 型 | 内容                                  |
|----------| --- |-------------------------------------|
| q        | 文字列 | 検索キーワード |
| s        | 数値 | サイトID                                |
| c        | 数値 | コンテンツID                                |
| f        | 数値 | フォルダーID                         |
| cf       | 数値 | コンテンツフィルダーID                                |
| type     | 文字列 | コンテンツタイプ                                |
| m        | 文字列 | モデル名（エンティティ名）                                |
| priority | 文字列 | 優先度                         |


### レスポンス例
#### レスポンスボディ
```json
{
  "searchIndexes": [
    {
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
      "priority": "0.5",
      "publish_begin": null,
      "publish_end": null,
      "created": "2023-03-30T12:15:47+09:00",
      "modified": "2023-03-30T12:15:47+09:00"
    },
    ...
  ]
}

```
