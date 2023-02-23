# カスタムフィールドタイプ

カスタムコンテンツでは、カスタムフィールドタイプをカスタムコンテンツ専用のプラグインとして開発します。  
カスタムフィールドの編集画面にて「タイプ」として認識させるためには、対象プラグイン配下の `/config/setting.php` にタイプの設定を定義します。

## 設定の定義
- `fieldTypes`: カスタムフィールドのタイプの設定、プラグインごとに１つ定義でき、キーはプラグイン名と同じにする
  - `category`: タイプのセレクトボックスにおけるグループ（基本|日付|選択|コンテンツ|その他）
  - `label`: 見出しラベル
  - `columnType`: DBのカラム型
    CakePHPの ConnectionManager で認識できるもので指定
  - `controlType`: コントロールのタイプ（検索時の条件生成などに利用）  
    CakePHPの FormHelper で認識できるもので指定
  - `preview`: プレビューに対応しているかどうか（デフォルト false）
  - `useDefaultValue`: 初期値の利用（デフォルト true）
  - `useSize`: 横幅の利用（デフォルト false）
  - `useMaxLength`: 最大文字数の利用（デフォルト false）
  - `useAutoConvert`: 自動変換の利用（デフォルト false）
  - `useCounter`: カウンターの利用（デフォルト false）
  - `usePlaceholder`: プレースホルダーの利用（デフォルト false）
  - `useCheckEmail`: Eメール形式チェックの利用（デフォルト false）
  - `useCheckEmailConfirm`: Eメール比較チェックの利用（デフォルト false）
  - `useCheckNumber`: 数値チェックの利用（デフォルト false）
  - `useCheckHankaku`: 半角チェックの利用（デフォルト false）
  - `useZenkakuKatakana`: 全角カタカナチェックの利用（デフォルト false）
  - `useZenkakuHiragana`: 全角ひらがなチェックの利用（デフォルト false）
  - `useCheckDatetime`: 日付チェックの利用（デフォルト false）
  - `useCheckRegex`: 正規表現チェックの利用（デフォルト false）
  - `useCheckMaxFileSize`: ファイルアップロードサイズ制限の利用（デフォルト false）
  - `useCheckFileExt`: ファイル拡張子チェックの利用（デフォルト false）
  - `loop`: ループ機能に対応しているかどうか（デフォルト false）

```php
// 設定例
return [
    'BcCustomContent' => [
        'fieldTypes' => [
            'BcCcText' => [
                'category' => '基本',
                'label' => 'テキスト',
                'columnType' => 'string',
                'controlType' => 'text',
                'preview' => true,
                'useSize' => true,
                'useMaxLength' => true,
                'useAutoConvert' => true,
                'useCounter' => true,
                'usePlaceholder' => true,
                'useCheckEmail' => true,
                'useCheckEmailConfirm' => true,
                'useCheckNumber' => true,
                'useCheckHankaku' => true,
                'useCheckZenkakuKatakana' => true,
                'useCheckZenkakuHiragana' => true,
                'useCheckDatetime' => true,
                'useCheckRegex' => true,
                'useCheckMaxFileSize' => false,
                'useCheckFileExt' => false,
                'useDefaultValue' => true,
                'loop' => true
            ]
        ]
    ]
];
```
