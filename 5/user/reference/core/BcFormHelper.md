# BcFormHelper

## フォーム作成用の要素の呼び出し

### ※作成中 inputフィールドを生成（Cakeコアをラッピング）

```
BcFormHelper::input(string $fieldName, array $options = []): string
```

フォームで利用するinputタグを出力します。

`$fieldName`

- 入力フィールド名: 「モデル名.フィールド名」で指定

`$options` : [$options:HTML属性指定等の共通オプション](./#$options:HTML属性指定等の共通オプション)

```
echo $this->BcForm->input('SearchIndex.q', ['placeholder' => __('キーワード'), 'escape' => false]);
```

```
<input name="SearchIndex.q" type="text" placeholder="キーワード">
```


---

## ※作成中 $options:HTML属性指定等の共通オプション

TODO: Cake BookのURLを案内し、baser固有内容を掲載する

- `type` - 入力方式を指定。例: テキスト入力型、セレクト型、ラジオボタン型等
- `label` - ラベル用の文字列を指定
- `div` - divタグでラッピングするかどうかを指定
- `options` - セレクト型やラジオボタン型の際の選択肢を配列で指定
- `error` - 入力エラー時のメッセージを指定 `false` の指定でなにも表示しません。配列指定でHTML構造を指定
- `empty` - セレクト型やラジオボタン型の選択初期値を指定
- `before` - ラベル＋表示内容の前に表示する内容を指定
- `after` - ラベル＋表示内容の後に表示する内容を指定
- `between` - ラベルと表示内容の間に表示する内容を指定
- `format` - 表示要素の順番指定。配列に含まれていない要素は出力しません。
  - 未指定時標準: `array('before', 'label', 'between', 'input', 'after', 'error')`
  - 未指定時チェックボックスの標準: `array('before', 'input', 'between', 'label', 'after', 'error')`
  - hidden型の場合適用されません。
  - ラジオボタンでは、入力要素とラベル要素の順序を制御することはできません。
