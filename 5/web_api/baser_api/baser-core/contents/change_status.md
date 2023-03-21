# コンテンツの削除

指定したコンテンツ情報の公開状態を変更します。

### 実行可能な権限
```
ログインユーザー以上
```
 
### リクエスト
```
POST /baser/api/baser-core/contens/change_status.json
``` 

### リクエストボディ

| パラメーター名 | 型   | 必須  | 内容                                 |
|---------|-----|-----|------------------------------------|
| id      | 数値  |  ●  | コンテンツID                            |
| status  | 文字列 |  ●  | 公開する: publish<br>非公開にする: unpublish |

### レスポンス例
#### レスポンスボディ
```json
{
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
        "rght": 20,
        "level": null,
        "title": "baserCMSサンプル",
        "description": "",
        "eyecatch": "",
        "author_id": 1,
        "layout_template": "default",
        "status": false,
        "publish_begin": null,
        "publish_end": null,
        "self_status": false,
        "self_publish_begin": null,
        "self_publish_end": null,
        "exclude_search": false,
        "created_date": "2023-03-21T12:43:06+09:00",
        "modified_date": null,
        "site_root": true,
        "deleted_date": null,
        "exclude_menu": false,
        "blank_link": false,
        "created": null,
        "modified": "2023-03-21T14:55:30+09:00",
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
    "message": "コンテンツ: baserCMSサンプル を非公開にしました。",
    "errors": null
}
```
