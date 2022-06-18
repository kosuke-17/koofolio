## 作成したディレクトリで git init して、その配下で mkdir してからプロジェクトを入れないと repositoty が異なってしまうからプロジェクト管理が同じディレクトリでできないので注意

# client セットアップ

## 選定技術

### Next.js

[Next.js 公式](https://nextjs.org/docs#automatic-setup)

```Dir:client
npx create-next-app --typescript ディレクトリ名
```

### MUI

[MUI 公式](https://mui.com/)

```Dir:client
npm install @mui/material @emotion/react @emotion/styled @mui/system @mui/icons-material
```

[MUI Styled](https://mui.com/system/styled/)
[MUI Icons](https://www.npmjs.com/package/@mui/icons-material)

### Jest

[Next 公式](https://nextjs.org/docs/testing#setting-up-jest-with-the-rust-compiler)

```Dir:client
npm install --save-dev jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom
```
