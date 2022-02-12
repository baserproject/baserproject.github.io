# トラブルシューティング

---
## Vagrantのマウントが正常に行われない

### トラブル内容
環境を構築する際、以下のようなエラーに遭遇し、マウントが行われない場合があります。
```
==> default: .FileNotFoundError: [Errno 2] No such file or directory: '/vagrant/docker/docker-compose.yml'
The following SSH command responded with a non-zero exit status.
Vagrant assumes that this means the command failed!

 /usr/local/bin/docker-compose-1.25.4  -f "/vagrant/docker/docker-compose.yml" up -d

Stdout from the command:

Stderr from the command:

.FileNotFoundError: [Errno 2] No such file or directory: '/vagrant/docker/docker-compose.yml'
```

または

```
The following SSH command responded with a non-zero exit status.
Vagrant assumes that this means the command failed!

umount /mnt

Stdout from the command:

Stderr from the command:

umount: /mnt: not mounted
```

　
### 解決法

OSのカーネルが古いため最新のGuest Additionsをインストールできないことが原因です。

```
vagrant ssh -c 'sudo yum update -y kernel'
```

上記のコマンドを実行してゲストOS側のカーネルを更新してください。

```
vagrant reload
```

上記コマンドでvagrantを再起動すればGuest Additionsも更新されます。

---
## SoftDeleteTraitが見つからない

### トラブル内容

```
Error: Fatal Error (1): Trait 'SoftDelete\Model\Table\SoftDeleteTrait' not found in [/var/www/html/plugins/baser-core/src/Model/Table/ContentsTable.php, line 37]
```
### 解決法

次のコマンドを実行してパッケージを追加します。
```
docker exec -it bc5-php /bin/bash
composer update --prefer-source
```

---
## localhostの初期ページにて内部エラーが起こる場合

### トラブル内容

```
Error: An Internal Error Has Occurred
```
### 解決法

データベースbasercmsで以下の箇所を変更します
- contentsテーブルのCore→BaserCore(plugin)に変更
- site_configテーブルのbc_sample→BcSample(value)に変更
- siteテーブルのbc_sample→BcFront(theme)に変更

---

## gulp-pumlにてplantUMLのコンパイルが失敗する場合

### トラブル内容

```
No @startuml found
```
### 解決法

```
// plantuml.jarをダウンロード
sudo curl -JLO http://sourceforge.net/projects/plantuml/files/plantuml.jar/download

// manage_contents.pumlの場合
// -verboseで詳細表示 -o 出力先指定 -tsvg svg画像フォーマット指定
java -jar plantuml.jar -verbose -o "../../../../../../5/ucmitz/svg/class"  "src/puml/5/ucmitz/svg/class/manage_contents.puml"  -tsvg 
```

---
