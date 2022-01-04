## BcContentsBehaviorとは

コンテンツフォルダーなどのモデルをコンテンツのモデルとして紐付け使用するためのもの

## 関連
  - [コンテンツ管理](./index)
  - [コンテンツフォルダ管理](../content_folders/index)
  - [ページ管理](../pages/index)
  - [リンク管理(ページ未完成)]()
  - [メールコンテンツ管理(ページ未完成)]()

### basercms4→ucmitz変更点

beforeValidateでバリデーションのマージ、beforeSaveでエラーがある場合処理の中断をしていた箇所をucmitzではbeforeMarshalの一箇所で対応

### アクティビティ図(例:ContentFolder)

|![アクティビティ図：basercms4系BcContentsBehavior](../../activity/contents/BcContentsBehavior/baser4_contents_create.svg)|![アクティビティ図：ucmitz系BcContentsBehavior](../../activity/contents/BcContentsBehavior/ucmitz_contents_create.svg)|

### シーケンス図(例:ContentFolder)

#### 作成処理

![ドメインモデル図：コンテンツフォルダ作成](../../sequence/contents_create.svg)

#### 編集処理(basercms4系)

![ドメインモデル図：コンテンツフォルダ編集](../../sequence/contents_edit.svg)


#### 削除処理