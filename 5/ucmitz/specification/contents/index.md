# コンテンツ設計書

## ユースケース図

![ユースケース図：コンテンツ管理](../../svg/use_case/contents.svg)

## ドメインモデル図

![ドメインモデル図：コンテンツフォルダ](../../svg/domain_model/content_folders.svg)
![ドメインモデル図：コンテンツフォルダ編集](../../svg/sequence/contents_edit.svg)
## クラス図

![クラス図：コンテンツ管理](../../svg/class/manage_contents.svg)
![クラス図：APIコンテンツ管理](../../svg/class/api_contents.svg)
![クラス図：コンテンツフォルダ管理](../../svg/class/manage_content_folders.svg)

## 特性
  - [論理削除機能](./soft_delete)
  - [ツリー構造機能](https://book.cakephp.org/4/ja/orm/behaviors/tree.html)
  - [コンテンツ管理用ビヘイビア](./bc_contents_behavior)
  - [コンテンツ管理用コンポーネント](./contents_component)

