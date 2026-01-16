# split-invoice-viewer
Split Invoice Viewer

## 概要

- 請求書作成アプリ
- 左側の入力パネルと、右側のプレビューパネルで分割し、各項目がリアルタイムにレンダリングされる
  - 入力パネルでは、各項目をカード形式でグルーピングしている
  - プレビューパネルでは、プレビューの拡大・縮小、印刷を実装している
- `src/hooks/useInvoiceForm.ts`で定義されたデフォルト値を使用する

## 技術スタック

React + TypeScript + Vite

## クイックスタート

### ライセンスキーの設定

`.env.local.example`をコピーして`.env.local`を作成する

```bash
cp -p .env.local.example .env.local
```

`.env.local`に、ライセンスキーを入力する

> [!NOTE]
> ライセンスキーを入力しない場合は、トライアル版として実行します。

### 依存関係のインストール

```bash
npm install
```

### 実行

```bash
npm run dev
```

http://localhost:5173/split-invoice-viewer/

> [!NOTE]
>> Document load is already in progress, cancelling<br>
>
> `StrictMode`を有効にした開発ビルドでは、初回マウントの直後に、再マウントを行う。<br>
> そのため、2回の`Viewer.open`が実行されることにより、上記のwarningが出力される。<br>
> プロダクションビルドでは、これを行わないため、実行コストの心配はない。

### lint

```bash
npm run lint
```

### build

```bash
npm run build
```

### preview

```bash
npm run preview
```

http://localhost:4173/split-invoice-viewer/
