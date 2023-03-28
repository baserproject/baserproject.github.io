# コンテンツ情報の並び替え

指定したコアクセス設定情報の並び替えを行います。

### 実行可能な権限
```
システム管理者以上
```
 
### リクエスト
```
POST /baser/api/baser-core/contens/update_sort/{userGroupId}.json
``` 
### パスパラメーター

| パラメーター名   | 型   | 必須  | 内容         |
|-----------|-----|-----|------------|
| userGroupId        | 数値  | ●   | ユーザーグループID |

### リクエストボディ

| パラメーター名       | 型     | 必須    | 内容                                                 |
|---------------|-------|-------|----------------------------------------------------|
| id | 数値   | ●     | コアクセス設定ID                                            |
| offset         | 数値 | ●     | 並び順 |

### レスポンス例
#### レスポンスボディ
```json
{
  "permission": {
    "id": 275,
    "no": 273,
    "sort": 273,
    "permission_group_id": 1,
    "name": "編集",
    "user_group_id": 2,
    "url": "/baser/admin/baser-core/content_folders/edit/*",
    "auth": false,
    "method": "POST",
    "status": true,
    "created": "2023-03-13T12:36:43+09:00",
    "modified": "2023-03-13T12:36:43+09:00",
    "permission_group": {
      "id": 1,
      "name": "コンテンツフォルダ管理",
      "type": "Admin",
      "plugin": "BaserCore",
      "status": true,
      "created": "2023-03-13T12:36:43+09:00",
      "modified": "2023-03-13T12:36:43+09:00"
    },
    "user_group": {
      "id": 2,
      "name": "operators",
      "title": "サイト運営",
      "auth_prefix": "Admin",
      "auth_prefix_settings": "{\"Admin\":{\"type\":\"2\"},\"Api\":{\"type\":\"2\"}}",
      "use_move_contents": false,
      "modified": null,
      "created": "2023-03-13T12:36:40+09:00"
    }
  },
  "message": "アクセスルール「編集」の並び替えを更新しました。"
}

```
