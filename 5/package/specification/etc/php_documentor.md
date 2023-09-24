# phpDocumentor

baserCMSでは、[クラスリファレンス](https://baserproject.github.io/5/plugin/reference/) の作成に [phpDocumentor](https://www.phpdoc.org/) を使用しています。

## デプロイ
リリース時に、GitHub Actions によって自動的にクラスリファレンスが生成されます。

デプロイの設定は、`.github/workflows/php_documentor.yml` に記述されています。

なお、デプロイの流れは次のとおりです。

1. Docker を使用して、phpDocumentor を実行するコンテナを起動します。
2. phpDocumentor によって、クラスリファレンスが生成されます。
3. 生成されたクラスリファレンスを、[baserproject.github.io](https://github.com/baserproject/baserproject.github.io) レポジトリに、git push することでデプロイします。



