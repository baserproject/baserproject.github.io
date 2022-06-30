# BcFormTableHelper

## BcFormHelperで生成するフォームで利用できるイベント発火用ヘルパー

### ※作成中 テーブル前発火

```
BcFormTable::dispatchBefore(): string
```

イベントリスナーで設定した処理の実行結果の文字列を取得する。

```
php echo $this->BcFormTable->dispatchBefore();
```

---
