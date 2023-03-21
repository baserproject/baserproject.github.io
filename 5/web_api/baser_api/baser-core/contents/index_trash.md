# ゴミ箱内のコンテンツ一覧の取得

ゴミ箱内のコンテンツ情報の一覧を取得します。

### 実行可能な権限
```
ログインユーザー以上
```
 
### リクエスト
```
GET /baser/api/baser-core/contents/index_trash.json
``` 

### クエリパラメーター

`list_type` 以外、 [コンテンツ一覧の取得API](./index) に準ずる。

### レスポンス例
#### レスポンスボディ
```json
{
    "contents": [
        {
            "id": 5,
            "name": "about",
            "plugin": "BaserCore",
            "type": "Page",
            "entity_id": 2,
            "url": "",
            "site_id": 1,
            "alias_id": null,
            "main_site_content_id": null,
            "parent_id": null,
            "lft": null,
            "rght": null,
            "level": null,
            "title": "会社案内",
            "description": "",
            "eyecatch": "",
            "author_id": 1,
            "layout_template": "",
            "status": false,
            "publish_begin": null,
            "publish_end": null,
            "self_status": false,
            "self_publish_begin": null,
            "self_publish_end": null,
            "exclude_search": false,
            "created_date": "2023-03-21T15:06:52+09:00",
            "modified_date": null,
            "site_root": false,
            "deleted_date": "2023-03-22T06:40:14+09:00",
            "exclude_menu": false,
            "blank_link": false,
            "created": null,
            "modified": "2023-03-21T15:06:52+09:00",
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
                "created": "2023-03-21T15:06:51+09:00",
                "modified": "2023-03-21T15:06:51+09:00"
            },
        },
        ...
    ]
}
```
