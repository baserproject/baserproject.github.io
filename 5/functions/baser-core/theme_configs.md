# テーマ設定

テーマのベースカラーやテキストリンクの変更や、ロゴ画像、メイン画像（５枚まで）の変更を管理システムで行う事ができます。

メイン画像には、それぞれ、ALT属性とリンクを設定する事ができます。

**この機能は、各テーマ側が対応している必要があります。**

## テーマカラー設定機能

- テーマにおける色設定を管理システムより変更する事ができます。
- 変更できる色は、メインカラー、サブカラー、テキストリンクカラー、テキストホバーカラーの４種類となっています。
- テーマカラーを設定した場合、`/webroot/files/theme_configs/config.css` として書き出されます。

### テーマの対応方法

メインカラー、サブカラー、テキストリンクカラー、テキストホバーカラーとなる、CSS設定を上書きする為の設定元CSSを作成します。

```shell
/plugins/{YourThemeName}/webroot/css/config.css
```

色の設定部分に次の文字列を埋め込みます。

```css
// 例
#Header {
  border-top-color:MAIN;
}
a {
  color:LINK;
}
a:link {
  color:LINK;
}
a:hover {
  color:HOVER;
}
```

### 注意事項
- テーマ内のCSSを書き換えるのではなく、あくまで設定上書き用のCSSを作成し、両方を読み込むので、条件によっては上書きができない場合があります。その場合、設定元のCSS側のプロパティに `important` を付与する事で対応します。
 - `MAIN`、`SUB` など４つの設定について、全て埋め込む必要はなく、必要な設定だけ埋め込めば大丈夫です。
 - テーマカラーを設定した場合、`$this->BcBaser->scripts()` を利用した箇所にCSSを挿入しますので、読み込み順に注意が必要です。

## テーマ画像切替機能

- ロゴとメインイメージを管理システムのテーマ設定より変更する事ができます。
- メインイメージは、スライド機能などを考慮して５枚まで登録する事ができます。
- 各画像には、リンク先と、alt 属性を設定する事ができます。
- アップロードした画像は、`/webroot/files/theme_configs/` 内に保存されます。

### テーマの対応方法
デフォルト画像を準備します。

- ロゴ - `/themename/img/logo.(gif|jpg|png)`
- メインイメージ - `/themename/img/main_image_num.(gif|jpg|png)`

※ numには1～5の番号が入ります。

ロゴの出力箇所に下記のタグを記述します。
※ 管理画面より設定していない場合はデフォルトの画像を読み込みます。

```php
<?php $this->BcBaser->logo() ?>
```

メインイメージの出力箇所に下記のタグを記述します。
※ 管理画面より設定していない場合はデフォルトの画像を読み込みます。

```php
<?php $this->BcBaser->mainImage() ?>
```

第一引数に、次のオプションを配列で指定する事ができます。

 - num - 取得する画像の番号指定（省略時は１番目）
 - all - 全ての画像を取得するかどうか（リストタグで出力。省略時は false）
 - id - 全ての画像を取得する際に ul タグに付与する id 属性