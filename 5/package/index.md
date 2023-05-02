# パッケージ構成

baserCMSのパッケージ構成は、basercms を親パッケージとして、BaserCore、BcAdminThird など必要とするパッケージを CakePHP のプラグインとして開発し、子パッケージとして管理しています。  

 
## コアの構成

### 親パッケージ

Gitでクローンする本体。親パッケージとして baserCMS のアプリケーションフレームを提供します。

- [basercms](https://github.com/baserproject/basercms)

### 子パッケージ
#### コアパッケージ
baserCMSのコア（BaserCore）、デフォルトの管理画面テーマ（BcAdminThird）、デフォルトのフロントテーマ（BcFront）、そしてインストーラー（BcInstaller）は、`/plugins/` 配下に配置し開発しています。   
なお、BaserCore は、主にURLに紐づくルーティングと、ビジネスロジックを提供します。

これらのパッケージは、配布版では Composer でインストールするので `/vendor` 配下に配置されます。
- [BaserCore](https://github.com/baserproject/basercms/tree/dev-5/plugins/baser-core)
- [BcAdminThird](https://github.com/baserproject/basercms/tree/dev-5/plugins/bc-admin-third)
- [BcFront](https://github.com/baserproject/basercms/tree/dev-5/plugins/bc-front)
- [BcInstaller](https://github.com/baserproject/basercms/tree/dev-5/plugins/bc-installer)


 
#### コアプラグイン・コアテーマ
baserCMSのコアパッケージと共にコアに梱包するいくつかのプラグインはコアプラグインとコアテーマもコアパッケージ同様 `/plugins/` 配下に配置し開発しています。

これらのパッケージは、配布版では Composer でインストールするので `/vendor` 配下に配置されます。
- [BcBlog](https://github.com/baserproject/basercms/tree/dev-5/plugins/bc-blog)
- [BcColumn](https://github.com/baserproject/basercms/tree/dev-5/plugins/bc-column)
- [BcMail](https://github.com/baserproject/basercms/tree/dev-5/plugins/bc-mail)
- [BcUploader](https://github.com/baserproject/basercms/tree/dev-5/plugins/bc-uploader)
- [BcEditorTemplate](https://github.com/baserproject/basercms/tree/dev-5/plugins/bc-editor-template)
- [BcThemeConfig](https://github.com/baserproject/basercms/tree/dev-5/plugins/bc-theme-config)
- [BcThemeFile](https://github.com/baserproject/basercms/tree/dev-5/plugins/bc-theme-file)
- [BcWidgetArea](https://github.com/baserproject/basercms/tree/dev-5/plugins/bc-widget-area)



その他のプラグインも同様に、CakePHPのプラグインとしての開発を前提とし、 `/plugins/` 配下内に配置します。  
なお、コアプラグイン、コアテーマ以外のプラグインのロードについて、 Composer でのインストールは不要です。 管理画面でプラグインをインストールする事で利用可能となります。

### プラグインフォルダの命名
コアパッケージ、コアテーマ、コアプラグインについては、ハイフン区切り（dasherize）とし、コアに梱包したサンプルや、その他の外部プラグインについては、アッパーキャメルケースとします。

```
例）
コア：baser-core / bc-admin-third / bc-blog
その他：BcSpaSample
```

## モノレポによるパッケージ管理

複数のパッケージを統合的に管理するためにPHP用のモノレポ 「monorepo-builder」 を利用しています。
リリース時に次のレポジトリに自動分割してコミットします。

Composer の Packagist はこちらのレポジトリに紐付いています。
- [BaserCore レポジトリ](https://github.com/baserproject/baser-core)
- [BcAdminThird レポジトリ](https://github.com/baserproject/bc-admin-third)
- [BcFront レポジトリ](https://github.com/baserproject/bc-front)
- [BcInstaller レポジトリ](https://github.com/baserproject/bc-installer)
- [BcBlog レポジトリ](https://github.com/baserproject/bc-blog)
- [BcColumn レポジトリ](https://github.com/baserproject/bc-column)
- [BcMail レポジトリ](https://github.com/baserproject/bc-mail)
- [BcUploader レポジトリ](https://github.com/baserproject/bc-uploader)
- [BcEditorTemplate レポジトリ](https://github.com/baserproject/bc-editor-template)
- [BcThemeConfig レポジトリ](https://github.com/baserproject/bc-theme-config)
- [BcThemeFile レポジトリ](https://github.com/baserproject/bc-theme-file)
- [BcWidgetArea レポジトリ](https://github.com/baserproject/bc-widget-area)

### 参考文献
[MonorepoBuilderでPHPのモノレポを作るチュートリアル](https://qiita.com/suin/items/421a55bdb009b2ada2d1)


