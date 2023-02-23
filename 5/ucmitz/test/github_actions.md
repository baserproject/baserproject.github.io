# GitHubActions

ucmitz では、CI（継続的インテグレーション）に、GitHubActions を利用しています。  
コミット時、プルリクエスト作成時に、[GitHubAcions](https://github.com/baserproject/ucmitz/actions) 上で、ユニットテストが自動的に走ります。

ユニットテスト実行時には、[DockerHub](https://hub.docker.com/r/baserproject/basercms/tags) より、コンテナイメージを取得し、開発環境と同じコンテナを作成した上で実行します。

GitHubActions におけるワークフローについては、レポジトリ内の、 
[/.github/workflows/test.yml](https://github.com/baserproject/ucmitz/blob/dev/.github/workflows/test.yml) に記載しています。

 
## トラブルシューティング

### ローカルではユニットテストが成功するのに GitHubActions 上で失敗する

#### コンテナイメージが取得できない

ネットワーク状況によりDockerHub よりコンテナイメージが取得できず失敗する場合があります。

```shell
Head "https://registry-1.docker.io/v2/phpmyadmin/phpmyadmin/manifests/latest": Get "https://auth.docker.io/token?account=githubactions&scope=repository&3Aphpmyadmin%2Fphpmyadmin%3Apull&service=registry.docker.io": EOF
Error: Process completed with exit code 1.
```

時間を空けて、Re-run all jobs で再実行しましょう。


