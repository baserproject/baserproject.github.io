# プレビュー

プレビューは記事を公開する前に表示を確認する事ができる機能ですが、ここではプレビューの実装方法を説明します。

 
## プレビューの種類
プレビューには次の４つの種類があります。いづれも管理画面にログインしている事が前提となります。

- **通常プレビュー**: GETでURLを参照する事により、保存済みのDBデータを参照して未公開の記事を確認する事ができる。
- **保存前プレビュー**: 現在、編集中の内容をPOST送信すると、そのデータを利用して記事を確認する事ができる。
- **下書きプレビュー**: 現在、編集中の下書きの内容をPOST送信し、そのデータを利用して記事を確認することができる。
- **エイリアスプレビュー**: エイリアス元の未公開の記事を確認する事ができる。

 
## プレビューモードについて
プレビュー実行時にはURLのクエリストリングに `url` と `preview` を入れる必要があります。

その際、`preview` には `default`、`draft`、`alias` の３つのプレビューモードを設定可能です。  
プレビューモードは、プレビュー実行時の処理内容を振り分ける事に利用できます。

```shell
# URL例：default モード
https://localhost/baser/admin/baser-core/preview/view?
    url=https://localhost/service/service1&
    preview=default
    
# URL例：draft モード
https://localhost/baser/admin/baser-core/preview/view?
    url=https://localhost/service/service1&
    preview=draft
    
# URL例：alias モード
https://localhost/baser/admin/baser-core/preview/view?
    url=https://localhost/service/service1&
    preview=alias
```

## 非公開記事の閲覧条件
管理画面でログイン状態である、かつ、クエリストリング `preview` に何かしらの文字列が設定されていると、非公開状態のコンテンツでもルーティングが成功する仕様となっています。


## PreviewController について
プレビュー時には、`PreviewController` を呼び出します。役割は次のとおりです。

1. クエリストリング `url` をルーティングにより解析してコントローラーとアクション決定
2. 対象コンテンツが提供するサービスクラスのメソッドを呼び出す
3. サービスクラスで指定したテンプレートを呼び出す

## サービスクラスの実装
`PreviewController` は、ルーティングにより決定したコントローラーとアクションによって、サービスクラスのメソッドの実行を行います。  

### サービスクラスの準備
次の命名規則に則ってサービスクラスのメソッドを準備します。

```shell
# サービスクラスとアクション名
{ControllerName}FrontService::setupPreviewFor{ActionName}()
# 例）PagesController の view アクション場合
PagesFrontService::setupPreviewForView()
```
なお、サービスクラスを利用する場合は、インターフェイスとサービスプロバイダーの定義が必要ですのでご注意ください。サービスクラスについて、詳しくは [サービスクラスの利用](./develop_plugin#サービスクラスの利用) をご覧ください。

### アクション内での処理
このメソッドでは引数としてコントローラーを受け取るので、テンプレートの値のセットや、テンプレートの変更などを行うことができます。  
また、`$controller->getRequest()` では、プレビュー対象のURLに基づいたリクエスト情報を受け取る事ができます。

```php
// 例）
class PagesFrontService
{
    public function setupPreviewForView(Controller $controller)
    {
        $request = $controller->getRequest();
        $content = $request->getAttribute('currentContent');
        // DBのデータを取得
        $page = $this->get($content->entity_id);
        // POSTデータによって書き換える
        $page = $this->Pages->patchEntity($page, $request->getData());
        // Viewにセット
        $controller->set([
            'page' => $page
        ]);
        // テンプレートの変更
        $controller->viewBuilder()->setTemplate('etc');
    }
}
```


## 草稿プレビュー
### プレビューモードの取得
CKEditorを利用する場合、本稿モード、草稿モードの切り替えに応じて `<hidden id="ContentPreviewMode" />` に、`default` か `draft`プレビューモードが設定されますので、プレビュー呼び出し時のURL生成にはそちらを利用します。
 
また、上記 hidden タグの id は、 `$this->BcAdminForm->ckeditor()` のオプション、`editorPreviewModeId` で変更が可能となっていますので、複数フィールド配置する場合に、id を変更して対応しましょう。

### データの切り替え
`$request->getQuery('preview')` でモードを取得し、モードに応じて表示に利用するデータを切り替えま
しょう。

```php
// 例
$postArray = $request->getData();
if ($request->getQuery('preview') === 'draft') {
    $postArray['detail'] = $postArray['detail_draft'];
}
```
 
## コンテンツマネージャーAPI におけるプレビューの実装
[コンテンツマネージャーAPI](./contents_manage_api) を利用してコンテンツを開発する場合、`BcAdminContentsComponent` をロードする事で、保存ボタンの左に自動でプレビューボタンを自動配置する仕様となっています。

その際、プレビューボタンをクリックした場合の遷移先は、自動的に `PreviewController` を利用するURLになっていますので意識する必要はありません。

### プレビューモードの切り替え

id `ContentPreviewMode` の hidden タグの value 値をプレビューモードとして送信する仕様となっていますので、変更する場合は、Javascript等で送信前に切り替えておきます。 

```javascript
// JQueryの場合
$("#ContentPreviewMode").val('draft');
```


