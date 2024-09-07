# Composer との連携

baserCMSでは、インストールやアップデートの際に、Composer を利用しています。  
ここではその際の利用方針や内部的な処理を示します。

## 利用方針
インストール時及び、アップデート時には、lock ファイルを利用することを前提とします。  
これは依存ライブラリがアップデートされてしまい、baserCMSが動作しなくなる可能性があるためです。

## 配布版作成時の内部の処理
開発版の composer.json と composer.lock を元に require で最新パッケージを追加し composer.lock を更新し、それを梱包して配布します。

```
composer require baserproject/basercms:5.1.1 --with-all-dependencies --ignore-platform-req=ext-xdebug
```

## インストール時の内部の処理
インストール時には、composer install を利用して、lock ファイルを元にパッケージをインストールします。  
また、xdebug が有効化されていない場合でも実行できるように ` --ignore-platform-req=ext-xdebug` オプションを付与しています。

```
composer install --ignore-platform-req=ext-xdebug
```

## アップデート時の内部の処理
ユーザーが導入後に、Composer で他のパッケージを入れた可能性があるため、アップデート時にも、composer.lock を利用して require でインストールします。

```
composer require baserproject/basercms:5.1.1 --with-all-dependencies --ignore-platform-req=ext-xdebug
```

