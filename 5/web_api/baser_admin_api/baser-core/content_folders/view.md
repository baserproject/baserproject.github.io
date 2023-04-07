# コンテンツフォルダー情報の取得

コンテンツフォルダー情報を取得します。

### 実行可能な権限
```
すべてのユーザー：公開された情報のみ
ログインユーザー以上：全て
```
 
### リクエスト
```
認証なし場合、
GET /baser/api/baser-core/content_folders/{contentFolderId}.json
認証した場合、
GET /baser/api/admin/baser-core/content_folders/{contentFolderId}.json
``` 

### パスパラメーター

| パラメーター名         | 型   | 内容            |
|-----------------|-----|---------------|
| contentFolderId | 数値  | コンテンツフォルダーのID |

### レスポンス例
#### レスポンスボディ
```json
{
    "contentFolder": {
        "id": 4,
        "folder_template": "",
        "page_template": "",
        "created": "2019-06-11T12:24:28+09:00",
        "modified": null,
        "content": {
            "id": 6,
            "name": "service",
            "plugin": "BaserCore",
            "type": "ContentFolder",
            "entity_id": 4,
            "url": "/service/",
            "site_id": 1,
            "alias_id": null,
            "main_site_content_id": null,
            "parent_id": 1,
            "lft": 8,
            "rght": 15,
            "level": 1,
            "title": "サービス",
            "description": "",
            "eyecatch": "",
            "author_id": 1,
            "layout_template": "",
            "status": true,
            "publish_begin": null,
            "publish_end": null,
            "self_status": true,
            "self_publish_begin": null,
            "self_publish_end": null,
            "exclude_search": false,
            "created_date": "2023-03-15T07:09:19+09:00",
            "modified_date": null,
            "site_root": false,
            "deleted_date": null,
            "exclude_menu": false,
            "blank_link": false,
            "created": null,
            "modified": "2023-03-15T07:09:19+09:00",
            "site": {
                "id": 1,
                "main_site_id": null,
                "name": "",
                "display_name": "My Site",
                "title": "My Site",
                "alias": "",
                "theme": "BcFront",
                "status": true,
                "keyword": "",
                "description": "",
                "use_subdomain": false,
                "relate_main_site": false,
                "device": "",
                "lang": "",
                "same_main_url": false,
                "auto_redirect": false,
                "auto_link": false,
                "domain_type": null,
                "created": "2023-03-15T07:09:00+09:00",
                "modified": "2023-03-15T07:09:18+09:00"
            }
        }
    },
    "message": null
}
```
