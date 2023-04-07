# コンテンツの削除

指定したコンテンツ情報を削除します。

### 実行可能な権限
```
ログインユーザー以上（コンテンツフォルダーの場合はシステム管理者以上）
```
 
### リクエスト
```
DELETE /baser/api/admin/baser-core/contens/{contentId}.json
``` 

### パスパラメーター

| パラメーター名       | 型   | 内容                   |
|---------------|-----|----------------------|
| contentId        | 数値  | コンテンツのID              |

### レスポンス例
#### レスポンスボディ
```json
{
    "content": {
        "id": 7,
        "name": "sample",
        "plugin": "BaserCore",
        "type": "Page",
        "entity_id": 5,
        "url": "/sample",
        "site_id": 1,
        "alias_id": null,
        "main_site_content_id": null,
        "parent_id": 1,
        "lft": 18,
        "rght": 19,
        "level": 1,
        "title": "サンプル",
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
        "created_date": "2023-03-21T12:43:06+09:00",
        "modified_date": null,
        "site_root": false,
        "deleted_date": null,
        "exclude_menu": false,
        "blank_link": false,
        "created": null,
        "modified": "2023-03-21T12:43:07+09:00",
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
            "created": "2023-03-21T12:43:05+09:00",
            "modified": "2023-03-21T12:43:06+09:00"
        }
    },
    "message": "コンテンツ: サンプルを削除しました。",
    "errors": null
}
```
