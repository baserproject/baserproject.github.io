# ユーザーグループのリスト

ユーザーグループ情報をリストします。

### 実行可能な権限
```
システム管理者以上
```

### リクエスト
```
GET /baser/api/admin/baser-core/user_groups/list.json
```

### レスポンス例
#### レスポンスボディ
```json
{
  "userGroups": {
    "1": "アドミン",
    ...
  }
}

```
