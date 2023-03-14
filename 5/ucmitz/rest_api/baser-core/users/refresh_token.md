# リフレッシュトークンを取得する

リフレッシュトークンを送信し、JWTトークンを取得します。  
リフレッシュトークンは、`Authorization` ヘッダにセットします。

### 実行可能な権限
```
全ての権限 
```

### メソッド
```
POST
```
 
### URL
```
/baser/api/baser-core/users/refresh_token.json
```

### レスポンス例
#### レスポンスボディ
```json
{
    "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzX3Rva2VuIiwiaXNzIjoiYmFzZXIiLCJzdWIiOjEsImV4cCI6MTY3ODc1NzYyNn0.TKegi9xJFbVEC74o6cuoo1nohvAJjpVXNUD6WxQ-HFrDtcJJ4Dl7I0NxgW37Mdubm9Xvuf7D21RgCeK5hc9wY3DlciQU5k2Hjuw0OnDjiaVSoYDe_P0Mlg5ClSJ2w48yEcu2JFmnzcTd27_phSsna51Xfq_WdvTfT3JEJDd-Arc",
    "refresh_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaF90b2tlbiIsImlzcyI6ImJhc2VyIiwic3ViIjoxLCJleHAiOjE2Nzk5NjU0MjZ9.gK--VzOI9y2vk_myfk_UcAjR2Yem86s1P4o--MQdArVD3QGJVSGTiRcwNcw4spnpF8IJHUogeWA5WswhAuSzptIfyxx8kW5pGUuAqhmA3ZMWylrFQ7kQnrRaAQRELvJJ7qhoEOddb-tdG1w6OjbReKHEX9iZP5iMO3ZaB3OoAUM"
}
```
