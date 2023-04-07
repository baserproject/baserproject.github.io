# コンテンツフォルダー一覧の取得

コンテンツフォルダー情報の一覧を取得します。

### 実行可能な権限
```
すべてのユーザー：公開された情報のみ
ログインユーザー以上：全て
```
 
### リクエスト
```
認証なし場合、
GET /baser/api/baser-core/content_folders.json
認証した場合、
GET /baser/api/admin/baser-core/content_folders.json
``` 

### クエリパラメーター

| パラメーター名           | 型 | 内容                                       |
|-------------------| --- |------------------------------------------|
| status            | 文字列 | publish：公開されたコンテンツフォルダーのみ<br>all：全て |
| limit             | 数値 | 取得件数                                     |
| page              | 数値 | ページ数                                     |
| folder_template   | 文字列 | フォルダーテンプレート（あいまい検索）                      |
| page_template     | 文字列 | ページテンプレート（あいまい検索）                        |

### レスポンス例
#### レスポンスボディ
```json
{
    "contentFolders": [
        {
            "id": 1,
            "folder_template": "default",
            "page_template": "default",
            "created": "2019-06-11T12:24:28+09:00",
            "modified": "2023-03-15T20:07:19+09:00",
            "content": {
                "id": 1,
                "name": "",
                "plugin": "BaserCore",
                "type": "ContentFolder",
                "entity_id": 1,
                "url": "/",
                "site_id": 1,
                "alias_id": null,
                "main_site_content_id": null,
                "parent_id": null,
                "lft": 1,
                "rght": 34,
                "level": null,
                "title": "baserCMSサンプル",
                "description": "",
                "eyecatch": "",
                "author_id": 1,
                "layout_template": "default",
                "status": true,
                "publish_begin": null,
                "publish_end": null,
                "self_status": true,
                "self_publish_begin": null,
                "self_publish_end": null,
                "exclude_search": false,
                "created_date": "2023-03-15T07:09:19+09:00",
                "modified_date": null,
                "site_root": true,
                "deleted_date": null,
                "exclude_menu": false,
                "blank_link": false,
                "created": null,
                "modified": "2023-03-15T07:09:19+09:00"
            }
        },
        ...
    ]
}
```
