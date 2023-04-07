# ブログ記事一覧の取得

ブログ記事の一覧を取得します。

### 実行可能な権限
```
全ての権限  
ただし、認証なし場合は、status が publish の記事のみ取得可とする。
```
 
### URL
```
認証なし、
GET /baser/api/bc-blog/blog_posts.json
認証した、
GET /baser/api/admin/bc-blog/blog_posts.json
``` 

### クエリパラメーター

| パラメーター名 | 型 | 内容 |
| --- | --- | --- |
| status | 文字列 | publish：公開状態の記事のみ<br>all：全て |
| limit | 数値 | 取得件数 |
| order | 文字列 | ソートに使用する属性名 （初期値：posted）|
| direction | 文字列 | ソートの方向 asc or desc（初期値：desc）|
| id | 数値 | ブログ記事ID |
| no | 数値 | ブログ記事NO |
| title | 文字列 | タイトル（あいまい検索） |
| user_id | 数値 | 作成者のユーザーID |
| blog_content_id | 数値 | ブログコンテンツID |
| site_id | 数値 | サイトID |
| contentUrl | 文字列 | URL |
| blog_tag_id | 数値 | ブログタグID |
| blog_category_id | 数値 | ブログカテゴリID |
| category | 文字列 | ブログカテゴリ名 |
| tag | 文字列 | ブログタグ名 |
| year | 文字列 | 作成年 |
| month | 文字列 | 作成月 |
| day | 文字列 | 作成日にち |
| keyword | 文字列 | タイトル、概要、詳細より検索をするための文字列を指定（あいまい検索） |
| author | 文字列 | 作成者のログインアカウント名 |

### レスポンス例
#### レスポンスボディ
```json
{
    "blogPosts": [
        {
            "id": 2,
            "blog_content_id": 1,
            "no": 2,
            "name": null,
            "title": "ブログ機能について説明します",
            "content": "<p>この文章はブログ記事の [概要] 欄に入力されています。...",
            "blog_category_id": 1,
            "user_id": 1,
            "status": true,
            "posted": "2022-10-01T09:00:00+09:00",
            "content_draft": "",
            "detail_draft": "",
            "publish_begin": null,
            "publish_end": null,
            "exclude_search": false,
            "eye_catch": "2016/08/00000002_eye_catch.jpg",
            "created": "2022-10-01T09:00:00+09:00",
            "modified": "2022-10-01T09:00:00+09:00",
        },
        ...    
    ]
}
```
