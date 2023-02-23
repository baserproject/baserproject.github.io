# カスタムエントリー設計書

カスタムエントリーを管理することができる。

## ユースケース図
<!--
![ユースケース図：カスタムエントリー](../../../svg/use_case/bc-custom-field/custom_posts.svg)
-->
作成中
 
## 機能
### カスタムエントリー一覧を表示する
管理画面にてカスタムエントリーの一覧を表示する。ページネーションや表示件数の切り替え機能を提供する。
  
ID / タイトル / スラッグ / 公開状態のほか、関連フィールド設定にて、「エントリー一覧に項目を表示する」にチェックが入っているカラムを表示する。

表示名称フィールドに設定されているカラムの表示の場合は、編集画面へのリンクを設定する。

#### 検索機能
次の項目で検索ができる。
- タイトル
- 公開状態
- 作成者

#### 機能
一覧では次の機能を提供する。
- コピー
- 削除
- 公開状態の切り替え

#### 一括処理
指定したカスタムエントリーについて一括にて次の処理ができる。
- 削除
- 公開状態に設定
- 非公開状態に設定

 
### カスタムエントリーを作成する
新しいカスタムエントリーを作成する。

#### スラッグ
スラッグを利用するとURLにエントリーIDでなく、スラッグを利用する事ができる。  
スラッグについては数値のみはバリデーションエラーとする。

 
### カスタムエントリーを編集する
既存のカスタムエントリーの内容を変更する。スラッグを変更した場合は、URLも変更となるので注意が必要。

### カスタムエントリーを削除する
既存のカスタムエントリーを削除する。

### フロントの記事一覧を表示する
URLを指定して対象となるカスタムコンテンツのカスタムエントリー一覧を表示する。  
１ページあたり、所属するカスタムコンテンツで設定された記事数を表示する。  
また、並び順は、所属するカスタムコンテンツで設定された並び順とする。

### フロントの記事詳細を表示する
URLを指定して対象となるブログの記事の詳細を表示する。

```shell
# スラッグなし
/{カスタムコンテンツ名}/view/{記事NO}

# スラッグあり
/{カスタムコンテンツ名}/view/{スラッグ}
```

#### テンプレート
カスタムコンテンツで設定したコンテンツテンプレートを利用します。
```shell
# default の場合
/templates/CustomContent/default/view.php
```

#### ヘルパ
ヘルパを利用する事でエントリーのフィールドの値を取得する事ができます。
```php
echo $this->CustomContent->getFieldValue($entry, 'field_name');
```
ループフィールドを利用している場合の利用例は次のとおりです。
```php
// ループフィールドかどうか判定
$isLoop = $this->CustomContent->isLoop($customEntry, 'group_normal');
// 子のエントリーを取得
$entryChildren = $this->CustomContent->getFieldValue($customEntry, 'group_normal');
// 子のフィールド定義を取得
$linkChildren = $this->CustomContent->getLinkChildren($customEntry, 'group_normal');
if ($isLoop && $entryChildren && $linkChildren) {
    foreach($entryChildren as $entryChild) {
        foreach($linkChildren as $linkChild) {
            echo $this->CustomContent->getFieldValue($entryChild, $linkChild->name);
        }
    }
}
```
 
## ドメインモデル図
<!--
![ユースケース図：カスタムエントリー](../../../svg/domain_model/bc-custom-field/custom_posts.svg)
-->
作成中

 
## クラス図
### 管理画面
<!--
![ユースケース図：カスタムエントリー](../../../svg/class/bc-custom-field/manage_custom_posts.svg)
-->
作成中

 
### API
<!--
![ユースケース図：カスタムエントリー](../../../svg/class/bc-custom-field/api_custom_posts.svg)
-->
作成中
