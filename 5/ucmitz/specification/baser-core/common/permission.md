# アクセス制限設計（検討中）

## 認証
管理画面、APIともに、認証を必要とする事を前提として、認証が不要なメソッドについては、都度、コントローラーの `beforeFilter()` にて定義する。

```php
$this->Authentication->allowUnauthenticated(['view']);
```

　
## アクセス対象の定義
- URL：管理画面、または、APIのエンドポイント
- パラメーター：APIにおけるリクエストパラメーター

　
## URLアクセス制限
URLにおけるアクセス制限については、コントローラーの `beforeFilter()` にて、`PermissionsService::check()` を利用して行う。    
ログインしている事を前提とし、ユーザーグループごとの権限を判定する仕組みとし、権限がない場合は、Forbidden エラーを発生する。

### 判定方法
アクセス権限の判定方法については、permissions テーブルを参照し、所属するグループが対象URLについて許可となるデータを持っているかどうかで判定する。

### URL形式
permissions に保存する URLについては、ワイルドカードの利用を可とする。

```shell
# 設定値
/baser/admin/baser-core/sites/*
# 判定URL
/baser/admin/baser-core/sites/index   # 可
/baser/admin/baser-core/sites/edit/1  # 可

# 設定値
/baser/admin/baser-core/sites/*/1/*
# 判定URL
/baser/admin/baser-core/sites/index   # 不可
/baser/admin/baser-core/sites/index/1  # 可
/baser/admin/baser-core/sites/index/1/1  # 可
/baser/admin/baser-core/sites/index/2/1  # 不可
```

### アクセス制限設定の自動ビルド
アクセス制限設定（permissions）のデータは対象プラグインのインストール時に自動生成する。  
自動生成においては、設定`BcApp.permission.defaultSettings` を参照して行う。  
設定がプラグインに存在しない場合は、次のURLを登録する。

```shell
/baser/admin/plugin-name/*
```

また、グループごとに初期化して再度、自動ビルドを行う事ができる。

### システムURLの定義
管理画面よりAJAXとして呼び出すAPIについては、設定`BcApp.permission.defaultAllows` に登録しておく事で、強制的に制限を解除できる。

　
## パラメーターアクセス制限
パラメーターにおけるアクセス制限については、コントローラーの各メソッドごとに定義をします。  
権限がない場合は、Forbidden エラーを発生する。

　
## URLアクセス制限登録のUI
アプリケーション側が提供する初期設定（初期ビルド）で運用する事が多い事を想定し、連続登録が行いやすいUIではなく、カスタマイズにおける微調整がしやすいUIとする。

　

## APIの利用設定について
設定 `BcApp.useApi` によって、利用するかしないかの設定を可能とする。  
デフォルトはオフとする。

