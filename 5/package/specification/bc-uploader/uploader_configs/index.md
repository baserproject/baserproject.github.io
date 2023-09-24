# アップローダープラグイン設定設計書

## ユースケース図
![ユースケース図：アップローダープラグイン設定](../../../svg/use_case/bc-uploader/uploader_configs.svg)

## 機能
### 編集
既存のアップローダープラグイン設定を編集する。
- **画像サイズ**: PC3種とスマホ2種のサイズを登録することができる。
- **レイアウトタイプ**: アップロードファイル一覧の表示レイアウトを切り替える事ができる。
- **制限設定**: 管理者以外のユーザーが、自分がアップロードしたファイル以外、編集・削除をできないように設定する事ができる。

 
## ドメインモデル図
![ドメインモデル図：検索インデックス](../../../svg/domain_model/bc-uploader/uploader_configs.svg)

 
## クラス図
### 管理画面
![クラス図：検索インデックス管理](../../../svg/class/bc-uploader/manage_uploader_configs.svg)


### API
![クラス図：検索インデックス管理](../../../svg/class/bc-uploader/api_uploader_configs.svg) 

