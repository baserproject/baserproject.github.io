# コンテンツリンク設計書

コンテンツリンクとは、コンテンツ管理のメニュー機能を利用して、メニュー内にサイトの内外へのリンクを配置する機能です。
　
## ユースケース図
![ユースケース図：コンテンツリンク](../../../svg/use_case/bc-content-link/content_links.svg)

　
## 機能

### フロントページのメニューに任意のリンクを配置
コンテンツ管理よりリンクを配置すると、コンテンツ管理により自動生成されたメニューに他のコンテンツと同様に配置される。  
メニューのリンクをクリックすると、指定したリンク先URLにリダイレクトする。

　
## ドメインモデル図
![ドメインモデル図：コンテンツリンク](../../../svg/domain_model/bc-content-link/content_links.svg)

　
## クラス図
### コンテンツリンク管理
![クラス図：固定ページ](../../../svg/class/bc-content-link/manage_content_links.svg)

　
### コンテンツリンクAPI
![クラス図：固定ページAPI](../../../svg/class/bc-content-link/api_content_links.svg)


　

