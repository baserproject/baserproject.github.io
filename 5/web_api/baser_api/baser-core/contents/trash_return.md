# ゴミ箱のコンテンツを戻す

ゴミ箱のコンテンツを元に戻し利用できるようにします。

### 実行可能な権限
```
ログインユーザー以上
```
 
### リクエスト
```
POST /baser/api/admin/baser-core/contens/trash_return/{contentId}.json
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
        "id": 5,
        "name": "about",
        "plugin": "BaserCore",
        "type": "Page",
        "entity_id": 2,
        "url": "/about",
        "site_id": 1,
        "alias_id": null,
        "main_site_content_id": null,
        "parent_id": 1,
        "lft": 24,
        "rght": 25,
        "level": 1,
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
        "modified_date": "2023-03-22T06:53:19+09:00",
        "site_root": false,
        "deleted_date": null,
        "exclude_menu": false,
        "blank_link": false,
        "created": null,
        "modified": "2023-03-22T06:53:19+09:00",
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
        }
    },
    "message": "ゴミ箱: 会社案内 を元に戻しました。"
}
```
