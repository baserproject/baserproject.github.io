# パッケージ構成

ucmitz を親パッケージとして、BaserCore、BcAdminThird など必要とするパッケージを CakePHP のプラグインとして開発し、子パッケージとして管理しています。  

　
## コアの構成

### 親パッケージ

Gitでクローンした本体。親パッケージとして ucmitz のアプリケーションフレームを提供します。

- [ucmitz](https://github.com/baserproject/ucmitz) 

　

### コアパッケージ

baserCMSのコア（BaserCore）、デフォルトの管理画面テーマ（BcAdminThird）、デフォルトのフロントテーマ（BcFront）、そしてインストーラー（BcInstaller）は、CakePHPのプラグインとしての開発を前提とし、`/plugins/` 配下に配置する仕様としています。   
BaserCore は、主にURLに紐づくルーティングと、ビジネスロジックを提供します。
- [BaserCore](https://github.com/baserproject/ucmitz/tree/dev/plugins/baser-core)
- [BcAdminThird](https://github.com/baserproject/ucmitz/tree/dev/plugins/bc-admin-third)
- [BcFront](https://github.com/baserproject/ucmitz/tree/dev/plugins/bc-front)
- [BcInstaller](https://github.com/baserproject/ucmitz/tree/dev/plugins/bc-installer)

　
### コアプラグイン
baserCMSのコアパッケージと共にコアに梱包するいくつかのプラグインはコアプラグインとして、`/plugins/` 配下に配置する仕様としています。

- [BcBlog](https://github.com/baserproject/ucmitz/tree/dev/plugins/bc-blog)
- [BcMail](https://github.com/baserproject/ucmitz/tree/dev/plugins/bc-mail)
- [BcUploader](https://github.com/baserproject/ucmitz/tree/dev/plugins/bc-uploader)
- [BcEditorTemplate](https://github.com/baserproject/ucmitz/tree/dev/plugins/bc-editor-template)
- [BcThemeConfig](https://github.com/baserproject/ucmitz/tree/dev/plugins/bc-theme-config)
- [BcThemeFile](https://github.com/baserproject/ucmitz/tree/dev/plugins/bc-theme-file)
- [BcWidgetArea](https://github.com/baserproject/ucmitz/tree/dev/plugins/bc-widget-area)

その他のプラグインも同様に、CakePHPのプラグインとしての開発を前提とし、 `/plugins/` 配下内に配置します。  
なお、コアパッケージ、コアテーマ以外のプラグインのロードは、 composer でのインストールは不要で、管理画面でプラグインをインストールする事で利用可能となります。

　

### プラグインフォルダの命名

コアパッケージ、コアテーマ、コアプラグインについては、ハイフン区切り（dasherize）とし、その他のプラグインについては、アッパーキャメルケースとします。

```
例）
コア：baser-core / bc-admin-third / bc-blog
その他：BcSpaSample
```

　

## モノレポによるパッケージ管理

複数のパッケージを統合的に管理するためにPHP用のモノレポ 「monorepo-builder」 を利用しています。
リリース時に次のレポジトリに分割してコミットされます。

- [ucmitz ソースコード / baserproject/ucmitz](https://github.com/baserproject/ucmitz/tree/master)
- [BaserCore ソースコード / baserproject/baser-core](https://github.com/baserproject/baser-core/tree/master)
- [BcAdminThird ソースコード / baserproject/bc-admin-third](https://github.com/baserproject/bc-admin-third/tree/master)

　

### 統合的なパッケージ管理

子パッケージの `composer.json` 記述したパッケージは、`monorepo-builder` により、親パッケージの `composer.json` にまとめあげることができ、`vendor` ディレクトリも親の `vendor` で統合的に管理することができます。

そのため、子パッケージの `composer.lock` と `vendor` ディレクトリは利用しません。（.gitignore で除外済です）

　
### 子パッケージの composer の構成を変更する

子パッケージの `composer.json` を変更した場合は、次のコマンドを実行して親パッケージにまとめあげる必要があります。

```
vendor/bin/monorepo-builder merge
```

　
### パッケージのリリース
モノレポを使うことで、GitHub 上のパッケージごとのレポジトリへ、一括でリリースすることができます。
ただし、子パッケージは、読み取り専用の扱いとします。

子パッケージのリリースを行う場合は、次のコマンドを実行します。

```
vendor/bin/monorepo-builder release [バージョン番号]
```

　
### 参考文献

[MonorepoBuilderでPHPのモノレポを作るチュートリアル](https://qiita.com/suin/items/421a55bdb009b2ada2d1)
