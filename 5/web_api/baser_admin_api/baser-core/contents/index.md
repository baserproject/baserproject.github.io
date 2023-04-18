# コンテンツ一覧の取得

コンテンツ情報の一覧を取得します。

### 実行可能な権限
```
すべてのユーザー：公開された情報のみ
ログインユーザー以上：全て
```
 
### リクエスト
```
認証なし場合、
GET /baser/api/baser-core/contents.json
認証した場合、
GET /baser/api/admin/baser-core/contents.json
``` 

### クエリパラメーター

| パラメーター名   | 型   | 内容                                   |
|-----------|-----|--------------------------------------|
| list_type | 文字列 |レスポンスボディの掲載パターンを増やします。 <br>index：通常一覧（デフォルト）<br>tree：ツリー構造      |
| limit     | 数値  | 取得件数                                 |
| page      | 数値  | ページ数                                 |
| id        | 数値  | コンテンツID                              |
| type      | 文字列 | コンテンツタイプ（Page, ContentFolder etc...） |
| type!     | 文字列 | 指定以外のコンテンツタイプ                        |
| parent_id | 数値  | 親のコンテンツID                            |
| author_id | 数値  | 作成者のユーザーID                           |
| site_id   | 数値  | サイトID                                |
| title     | 数値  | コンテンツのタイトル（ワイルドカード）                  |
| name      | 数値  | URL上のファイル名、もしくは、タイトル（ワイルドカード）        |
| status    | 文字列 | publish：有効なコンテンツのみ<br>all：全て         |
| folder_id | 数値  | 指定したコンテンツID配下のコンテンツを全て取得|

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
            "url": "/about",
            "site_id": 1,
            "alias_id": null,
            "main_site_content_id": null,
            "parent_id": 1,
            "lft": 6,
            "rght": 7,
            "level": 1,
            "title": "会社案内",
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
            "modified": "2023-03-21T12:43:06+09:00"
        },
        ...
    ]
}

```
