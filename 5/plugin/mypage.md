# マイページの開発

マイページの開発は [プレフィックス認証](./prefix_auth) を利用して行うと迅速に開発することができます。

## ユーザー情報の保存先の決定
まずは、マイページにログインすることができるユーザー情報の保存先を決定します。  
baserCMSで管理している users テーブルに保存する場合は特に何もする必要はありません。

そうでない場合は、DBテーブルの作成と、テーブルクラスを作成しましょう。  

## プレフィックス認証の設定
[プレフィックス認証](./prefix_auth) を参考に、マイページ用のプレフィックス認証の設定を記述します。

### テーブルクラスとセッションキーの変更
users テーブル以外を利用する場合は、 `userModel` に、作成したテーブルクラスを指定します。 また、 `sessionKey` も別のものに変更することをおすすめします。

### エンティティの設定
users テーブル以外を利用する場合、そのテーブルで利用するエンティティにて、`UserInterface` を実装する必要があります。

### ホワイトリストの設定
マイページについてログインしているユーザーのみしかアクセスできないようにするには、認証設定をホワイトリストにする必要があります。 `permissionType` を `1` に設定します。

### ユーザーグループとアクセスルールの設定
初期の状態では、baserCMSで管理している `UserGroups` と紐づく事を前提としています。  
`UserGroups` と紐づくことによって、アクセスルールが利用できるようになるのですが、`UserGroups` と紐づけたくない場合は、認証設定の `requirePermission` を `false` に設定します。

## マイページの作成
プレフィックス認証の設定さえ完了できれば、あとは特別なことは特にありません。

通常のCakePHPアプリケーションと同様に、コントローラー、テーブル、
エンティティ、ビューテンプレート等を作成していきます。
