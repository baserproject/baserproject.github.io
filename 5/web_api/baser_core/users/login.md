# ログイン

ユーザー情報でログインし、JWTトークンを取得します。

### 実行可能な権限
```
全ての権限 
```
 
### リクエスト
```
POST /baser/api/baser-core/users/login.json
``` 

### リクエストボディ

| パラメーター名          | 型 | 内容                                 |
|------------------| --- |------------------------------------|
| email            | 文字列 | メールアドレス、もしくは、アカウント名                |
| password         | 文字列 | パスワード                              |


### レスポンス例
#### レスポンスボディ
```json
{
    "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzX3Rva2VuIiwiaXNzIjoiYmFzZXIiLCJzdWIiOjEsImV4cCI6MTY3ODc1NzI4NX0.TUTZg1v5SUQMT0_V0EpGRWAXkmxfmeEMCo5DD1HJguX5ko8Uufnpd76_fYX_H8f7H2i9tAkemXhlRHH0YOFtLUAaPZzn62cPZfFbiUEMZ0O1GB5Z3cVna2GE6RwqHj3Tc8PcCrrsLffeV4C5HXiMXiYGVQ304yp4duebUo7N06k",
    "refresh_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaF90b2tlbiIsImlzcyI6ImJhc2VyIiwic3ViIjoxLCJleHAiOjE2Nzk5NjUwODV9.lb3-3RUZ1QRFCva52nGl4ATAvK14uflmuE2s-pPaMI0Y0YzljiC1L0aPvECNADrzWTwUb0rMqsehVzL9toxRf-2IlOmoDi5pfDdvMPIGk6d5zEo6nTCOPQZ5AVV6JdSynMKojXyz_2FWqKPIqvgI7sarSrELkJJvNZne0AFuty4",
}
```
