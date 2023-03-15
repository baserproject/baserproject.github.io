# baserCMS５ベータテスト

baserCMS５のベータテストにご興味を持って頂きありがとうございます。  
ご協力頂ける方は、こちらのドキュメントを参考にしてください。

なお、このドキュメントからリンクされているページにおける「ucmitz」というのは baserCMS５の開発コードネームです。「baserCMS」に読み替えてください。

## ベータテストの期間
**2023年3月15日〜4月14日**  

ベータテスト期間前でもパッケージを取得する事は可能ですが、バグがまだまだ多い可能性が高く、テストにならない場合があります。  
ベータテストへの参加は、期間内での参加をおすすめします。

## ベータテスト流れ
おおまかに次の流れにてベータテストにご参加ください。

1. パッケージを取得 
2. 環境を構築する 
3. 動かしてみる 
4. 不具合や要望を報告する

## パッケージの取得
次のいづれかの方法でパッケージを取得します。

- [GitHub](https://github.com/baserproject/ucmitz) より `git clone` する
- [GitHub](https://github.com/baserproject/ucmitz) より zip ダウンロードする
- [CakePHPのプロジェクトより composer で取得する](https://github.com/baserproject/ucmitz/wiki/ucmitz%E3%82%92CakePHP4%E3%81%AE%E3%83%97%E3%83%AD%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E3%81%A7%E5%88%A9%E7%94%A8%E3%81%99%E3%82%8B)

## 環境を構築する
要件を満たせばレンタルサーバーでも動作しますが、標準提供の Docker 環境でもテストは行なえます。

### レンタルサーバー要件
- PHP8.0以上
- php-intl が利用できる事
- composer が利用できる事

### Docker で環境構築
[開発環境の構築](./preparation/environment) を参考にしてください。

## 動かしてみる
[機能要件一覧](https://docs.google.com/spreadsheets/d/1YT5PuZQdDNU0wrZdqYbh74KuLSw1SIt4_EKwPWOfDKA/edit#gid=0) を参考に、実際にブラウザで動かしてテストを行います。

### テスト例
- インストーラーを実行してインストールする（[baserCMS５インストール手順](./preparation/installer) を参考）
- コンテンツ管理でブログを作成し記事を作成する
- コンテンツ管理でメールを作成しフォーム送信を行う
- カスタムコンテンツでテーブルを作成しエントリーを作成する
- APIを呼び出して結果を取得する
- テーマを作成する
- プラグインを作成する
- etc...

### 新機能の使い方
- [REST API](./specification/baser-core/common/rest_api)
- [カスタムコンテンツ](./etc/custom_content)

なお、REST APIについて、API仕様書は現在準備中となりますが、APIの全体像は、[Web API一覧](https://docs.google.com/spreadsheets/d/1YT5PuZQdDNU0wrZdqYbh74KuLSw1SIt4_EKwPWOfDKA/edit#gid=1129992221)より確認できます。

## ドキュメント
現在、ドキュメントについては、[baserCMS５公式ガイド](../index) を準備中ではありますが、残念ながら4月の完成予定となっています。

現時点では、開発版の開発ドキュメントである [ucmitz 開発への貢献方法](../ucmitz/) を参考にしてください。  

## 不具合や要望を報告する
不具合や要望がありましたら、GitHubか、ユーザーズフォーラムで報告をお願いします。

- [GitHub Issue](https://github.com/baserproject/ucmitz/issues)
- [ユーザーズフォーラム baserCMS５ベータテスト](https://forum.basercms.net/c/basercms5-beta-test/16)

また、ベータテストを実施する際の質問についても受け付けています。  
[ユーザーズフォーラム baserCMS５ベータテスト](https://forum.basercms.net/c/basercms5-beta-test/16) より質問してください。

あなたがエンジニアであれば、ぜひ、プルリクエストを送ってください。  
（プルリクエストは `dev` ブランチ宛にお願いします）

　

**ありがとう！あなたのお陰でパッケージが成長します🎉**

　
　
