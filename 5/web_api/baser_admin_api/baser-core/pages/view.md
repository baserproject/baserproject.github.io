# 固定ページ情報の取得

固定ページ情報を取得します。

### 実行可能な権限
```
すべてのユーザー：公開された情報のみ
ログインユーザー以上：全て
```

### リクエスト
```
認証なし場合、
GET /baser/api/baser-core/pages/{pageId}.json
認証した場合、
GET /baser/api/admin/baser-core/pages/{pageId}.json
``` 

### パスパラメーター

| パラメーター名         | 型   | 内容       |
|-----------------|-----|----------|
| pageId | 数値  | 固定ページのID |

### レスポンス例
#### レスポンスボディ
```json
{
  "page": {
    "id": 2,
    "contents": "<h2>会社案内</h2>\n\n<h3>会社データ</h3>\n\n<table>\n\t<tbody>\n\t\t<tr>\n\t\t\t<th>会社名</th>\n\t\t\t<td>baserCMSサンプル</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<th>設立</th>\n\t\t\t<td>2022年9月</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<th>所在地</th>\n\t\t\t<td>福岡県福岡市</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<th>事業内容</th>\n\t\t\t<td>\n\t\t\t<ul>\n\t\t\t\t<li>事業内容１</li>\n\t\t\t\t<li>事業内容２</li>\n\t\t\t\t<li>事業内容３</li>\n\t\t\t</ul>\n\t\t\t</td>\n\t\t</tr>\n\t</tbody>\n</table>\n\n<h3>アクセスマップ</h3>\n<p>[BcBaser.getGoogleMaps width|100%]</p>",
    "draft": "",
    "page_template": "",
    "modified": "2022-09-14T19:53:48+09:00",
    "created": "2015-06-26T20:34:06+09:00",
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
      "created_date": "2023-03-13T12:36:42+09:00",
      "modified_date": null,
      "site_root": false,
      "deleted_date": null,
      "exclude_menu": false,
      "blank_link": false,
      "created": null,
      "modified": "2023-03-13T12:36:42+09:00",
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
        "created": "2023-03-13T12:36:40+09:00",
        "modified": "2023-03-13T12:36:41+09:00"
      }
    }
  },
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
    "created_date": "2023-03-13T12:36:42+09:00",
    "modified_date": null,
    "site_root": false,
    "deleted_date": null,
    "exclude_menu": false,
    "blank_link": false,
    "created": null,
    "modified": "2023-03-13T12:36:42+09:00",
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
      "created": "2023-03-13T12:36:40+09:00",
      "modified": "2023-03-13T12:36:41+09:00"
    }
  },
  "message": null
}
```
