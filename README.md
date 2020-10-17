# temp-simple-nextjs-ts

## simple boilerplate: Next.js & TS & ESLint & Prettier
- Next.js https://nextjs.org/
- TypeScript https://www.typescriptlang.org/
- ESLint https://eslint.org/
- Prettier https://prettier.io/

```bash
npm init next-app temp-simple-nextjs-ts --example "https://github.com/tsuzuki557/temp-simple-nextjs-ts"
# or
yarn create next-app temp-simple-nextjs-ts --example "https://github.com/tsuzuki557/temp-simple-nextjs-ts"

cd temp-simple-nextjs-ts
```


## How to Make Boilerplate

### Next.js

Setup

```bash
npx create-next-app
# or
yarn create next-app
```

### TypeScript

```bash
touch tsconfig.json
```

↑ 
- The contents of the file will be generated automatically by next.js when you run it.
- Next add "baseUrl" to the configuration file.

```bash
yarn add -D typescript @types/react @types/node
```

### ESLint

```bash
npx eslint --init
```

conversational mode
- To check syntax and find problems
- JavaScript modules (import/export)
- React
- Typescript => Yes
- Browser
- JavaScript (The configuration file is in JS format.)
- Would you like to install them now with npm? => Yes (Install the necessary modules)

package.json
```
"lint": "eslint . --ext .js, .ts, .tsx"
```


### Prettier

```bash
yarn add -D prettier eslint-plugin-prettier eslint-config-prettier
```
