# コンテンツのフルURLの取得

指定したコンテンツの http からのフルURLを取得する

### 実行可能な権限
```
ログインユーザー以上
```
 
### リクエスト
```
GET /baser/api/admin/baser-core/contents/get_full_url/{contentId}.json
``` 

### パスパラメーター

| パラメーター名         | 型   | 内容            |
|-----------------|-----|---------------|
| contentId | 数値  | コンテンツのID |

### レスポンス例
#### レスポンスボディ
```json
{
    "fullUrl": "https://localhost/service/service1"
}
```
