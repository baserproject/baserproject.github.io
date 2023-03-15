# APIドキュメント作成マニュアル

このマニュアルは、APIの仕様の検証も兼ねてドキュメント作成を実施する事を想定しています。

## ドキュメントの校正

ドキュメントの校正については、[APIドキュメント校正ルール](./api_document_writing_rules) に従います。

## 作成手順

APIドキュメントの作成については、最新版の開発コードでローカル環境を構築し、実際に、APIリクエストを送信しつつ、仕様を確認しながら作成していきます。

### 事前準備を行う

#### ローカル環境を準備する
#### APIの実行環境を準備する
[Talend API Tester](https://chrome.google.com/webstore/detail/talend-api-tester-free-ed/aejoelaoggembcahagimdiliamlcdmfm?hl=ja) など、Chrome上で、簡単にAPIのテストが行えるものを準備します。

#### 管理画面にログインする
管理画面にログインします。  
管理画面にログインした状態であれば、同一セッションの場合、セッション認証にてAPIを送信することができるので、認証に必要なJWTトークンの付与を省略できます。

### 作成対象を選択する
[Web API一覧](https://docs.google.com/spreadsheets/d/1YT5PuZQdDNU0wrZdqYbh74KuLSw1SIt4_EKwPWOfDKA/edit#gid=1129992221) のうち「仕様書」欄に「●」が入力されていないものを選択します。

### API Tester で Service を作る
（Talend API Testerを利用する場合）  
Talend API Tester における Service は整理用のフォルダのようなものです。複数のテストを行う場合、混乱しないように作っておきます。Service 名はコントローラー名にします。  
例）ContentsController の場合、Contents

### API Tester で Request を作る
（Talend API Testerを利用する場合）  
Service の画面から、「Add a request」をクリックし Request を作成します。Request名は、アクション名にします。
例）add / edit / delete

### リクエストを送信する
メソッド名とURLを入力し、まず送信します。  
PHPプログラム側の Warning 等、正常なレスポンスが返って来ない場合、修正できるようであれば修正し、修正しない場合は Issue を作成します。

### GETのテスト
コントローラーアクションのシグネチャー、また、プログラムのサービスクラスを読んで、パスパラメーター、クエリパラメーターを調査します。  
パスパラメーター、クエリパラメーター、リクエストボディについてAPIドキュメントに記載します。

### POST、PATCHのテスト
[データベース設計書]() を参考にリクエストボディを作成し、送信テストを行います。    
パスパラメーター、クエリパラメーター、リクエストボディについてAPIドキュメントに記載します。

#### 入力エラーの対応
add や post のようにデータを保存する場合、データに問題があった場合には、errors キーとして入力エラーの内容を返却します。
もし、バリデーションを通ったデータが不完全な場合には、バリデーションを見直します。

### レスポンス例の記載
API Testerの結果となる JSON をコピーボタンからコピーして、レスポンスボディに貼り付けて調整します。

　

