# URLがユニークか確認

指定したURLがまだ存在せずユニークなのかどうか確認

### 実行可能な権限
```
ログインユーザー以上
```
 
### リクエスト
```
POST /baser/api/admin/baser-core/contents/is_unique_content.json
``` 

### リクエストボディ

| パラメーター名            | 型    | 必須  | 内容                                     |
|--------------------|------|-----|----------------------------------------|
| URL               | 数値  | ●   | ユニークかどうか確認する対象のURL。スラッシュから始まるルートパスで指定。 |

### レスポンス例
#### レスポンスボディ
```json
false
```
