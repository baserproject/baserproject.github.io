# テンプレートのカスタマイズ

テンプレートの種類には、レイアウトテンプレート、エレメントテンプレート、コンテンツテンプレートの３種類がありますが、ここでは、主にコンテンツの本体を表現するコンテンツテンプレートのカスタマイズについて説明します。

レイアウトテンプレートや、エレメントテンプレートについては、[テーマ用語集](glossary) や、[独自のテーマを作成する](develop_theme) を参考にしてください。

## 固定ページ
固定ページとは、単一で独立したWebページそのものを指し、ツリー形式のフォルダ構造で整理して配置することができます。baserCMS５からは、セキュリティ上の観点より本文欄にPHPコードが埋め込めなくなったため、[ショートコード](short_code) の利用を推奨しています。

### コンテンツテンプレート
固定ページは基本的に、１フィールドのコンテンツを出力するだけの仕組みですが、それを包み込む形でコンテンツテンプレートを配置することができます。

また、固定ページのコンテンツテンプレートは、コンテンツフォルダに指定して、フォルダ内で共通利用したり、各固定ページにて個別に設定することもできます。 例えば、特定のコンテンツフォルダ配下の固定ページについてお問い合わせフォームへのボタンを配置するという事が可能となります。

### テンプレートの設置
固定ページのコンテンツテンプレートは次の場所に配置することで管理システムより認識することができます。

```shell
/plugins/{YourTheme}/templates/Pages/{YourTemplateName}.php
```

### テンプレートの適用
コンテンツフォルダ編集画面、または、固定ページ編集画面の「詳細設定」より変更します。      
※ レイアウトテンプレートは、複数設置することが可能で、初期状態で「default」です。


### テンプレートで利用するタグ
なおコンテンツテンプレートでは、次のコードを記述することでコンテンツ本体を出力することができます。

```php
<?php echo $page->contents ?>
```


## ブログ
baserCMSで提供されるブログプラグインは、複数のブログを同時に設置できる機能をもった高性能ブログです。ただし、WordPress のようにブログシステムから派生したCMSではない為、機能面でブログ専門のシステムに及ばない部分がありますが、フレームワークの拡張性の高さにより、実案件では、クリエイターが必要な機能を自作で追加するなどが可能です。

### コンテンツテンプレート
ブログのコンテンツ用のテンプレートは基本的に、４つのテンプレートで構成されています。

- ブログトップテンプレート・・・index.php
- 記事一覧テンプレート（カテゴリ、月別等）・・・archives.php
- 個別記事テンプレート・・・single.php
- トップページ等記事一覧表示用テンプレート・・・posts.php

### テンプレートの設置
また、初期状態では、baserCMSのパッケージが提供する初期テンプレートを利用する設定となっており、変更するには上記ファイル群を、下記の場所に配置します。

```shell
/plugins/{YourTheme}/templates/plugin/BcBlog/Blog/{コンテンツテンプレート名}/index.php
/plugins/{YourTheme}/templates/plugin/BcBlog/Blog/{コンテンツテンプレート名}/archives.php
/plugins/{YourTheme}/templates/plugin/BcBlog/Blog/{コンテンツテンプレート名}/single.php
/plugins/{YourTheme}/templates/plugin/BcBlog/Blog/{コンテンツテンプレート名}/posts.php

# 次のパスでも動作します
/plugins/{YourTheme}/templates/Blog/{コンテンツテンプレート名}/index.php
/plugins/{YourTheme}/templates/Blog/{コンテンツテンプレート名}/archives.php
/plugins/{YourTheme}/templates/Blog/{コンテンツテンプレート名}/single.php
/plugins/{YourTheme}/templates/Blog/{コンテンツテンプレート名}/posts.php
```

### テンプレートの適用
ブログコンテンツ編集画面の「詳細設定」より変更できます。  
※ コンテンツテンプレート名は、初期状態で「default」です。  
※ コンテンツテンプレート名は、管理システム上で、各ブログの設定より変更できるようになっており、複数のブログを設置した場合、各ブログごとに変更する事ができます。

### テンプレートで利用するタグ
次のようなタグが利用できますが、詳細については、[テーマ関数リファレンス](reference/) にまとめられる予定です。
それまでは、「bc-front」テーマ内のテンプレートを参考にしてください。
```php
// 記事のタイトルを出力する
$this->BcBaser->blogPostTitle($post);
// 記事の本文を主力する
$this->BcBaser->blogPostContent($post, true, false, 46);
```

### posts.php を設置しても反映できない場合
posts.php は、エレメントとして動作させているという特殊な仕様となっており、element フォルダがないと動作しません。  
次のパスに element ディレクトリを配置していください。

```shell
# プラグインフォルダを作成する場合
/plugins/{YourTheme}/templates/plugin/BcBlog/element/
# プラグインフォルダを作成しない場合
/plugins/{YourTheme}/templates/element/
```

## メールフォーム
baserCMSで提供されるメールフォームプラグインは、複数のメールフォームを同時に設置できる機能をもった高性能メールフォームです。管理システムより、フォームの入力欄を独自に定義することができ、バリデーションも細かく設定できます。

### コンテンツテンプレート
メールフォームのコンテンツ用のテンプレートは基本的に、４つのテンプレートで構成されています。

- 入力フォーム・・・index.php
- 確認ページ・・・confirm.php
- 送信完了ページ・・・submit.php
- フォーム受付期間外のページ・・・unpublish.php

### テンプレートの設置
また、初期状態では、baserCMSのパッケージが提供する初期テンプレートを利用する設定となっており、変更するには上記ファイル群を、下記の場所に配置します。

```shell
/plugins/{YourTheme}/templates/plugin/BcMail/Mail/{コンテンツテンプレート名}/index.php
/plugins/{YourTheme}/templates/plugin/BcMail/Mail/{コンテンツテンプレート名}/confirm.php
/plugins/{YourTheme}/templates/plugin/BcMail/Mail/{コンテンツテンプレート名}/submit.php
/plugins/{YourTheme}/templates/plugin/BcMail/Mail/{コンテンツテンプレート名}/unpublish.php

# 次のパスでも動作します。
/plugins/{YourTheme}/templates/Mail/{コンテンツテンプレート名}/index.php
/plugins/{YourTheme}/templates/Mail/{コンテンツテンプレート名}/confirm.php
/plugins/{YourTheme}/templates/Mail/{コンテンツテンプレート名}/submit.php
/plugins/{YourTheme}/templates/Mail/{コンテンツテンプレート名}/unpublish.php
```

### テンプレートの適用
ブログコンテンツ編集画面の「詳細設定」より変更できます。  
※ コンテンツテンプレート名は、初期状態で「default」です。  
※ コンテンツテンプレート名は、管理システム上で、各メールフォームの設定より変更できるようになっており、複数のメールフォームを設置した場合、各メールフォームごとに変更する事ができます。

### テンプレートで利用するタグ
次のようなタグが利用できますが、詳細については、[テーマ関数リファレンス](reference/) にまとめられる予定です。
それまでは、「bc-front」テーマ内のテンプレートを参考にしてください。
```php
// メールフォームの説明文を出力する
$this->BcBaser->mailFormDescription();
// メールフォームの開始タグを出力する
$this->BcBaser->createMailForm($mailMessage, ['url' => $this->BcBaser->getContentsUrl(null, false, null, false) . 'confirm', 'type' => 'file', 'valueSources' => ['context']]);
```

## カスタムコンテンツ
baserCMS５より搭載されたカスタムコンテンツは、オリジナルの表現のコンテンツを独自のフィールドとして定義し、データベースを構築することができる機能です。詳細については、[baserCMS５ツアーのカスタムコンテンツ](../ver5_tour#カスタムコンテンツ) をご覧ください。

### コンテンツテンプレート
カスタムコンテンツのコンテンツ用のテンプレートは基本的に、２つのテンプレートで構成されています。

- 一覧ページ・・・index.php
- 詳細ページ・・・view.php

### テンプレートの設置
また、初期状態では、baserCMSのパッケージが提供する初期テンプレートを利用する設定となっており、変更するには上記ファイル群を、下記の場所に配置します。

```shell
/plugins/{YourTheme}/templates/plugin/BcCustomContent/CustomContent/{コンテンツテンプレート名}/index.php
/plugins/{YourTheme}/templates/plugin/BcCustomContent/CustomContent/{コンテンツテンプレート名}/view.php

# 次のパスでも動作します
/plugins/{YourTheme}/templates/CustomContent/{コンテンツテンプレート名}/index.php
/plugins/{YourTheme}/templates/CustomContent/{コンテンツテンプレート名}/view.php
```

### テンプレートの適用
カスタムコンテンツ編集画面の「詳細設定」より変更できます。  
※ コンテンツテンプレート名は、初期状態で「default」です。  
※ コンテンツテンプレート名は、管理システム上で、各カスタムコンテンツの設定より変更できるようになっており、複数のカスタムコンテンツを設置した場合、各カスタムコンテンツごとに変更する事ができます。

### テンプレートで利用するタグ
次のようなタグが利用できますが、詳細については、[テーマ関数リファレンス](reference/) にまとめられる予定です。
それまでは、「bc-front」テーマ内のテンプレートを参考にしてください。
```php
// エントリーのタイトルを出力する
$this->BcBaser->customEntryTitle($entry);
// エントリーの公開日を出力する
$this->BcBaser->customEntryPublished($entry);
```

## レイアウトテンプレート
固定ページ、ブログ、メールフォーム、カスタムコンテンツは、コンテンツ管理機能の管理下となり、コンテンツ管理機能としてレイアウトテンプレートを個別で変更することが可能です。

### テンプレートの設置
レイアウトテンプレートは次の場所に配置します。

```shell
/plugins/{YourTheme}/templates/layout/{コンテンツテンプレート名}.php
```

### テンプレートの適用
次の各編集画面の「オプション」より変更します。

- 固定ページ編集画面
- ブログコンテンツ設定編集画面
- メールフォーム設定編集画面
- カスタムコンテンツ設定編集画面

※ レイアウトテンプレート名は、初期状態で「default」です。


## コアテーマのコピー
各テンプレートを変更する場合は、不具合をできるだけ避ける為、baserCMSが提供するコアテーマのテンプレートをコピーして修正する事をおすすめします。

コピーの際には、[ファイル読み込みの優先順位](file_priority) を参照してください。   
2023/04/17現在のコアテーマは、「bc-front」になります。
