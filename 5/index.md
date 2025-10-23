# baserCMS５ 公式ガイド

## baserCMS概要
<div class="topics">
<h3>baserCMSとは？</h3>
<p>baserCMS５は、PHP８、CakePHP５上で動作する、WebAPIを備えたWebサイト開発フレームワークです。</p>

<p>Webサイトに最低限必要となるメールフォームやブログなどのプラグインを「コアプラグイン」として最初から装備しており、それらの「コンテンツ」を一元管理する仕組みが用意されています。管理画面もサイト構造が分かりやすいツリー状の表示となっており、直感的な操作が可能です。また、REST API とカスタムコンテンツを備えており、ヘッドレスCMSとしても利用できます。</p>

<p><a href="https://basercms.net/community/concept" target="_blank">baserCMSプロジェクトのコンセプト</a>も合わせてご覧ください</p>
</div>

　
### Webサイト運営者の方へ

baserCMSの導入を検討されている方で、baserCMSができる事や導入事例を知りたい場合は、
[baserCMSオフィシャルサイト](https://basercms.net) をご覧ください

　
### ライセンス
baserCMSは、[MIT License](https://licenses.opensource.jp/MIT/MIT.html) の元、 自己責任の上、無償でご利用いただけます。

　
### 国産オープンソース
baserCMSは、2009年12月にスタートした福岡発の国産オープンソースCMSです。オープンソースフレームワーク「CakePHP」をベースとし、環境準備の素早さに重点を置いた基本制作支援プロジェクトから誕生しました。

マニュアルなどについて日本語を標準とし、国内コミュニティにて運営しているのも国産オープンソースならではの強みです。[baserCMSコミュニティの歴史](https://basercms.net/community/history) についてこちらよりご覧いただけます。

　
### 機能
baserCMS５より、baserCMS本体をコンパクトにしてメンテナンス性を上げるため、元々備わっていた機能は、「コアプラグイン」としてプラグインに分割されました。

コアプラグインの一覧は次のとおりです。なお、詳細な機能については [baserCMSの機能](functions/index) をご覧ください。

| コアプラグイン名          |  説明  |
|-------------------| ---- |
| BaserCore         |  baserCMS本体。ユーザーやユーザーグループの管理、そして、テーマやプラグインの管理機能を提供します。  |
| BcAdminThird      | デフォルトの管理画面テーマです。独自の管理画面を作成して適用する事も可能です。 |
| BcBlog            | 複数設置可能なシンプルブログです。 |
| BcContentLink     | コンテンツ管理を利用してメニューを生成する場合にメニューにリンクを配置する事ができます。 |
| BcCustomContent   | 複数設置可能で独自フィールドが定義できるコンテンツです。様々なデータ構造を定義し管理画面を自動生成します。 |
| BcEditorTemplate | CKEditorのテンプレート管理機能です。 |
| BcFavorite        | ユーザーごとに管理画面内のお気に入りを登録できる機能です。 |
| BcFront           | デフォルトのフロントテーマです。初期データが２つ入っています。|
| BcInstaller       | baserCMSのインストーラーです。インストール時のみに利用します。 |
| BcMail            | 複数設置可能の高機能メールフォームです。 | 
| BcSearchIndex     | サイト内の横断検索機能です。 |
| BcThemeConfig     | テーマ拡張の設定機能です。利用するにはテーマが対応している必要があります。 |
| BcThemeFile       | テーマ内のファイルを閲覧、編集する事ができる機能です。 |
| BcWidgetArea      | 小さなパーツを簡単に配置できるウィジェットエリアを管理する機能です。 |

　
### baserマーケット
上記のコアプラグイン以外にも、テーマやプラグインを baserマーケットから手に入れることができます。  
baserCMS５で利用できるものはまだまだ少ないですが（2023/03/23 現在）、一度ご覧ください。

- [baserマーケット](market)

　
## 学習内容を選びましょう
学習の進め方は、開発者によってさまざまですが好みに合った学習内容をお選びください。

### baserCMSをインストールする
まずは、baserCMSをインストールしてみましょう。サーバーの準備が必要ですが、標準で提供している Docker を利用すると簡単にインストール環境が構築できます。
- [インストールガイド](introduce/index)
- [サーバーにインストールする](introduce/hosting)
- [ローカル環境を構築する](introduce/build_local_env)

### テーマについて学ぶ
baserCMSで利用するテーマは、baserマーケットからダウンロードできますが、オリジナルのデザインを適用した独自のテーマを作成することもできます。
- [テーマガイド](theme/index)
- [独自のテーマを作成する](theme/develop_theme)

### プラグインについて学ぶ
baserCMSで利用できるプラグインは、baserマーケットからダウンロードできますが、オリジナルのデータベース設計を元に管理画面を作ったりと、独自のプラグインを開発することもできます。
- [プラグインガイド](plugin/index)
- [独自のプラグインを作成する](plugin/develop_plugin)

### WebAPIを利用する
WebAPIを利用してフロントエンドアプリケーションを作成したい方は次のドキュメントをご覧ください。  
- [Web API](web_api/index)
- [baser API](web_api/baser_api/index)
- [独自のWeb API を開発](web_api/develop_api)

## 参加・貢献
### 開発者として参加・貢献する
baserCMS本体の開発に貢献頂ける方は次のドキュメントをご覧ください。  
- [コンセプト・基本方針](contribution/policy/)
- [パッケージ概要](package/)
- [規約](terms/)
- [開発者として参加・貢献する](contribution_developer/)
- [コアの開発](core/)
- [コアテーマの開発](core_theme/)
- [コアプラグインの開発](core_plugin/)

### 開発以外の方法で参加・貢献する
開発だけでなく他にもバグのフィードバックの他、ドキュメント作成、国際化などで貢献する方法があります。
- [開発以外の方法で参加・貢献する](contribution_etc/)
- [ドキュメントの更新](doc_writing/)
- [国際化](i18n/)

### コラボレーターの方へ
baserCMSの開発コラボレーターの方は次のドキュメントをご覧ください。
- [コラボレーターガイド](collaborator/)

## べっしーとは
「べっしー」は、デザイナー「[カネウチカズコ](https://www.facebook.com/kaneuchi.kazuko){:target="_blank"}」作の、baserCMSのオフィシャルマスコットキャラクターです。
[LINEスタンプ](https://store.line.me/stickershop/product/1217064/ja){:target="_blank"} も公開されています。　

<p style="text-align:center">
    <img src="img/bassy.png" alt="べっしー" style="border:none;width:180px" />
</p>




　
