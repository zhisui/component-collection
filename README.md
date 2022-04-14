# Vue 3 + Typescript + Vite 模板搭建

### 搭建 Vite +Vue 项目

参考[vite 官方文档教程](https://cn.vitejs.dev/guide/#scaffolding-your-first-vite-project)

```
# npm 6.x
npm create vite@latest my-vue-app --template vue

# npm 7+, extra double-dash is needed:
npm create vite@latest my-vue-app -- --template vue

# yarn
yarn create vite my-vue-app --template vue

# pnpm
pnpm create vite my-vue-app -- --template vue
```

这里我选用yarn命令创建，用npm创建的话不会有相应库可供选择安装，在可选项中我选择vue-ts

### Eslint支持

[eslint官方文档](https://eslint.org/docs/user-guide/getting-started)

[typeScript插件](https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin)  

```
# eslint 安装
yarn add eslint --dev

# eslint 插件相关安装
yarn add eslint-plugin-vue --dev
yarn add @typescript-eslint/eslint-plugin --dev
yarn add eslint-plugin-prettier --dev

# typescript parser
yarn add @typescript-eslint/parser --dev

```

