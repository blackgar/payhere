# payhere ๊ธฐ์๊ณผ์ 

## ๐ป ํ๋ก์ ํธ ์คํ๋ฐฉ๋ฒ

```
git clone https://github.com/blackgar/payhere.git
cd payhere

env ํ์ผ์ ๋ง๋์  ํ
REACT_APP_API_URL=https://api.github.com/
REACT_APP_ACCESS_TOKEN=๊นํํ ํฐ
์๋ ฅ ํ ์คํํด์ฃผ์๊ธฐ ๋ฐ๋๋๋ค.

npm install
npm start
```

## ๐ ์๊ธฐ์๊ฐ

<table>
    <tr>
        <td height="140px" align="center"> 
          <a href="https://github.com/blackgar">
            <img src="https://avatars.githubusercontent.com/blackgar" width="140px" />
          </a> 
        </td>
        <td>
          ์๋ํ์ธ์ ์ค๊ด์๋๋ค.<br>
        </td>
    </tr>
</table>
<br>

> ## ๋ชฉ์ฐจ

- [ํ๋ก์ ํธ ๊ฐ์](#ํ๋ก์ ํธ-๊ฐ์)
- [๊ธฐ๋ฅ๋ณ ์ค๋ช / Best Practice](#๊ธฐ๋ฅ๋ณ-์ค๋ช--best-practice)
- [๊น/eslint/prettier](#Git)

<br>

> ## ํ๋ก์ ํธ ๊ฐ์

- ์์ฃผ ๋ฐฉ๋ฌธํ๋ GitHub Public Repository๋ฅผ ๋ฑ๋ก/์ญ์  ํ  ์ ์๊ณ  ๋ฑ๋ก๋ ๊ฐ๊ฐ์ Repository์ issue List๋ฅผ ๋ณผ ์ ์๋ ํ์ด์ง ๊ฐ๋ฐ ํ๋ก์ ํธ

> ## ํ๋ก์ ํธ ์๊ตฌ์ฌํญ

- ๊ฒ์์ฐฝ์ Repository๋ช์ ์๋ ฅํด์ Repository๋ฅผ ๊ฒ์ํ  ์ ์๋ค.

- ๊ฒ์๋ Public Repository๋ฅผ ๋ฑ๋กํ  ์ ์๋ค.
  - ๋ฑ๋ก ๊ฐ์๋ ์ต๋ 4๊ฐ๋ก ์ ํํ๋ฉฐ, ์ต๋ ๊ฐ์ ์ด๊ณผ ๋ฑ๋ก ์ ์ด๋ฅผ ์ฌ์ฉ์์๊ฒ ์๋ ค์ค๋ค.
  - ์น์ LocalStorage, ์ฑ์ Async Storage ๋ฑ ๋ก์ปฌ ์ ์ฅ์๋ฅผ ํ์ฉํ๋ค. (์น ํน์ ์ฑ ์ ํ)
- ๋ฑ๋ก๋ Repository๋ฅผ ์ญ์ ํ  ์ ์๋ค.

- ๋ฑ๋ก๋ ๊ฐ๊ฐ์ Public Repository์ issue๋ฅผ ํ ํ์ด์ง์์ ๋ชจ์์ ๋ณผ ์ ์๋ค.
  - ๊ฐ issue ๋ง๋ค ์ ๋ชฉ, Repository ๋ช์ ํ์๋ก ํํ๋์ด์ผ ํ๋ค. ๊ทธ ์ด์ธ์ ๋ฐ์ดํฐ ์ค ํ์ํ๋ค๊ณ  ์๊ฐ๋๋ ๋ถ๋ถ์ ์ถ๊ฐํ๋ค.
  - ํด๋น issue๋ฅผ ํด๋ฆญํ๋ฉด Github์ ์์ธ ํ์ด์ง๋ก ์ด๋ํ  ์ ์๋ค.
  - ํ์ด์ง๋ค์ด์์ ํตํด์ ๊ณ์ํด์ issue๋ฅผ ๋ชจ์์ ๋ณผ ์ ์๋ค.

> ## ์ฌ์ฉ๊ธฐ์ 

 <br/>

<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white">
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white">
<img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
<img src="https://img.shields.io/badge/recoil-3292f7?style=for-the-badge&logo=meta&logoColor=white"> 
<img src="https://img.shields.io/badge/styled-components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">

<br>

> ## ๊ตฌํ ๊ธฐ๋ฅ

### 1. Repository ๊ฒ์ ๊ธฐ๋ฅ

### 2. Repository ๋ฆฌ์คํธ ๊ตฌํ

### 3. Repository ๋ฑ๋ก/์ญ์  ๊ตฌํ

### 4. ๋ฑ๋ก๋ Repository์ Issue ๋ฆฌ์คํธ ๊ตฌํ

> ## ๋ฏธ๊ตฌํ ๊ธฐ๋ฅ

### 1. Pagination ์ ์ฉ

### 2. ๋ฆฌํฉํ ๋ง(๊ณํ)

> ## Git

- <details>
    <summary>๋ธ๋์น ์ ๋ต</summary>

  - Main : ์ต์ข ์์ฑ ์ฝ๋ ์๋ก๋ ๋ธ๋์น
  - front/dev : ๊ธฐ๋ฅ์ด ์์ฑ๋๊ฑฐ๋ ๋ฆฌํฉํ ๋ง์ด ์งํ๋ ๊ธฐ๋ฅ๋ณ ๋ธ๋์น ๋ณํฉ ๋ธ๋์น
  - front/feat/api : API ํธ์ถ ๊ธฐ๋ฅ ๊ตฌํ ๋ธ๋์น
  - front/feat/repository : repository ๊ฒ์ ๋ฐ ๋ฑ๋ก/์ญ์  ๊ธฐ๋ฅ ๊ตฌํ ๋ธ๋์น
  - front/feat/issue : issue ๊ด๋ จ ๊ธฐ๋ฅ ๊ตฌํ ๋ธ๋์น

  </details>

- <details>
    <summary>์ปค๋ฐ ์ปจ๋ฒค์</summary>
    
    - feat : ์๋ก์ด ๊ธฐ๋ฅ ์ถ๊ฐ๋  ๋
    - fix : ๋ฒ๊ทธ ์์ ํ  ๋
    - docs : ๋ฌธ์ ์์ 
    - style : ์ฝ๋ ๋ด์ฉ ๋ณ๊ฒฝ ์์ด ํฌ๋งทํ์ด๋ ์ธ๋ฏธ์ฝ๋ก  ๋ฑ์ ์์ ์ฝ๋ ์คํ์ผ ๋ณ๊ฒฝํ  ๋
    - refactor : ์ฝ๋ ๋ฆฌํฉํ ๋ง ํ์ ๋
    - test : ํ์คํธ ์ฝ๋๋ฅผ ์ถ๊ฐํ๊ฑฐ๋ ๋ฆฌํฉํ ๋งํ  ๋
    - chore : ๋น๋๊ด๋ จ ์์ ์ด๋ ํจํค์ง ๋งค๋์  ์์ ๊ณผ ๊ฐ์ ๊ฐ๋ฐ ํ๊ฒฝ์ ๋ํ ์์ ์ฌํญ์ด ๋ฐ์ํ  ๋
    - remove : ํ์ผ์ด๋ ํด๋ ์ ๊ฑฐํ  ๋
    - rename : ํ์ผ์ด๋ ํด๋ ์ด๋ฆ ๋ณ๊ฒฝํ  ๋
    - move : ํ์ผ์ด๋ ํด๋ ๊ตฌ์กฐ ๋ณ๊ฒฝํ  ๋
    - clean : ์ฝ๋ ํฌ๋งทํ, ๋ํ๋์ ์ ๊ฑฐ, ์ธ๋ฏธ์ฝ๋ก  ๋๋ฝ, ์ฝ๋ ๋ณ๊ฒฝ์ด ์๋ ๊ฒฝ์ฐ
    - deps : ๋ํ๋์ ์ถ๊ฐํ  ๋

  </details>

<br>

> ## Prettier, Eslint

- ### Prettier

```javascript
{
  "printWidth": 100,
  "tabWidth": 2,
  "arrowParens": "avoid",
  "singleQuote": true,
  "endOfLine": "auto"
}
```

- ### Eslint

```javascript
{
  "parser": "@typescript-eslint/parser", // eslint๋ฅผ typescript์์ ์ธ ์ ์๋๋ก ๋ณํ
  "extends": ["react-app", "plugin:@typescript-eslint/recommended", "plugin:prettier/recommended"],
  "plugins": ["@typescript-eslint", "prettier"],
  "ignorePatterns": ["node_modules/"],
  "env": {
    "browser": true,
    "node": true
  },
  "rules": {
    "prettier/prettier": ["error", { "endOfLine": "auto" }],
    "no-var": "warn", // var ๊ธ์ง
    "no-multiple-empty-lines": "warn", // ์ฌ๋ฌ ์ค ๊ณต๋ฐฑ ๊ธ์ง
    "no-console": ["error", { "allow": ["warn", "error"] }], // console.log() ๊ธ์ง
    "eqeqeq": "warn", // ์ผ์น ์ฐ์ฐ์ ์ฌ์ฉ ํ์
    "dot-notation": "warn", // ๊ฐ๋ฅํ๋ค๋ฉด dot notation ์ฌ์ฉ
    "no-unused-vars": "warn", // ์ฌ์ฉํ์ง ์๋ ๋ณ์ ๊ธ์ง
    "react/destructuring-assignment": "warn", // state, prop ๋ฑ์ ๊ตฌ์กฐ๋ถํด ํ ๋น ์ ์ฉ
    "react/jsx-pascal-case": "warn", // ์ปดํฌ๋ํธ ์ด๋ฆ์ PascalCase๋ก
    "react/no-direct-mutation-state": "warn", // state ์ง์  ์์  ๊ธ์ง
    "react/jsx-no-useless-fragment": "warn", // ๋ถํ์ํ fragment ๊ธ์ง
    "react/no-unused-state": "warn", // ์ฌ์ฉ๋์ง ์๋ state
    "react/jsx-key": "warn", // ๋ฐ๋ณต๋ฌธ์ผ๋ก ์์ฑํ๋ ์์์ key ๊ฐ์ 
    "react/self-closing-comp": "warn", // ์ํ ํด๋ก์ง ํ๊ทธ ๊ฐ๋ฅํ๋ฉด ์ ์ฉ
    "react/jsx-curly-brace-presence": "warn" // jsx ๋ด ๋ถํ์ํ ์ค๊ดํธ ๊ธ์ง
  }
}

```

<br>
