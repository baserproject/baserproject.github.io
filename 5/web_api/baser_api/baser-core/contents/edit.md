# コンテンツの編集

指定したコンテンツ情報を編集します。

### 実行可能な権限
```
ログインユーザー
```
 
### リクエスト
```
PATCH /baser/api/baser-core/contents/{contentId}.json
``` 

### パスパラメーター

| パラメーター名       | 型   | 内容                   |
|---------------|-----|----------------------|
| contentId        | 数値  | コンテンツのID              |

### リクエストボディ

| パラメーター名            | 型    | 必須  | 内容                             |
|--------------------|------|-----|--------------------------------|
| name               | 文字列  |    | URL上のファイル名                     |
| entity_id          | 数値   |    | コンテンツ本体のID                     |
| site_id            | 数値   |     | サイトID                          |
| parent_id          | 数値   |     | 親となるコンテンツID                    |
| title              | 文字列  |    | コンテンツタイトル                      |
| eyecatch           | 配列   |    | アイキャッチ画像                       |
| author_id          | 数値   |    | 作成者のユーザーID                     |
| layout_template    | 文字列  |     | レイアウトテンプレート                    |
| self_status        | 真偽値  |     | 対象コンテンツ自身の公開状態                 |
| self_publish_begin | 日時   |     | 対象コンテンツ自身の公開開始日                |
| self_publish_end   | 日時   |     | 対象コンテンツ自身の公開終了日                |
| created_date       | 日時   |     | コンテンツの作成日                      |
| modified_date      | 日時   |     | コンテンツの編集日                      |
| exclude_search     | 真偽値  |     | サイト内検索の除外対象とするか                |
| exclude_menu       | 真偽値  |     | 自動生成メニューの除外対象とするか              |
| blank_link         | 真偽値  |     | 自動生成メニューにおいてクリックした際に別タブを開くかどうか |

### レスポンス例
#### レスポンスボディ
```json
{
    "content": {
        "id": 4,
        "name": "index",
        "plugin": "BaserCore",
        "type": "Page",
        "entity_id": 1,
        "url": "/index",
        "site_id": 1,
        "alias_id": null,
        "main_site_content_id": null,
        "parent_id": 1,
        "lft": 2,
        "rght": 3,
        "level": 1,
        "title": "トップページ",
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
        "created_date": "2023-03-21T14:32:35+09:00",
        "modified_date": null,
        "site_root": false,
        "deleted_date": null,
        "exclude_menu": false,
        "blank_link": false,
        "created": null,
        "modified": "2023-03-21T14:32:35+09:00",
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
    "message": "コンテンツ「トップページ」を更新しました。",
    "errors": null
}
```
