# トラブルシューティング

## インストール画面のデザインが崩れている場合

テーマへのシンボリックリンクのパスが想定しているパスと異なっている場合は、下記コマンドで再作成すると解消する場合があります。

```shell
# baserCMSの設置パスが /var/www/html の場合
cd /var/www/html
bin/cake plugin assets symlink
```

うまく再作成されない場合は一度webrootフォルダ内のシンボリックリンクを個別に削除後に上記コマンドで再作成してください。

また、Docker環境の場合はDockerコンテナにログインしシンボリックリンクの作成コマンドを実行します。

```shell
docker exec -it bc-php /bin/bash
bin/cake plugin assets symlink
```


{% include looking_for.html %}
