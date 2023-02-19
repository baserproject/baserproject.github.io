# REST API

## コアのAPIの有効化
baserCMSコアが提供する Web APIを有効化するには、`/config/.env` の `USE_CORE_API` の値を `true` に設定します。

　
## コアのAPIの利用
baserCMSのコアが提供する Web API は、認証方式において JWT を利用します。   
[REST API を利用する](https://github.com/baserproject/ucmitz/wiki/ucmitz%E3%81%AE-REST-API-%E3%82%92%E5%88%A9%E7%94%A8%E3%81%99%E3%82%8B) を参考にします。

　
## 独自のAPIを開発する
独自のAPIを開発するには、[プレフィックス認証](./prefix_auth) を利用すると JWT認証と RESTful なルーティングを簡単に実装する事ができます。

　
## 管理システムからAPIへのアクセス
管理システムでは内部的にAJAXによるAPIへのアクセスを行っており、`USE_CORE_API` に関わらず、例外的にアクセスを許容します。

`USE_CORE_API` が `false` に設定されているにも関わらず、アクセスが可能となる条件は次のとおりです。

- プレフィックスが `Api` である
- 管理システムへのログインが完了している
- リファラが自身のサイトである
