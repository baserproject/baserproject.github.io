# コンテンツのリネーム

指定したコンテンツのタイトルを変更します。

### 実行可能な権限
```
ログインユーザー（コンテンツフォルダ以外を対象）
システム管理者以上
```
 
### リクエスト
```
POST /baser/api/admin/baser-core/contens/rename.json
``` 

### リクエストボディ

| パラメーター名      | 型   | 必須  | 内容                                                           |
|--------------|-----|-----|--------------------------------------------------------------|
| id           | 数値  |  ●  | リネーム対象のコンテンツID                                               |
| title        | 文字列 |  ●  | リネーム後のタイトル                                                   |
| first  | 真偽値 |    | 新規作成として取り扱うかどうか<br>取り扱う場合、タイトルを元に、URL上のファイル名となる `name` にも設定する |

### レスポンス例
#### レスポンスボディ
```json
{
    "name": "service1",
    "url": "/service1",
    "message": "「会社案内」を「サービス」に名称変更しました。",
    "errors": null
}
```
