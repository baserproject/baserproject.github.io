# コンテンツフォルダーの編集

指定したコンテンツフォルダー情報を編集します。

### 実行可能な権限
```
システム管理者以上
```
 
### リクエスト
```
PATCH /baser/api/admin/baser-core/content_folders/{contentFolderId}.json
``` 

### パスパラメーター

| パラメーター名         | 型   | 内容                   |
|-----------------|-----|----------------------|
| contentFolderId | 数値  | コンテンツフォルダーのID              |

### リクエストボディ

| パラメータ名                      | 必須  | 型   | 内容            | サンプル値               |
|-----------------------------|-----|-----|---------------|---------------------|
| content[site_id]            | ●   | 数値  | サイトID         | 1                   |
| content[parent_id]          | ●   | 数値  | 親フォルダのコンテンツID | 1                   |
| content[name]               | ●   | 文字列 | URL上のフォルダ名    | sample              |
| content[title]              | ●   | 文字列 | タイトル          | サンプル                |
| content[self_status]        | ●   | 真偽値 | ステータス         | true                |
| content[self_publish_begin] | ●   | 文字列 | 公開開始日時        | 2023/03/15 20:00:00 |
| content[self_publish_end]   | ●   | 文字列 | 公開終了日時        | 2023/03/15 20:00:00  |
| content[created_date]       | ●   | 文字列 | 作成日           | 2023/03/15 20:00:00 |
| content[exclude_search]     | ●   | 真偽値 | 検索除外          | true                |
| content[author_id]          | ●   | 数値  | 作成者ID         | サンプル                |

### レスポンス例
#### レスポンスボディ
```json
{
    "contentFolder": {
        "id": 11
        "content": {
            "name": "test_3",
            "title": "テスト",
            "site_id": 1,
            "parent_id": 1,
            "self_status": false,
            "self_publish_begin": null,
            "self_publish_end": null,
            "created_date": "2023-03-15T20:11:49+09:00",
            "site_root": false,
            "exclude_search": false,
            "author_id": 1,
            "plugin": "BaserCore",
            "type": "ContentFolder",
            "entity_id": 11,
            "lft": 24,
            "rght": 25,
            "level": 1,
            "created": "2023-03-15T20:11:49+09:00",
            "modified": "2023-03-15T20:11:49+09:00",
            "id": 20,
            "url": "/test_3/",
            "status": false,
            "main_site_content_id": null
        },
        "created": "2023-03-15T20:11:49+09:00",
        "modified": "2023-03-15T20:11:49+09:00",
    },
    "message": "コンテンツフォルダ「テスト」を追加しました。",
    "errors": null
}
```
