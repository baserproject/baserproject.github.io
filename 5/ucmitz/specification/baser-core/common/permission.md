# APIアクセス制限設計（検討中）

APIをリクエストした場合に権限がURLに対して権限があるかどうかを確認し、権限がない場合は、Forbidden エラーを発生する。


---

- urlに対しての権限
- パラメーターに対しての権限
パラメーターは設定ファイルで設定する  
BcApp.apiPermissions
---

urlに対しての権限
- ログインしていない場合
- ログインしている場合にユーザーグループごとに設定

--- 

認証についての設定
```php
$this->Authentication->allowUnauthenticated(['view']);
```
--- 

認可に対しての設計
- id
- category（admin / api / mypage）
- sort
- name
- user_group_id（null ユーザーグループIDを持つ）
- url
- auth（allow / deny）
- method（ALL / GET / POST）
- status

beforeFilterでチェックする  
$permissionsService::check()  
ログインしていることが前提
---

デフォルトのURLを全てテーブルに準備する？
設定ファイルでテーブルに入れる情報を記載しておく

---

管理画面からAjaxで呼び出しているAPIの取り扱いは細かく検討する

システム的に利用するURLは、defaultAllows に登録する？



