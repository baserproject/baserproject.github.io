# カスタムコンテンツの削除

指定したカスタムコンテンツを削除します。

## 実行に必要な権限

```
システム管理者以上
```

## リクエスト
```
DELETE /baser/api/admin/bc-custom-content/custom_contents/{customContentId}.json
```

### パスパラメーター

| パラメーター名   | 型   | 必須  | 内容                |
|-----------|-----|-----|-------------------|
| customContentId        | 数値  | ●   |カスタムコンテンツのID              |

## レスポンス例

### レスポンスボディ

```json
{
    "customContent": {
        "id": 4,
        "custom_table_id": 5,
        "description": "",
        "template": "default",
        "widget_area": null,
        "list_count": 10,
        "list_order": "id",
        "list_direction": "DESC",
        "created": "2023-04-06T10:52:49+09:00",
        "modified": "2023-04-06T10:52:49+09:00",
        "content": {
            "id": 33,
            "name": "%E3%83%AD%E3%82%B7%E3%82%A2%E3%81%AE%E3%81%93%E3%81%A8",
            "plugin": "BcCustomContent",
            "type": "CustomContent",
            "entity_id": 4,
            "url": "/%E3%83%AD%E3%82%B7%E3%82%A2%E3%81%AE%E3%81%93%E3%81%A8/",
            "site_id": 1,
            "alias_id": null,
            "main_site_content_id": null,
            "parent_id": 1,
            "lft": 34,
            "rght": 35,
            "level": 1,
            "title": "ロシア",
            "description": null,
            "eyecatch": null,
            "author_id": 1,
            "layout_template": null,
            "status": false,
            "publish_begin": null,
            "publish_end": null,
            "self_status": false,
            "self_publish_begin": null,
            "self_publish_end": null,
            "exclude_search": false,
            "created_date": "2023-04-06T10:52:49+09:00",
            "modified_date": null,
            "site_root": false,
            "deleted_date": null,
            "exclude_menu": false,
            "blank_link": false,
            "created": "2023-04-06T10:52:49+09:00",
            "modified": "2023-04-06T10:52:49+09:00",
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
                "created": "2023-03-29T21:50:36+09:00",
                "modified": "2023-04-03T17:12:21+09:00"
            }
        }
    },
    "content": {
        "id": 33,
        "name": "%E3%83%AD%E3%82%B7%E3%82%A2%E3%81%AE%E3%81%93%E3%81%A8",
        "plugin": "BcCustomContent",
        "type": "CustomContent",
        "entity_id": 4,
        "url": "/%E3%83%AD%E3%82%B7%E3%82%A2%E3%81%AE%E3%81%93%E3%81%A8/",
        "site_id": 1,
        "alias_id": null,
        "main_site_content_id": null,
        "parent_id": 1,
        "lft": 34,
        "rght": 35,
        "level": 1,
        "title": "ロシア",
        "description": null,
        "eyecatch": null,
        "author_id": 1,
        "layout_template": null,
        "status": false,
        "publish_begin": null,
        "publish_end": null,
        "self_status": false,
        "self_publish_begin": null,
        "self_publish_end": null,
        "exclude_search": false,
        "created_date": "2023-04-06T10:52:49+09:00",
        "modified_date": null,
        "site_root": false,
        "deleted_date": null,
        "exclude_menu": false,
        "blank_link": false,
        "created": "2023-04-06T10:52:49+09:00",
        "modified": "2023-04-06T10:52:49+09:00",
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
            "created": "2023-03-29T21:50:36+09:00",
            "modified": "2023-04-03T17:12:21+09:00"
        }
    },
    "message": "カスタムコンテンツ「ロシア」を削除しました。"
}
```
