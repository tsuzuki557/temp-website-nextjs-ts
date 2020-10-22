# temp-website-nextjs-ts

website boilerplate: Next.js & TS & ESLint & Prettier for website coding

- Next.js https://nextjs.org/
- TypeScript https://www.typescriptlang.org/
- ESLint https://eslint.org/
- Prettier https://prettier.io/

セットアップ

```bash
mkdir my-site
cd my-site
npx degit tsuzuki557/temp-website-nextjs-ts#main
```

依存パッケージのインストール

```bash
yarn
```

開発・ビルド・エクスポート

```bash
yarn dev <= 開発・ホットリロード
yarn build <= ビルド生成
yarn start <= ビルド生成後の確認
yarn export <= ビルド & 静的ページエクスポート（公開ファイル） /dist/出力に変更している
```

その他
```bash
yarn lint
yarn lint:fix
yarn clean <= 削除(dist .next)ツール
```

## How to Make Boilerplate

- base 
- https://github.com/tsuzuki557/temp-simple-nextjs-ts

- sass: Scss利用
- node-sass-glob-importer： Scssファイルのimport`/**/**.scss`読込用
  - next.config.js設定必要
- babel-plugin-inline-react-svg: inline SVGのパーサ用
  - .babelrc設定必要
  - TS用にindex.d.tsを設定必要
- rimraf: 削除ツール（dist .nextを削除）
  - OSに依存しない`rm -rf`コマンドを実現するNPMパッケージ

## ディレクトリ構成
- src/components <= コンポーネント
  - layout.tsx
- src/pages <= ルーティング（※ディレクトリ名変更不可）
  - _app.tsx <= 特殊ファイル（全ページ共通で呼ばれるコンポーネント ※グローバルCSS ※ディレクトリ名変更不可）※共通設定
  - _document.js <= 特殊ファイル（カスタムドキュメント ※ディレクトリ名変更不可）
- src/assets <= import読み込み（グローバルCSS、JS(TS)、画像、inline svgなど)
  - scss
  - js
  - svg
- public <= 画像、フォントなど静的ファイル配置（※ディレクトリ名変更不可）
- dist <= 納品ファイル（※yarn exportで自動出力）
- .next <= ビルド出力（※yarn buildで自動出力）

※/src/はなくても可（他のフレームワークなどの慣習に則っている）

--- 

## package.json tools version upgrade

first

```bash
yarn global add npm-check-updates
```

use

```bash
npm-check-updates -u
```