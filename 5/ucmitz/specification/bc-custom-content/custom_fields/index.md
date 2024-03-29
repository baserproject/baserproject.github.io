# カスタムフィールド設計書

独自コンテンツに対するフィールドを定義できる機能です。

## ユースケース図

![ユースケース図：カスタムフィールド](../../../svg/use_case/bc-custom-content/custom_fields.svg)

 
## 管理機能
### 一覧
カスタムフィールドを一覧で表示する。
#### 有効化
カスタムフィールドを有効化する。
#### 無効化
カスタムフィールドを無効化する。
#### コピー
カスタムフィールドをコピーする。コピーの際、カスタムエントリーテーブルのフィールドも追加する。
#### 削除
カスタムフィールドを削除する。削除の際、メッセージテーブルのフィールドも削除する。
#### 並べ替え
カスタムフィールドの表示順を並べ替える。
#### 一括処理
一括処理として次の機能を提供する。
- 削除
- 有効化
- 無効化

### 新規追加
新しいカスタムフィールドを追加する。追加の際、カスタムエントリーテーブルのフィールドも追加する。  


### 編集
既存のカスタムフィールドの設定を編集する。編集の際、フィールド名が変更となった場合は、カスタムエントリーテーブルのフィールド名も変更する。

### 削除
既存のカスタムフィールドを削除する。削除の際に次の処理を行う。
- カスタムエントリー上の該当フィールド削除
- 該当フィールドに関連づく関連フィールドの削除

 
## フィールドタイプ　
テキスト、テキストエリア、ラジオボタンなどのフィールドタイプは、プラグイン内直下の plugins ディレクトリ内で、個別にプラグインとして管理する。

config.php において、`type` に `BcCustomContentPlugin` と定義すると、カスタムコンテンツプラグインで読み込む事ができるプラグインとして認識される。  
詳細については [カスタムフィールドタイプ](./custom_field_type) を参照

### 初期状態で提供するフィールド
- 基本
  - Eメール
  - 隠しフィールド
  - パスワード
  - 電話番号
  - テキスト
  - テキストエリア
- 日付
  - 日付（年月日）
  - 日付（年月日時間）
- 選択
  - チェックボックス
  - マルチチェックボックス
  - 都道府県リスト
  - ラジオボタン
  - 関連データ
  - セレクトボックス
- コンテンツ
  - ファイル（2023/02/23 未対応）
  - Wysiwygエディタ
- その他
  - グループ
  - 自動補完郵便番号

独自のカスタムコンテンツプラグインも開発を可能とする。

 
## 入力チェック
エントリーにおける入力チェックとして次のものを提供する。
- 形式チェック：Eメール、数値、半角英数、全角カタカナ、全角ひらがな、日付の形式チェック。
- Eメール比較チェック：別のフィールドと値が同じかどうか確認する。
- ファイルアップロードサイズ制限：ファイルフィールドにおけるアップロードサイズの制限を指定できる。
- ファイル拡張子チェック：ファイルフィールドにおいてアップロードするファイルの拡張子を複数指定する事ができる。

 
## 正規表現チェック
エントリーにおける入力チェックとして正規表現を指定したチェックができる。  
スラッシュで囲まない文字列を入力する前提とする。  
なお、エラーとなった場合のエラーメッセージも設定できる。

 
## 自動変換
エントリーにおける入力変換として次のもの選択できる
- 半角変換
- 全角変換

 
## ドメインモデル図
![ユースケース図：カスタムフィールド](../../../svg/domain_model/bc-custom-content/custom_fields.svg)

 
## クラス図
### 管理画面
![ユースケース図：カスタムフィールド](../../../svg/class/bc-custom-content/manage_custom_fields.svg)

 
### API
![ユースケース図：カスタムフィールド](../../../svg/class/bc-custom-content/api_custom_fields.svg)
