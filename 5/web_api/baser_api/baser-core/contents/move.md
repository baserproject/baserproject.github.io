# コンテンツの移動

指定したコンテンツの配置を移動します。

### 実行可能な権限
```
ログインユーザー
（所属するユーザーグループにて「コンテンツのドラッグ＆ドロップ移動機能を利用する」に
チェックが入っているユーザー）
システム管理者以上
```
 
### リクエスト
```
POST /baser/api/baser-core/contens/move.json
``` 

### リクエストボディ

| パラメーター名         | 型   | 必須  | 内容               |
|-----------------|-----|-----|------------------|
| origin.id       | 数値  |  ●  | 移動対象のコンテンツID     |
| origin.parentId | 数値  |  ●  | 移動対象の親となるコンテンツID |
| target.id       | 数値  |  ●  | 移動先のコンテンツID      |
| target.parentId | 数値  |  ●  | 移動先の親となるコンテンツID  |
| target.siteId   | 数値  |  ●  | 移動先のサイトID        |

### レスポンス例
#### レスポンスボディ
```json
{
    "url": "https://localhost/service1",
    "content": {
        "id": 11,
        "name": "service1",
        "plugin": "BaserCore",
        "type": "Page",
        "entity_id": 3,
        "url": "/service1",
        "site_id": 1,
        "alias_id": null,
        "main_site_content_id": null,
        "parent_id": 1,
        "lft": 6,
        "rght": 7,
        "level": 1,
        "title": "サービス１",
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
        "created_date": "2023-03-21T15:06:52+09:00",
        "modified_date": "2023-03-22T06:21:32+09:00",
        "site_root": false,
        "deleted_date": null,
        "exclude_menu": false,
        "blank_link": false,
        "created": null,
        "modified": "2023-03-22T06:21:32+09:00"
    },
    "message": "コンテンツ「サービス１」の配置を移動しました。\n/service/service1 > /service1",
    "errors": null
}
```
