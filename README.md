# AutoCompVis

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
yarn
```

### Compile and Hot-Reload for Development

```sh
yarn dev
```

### Compile and Minify for Production

```sh
yarn build
```
# 导出的数据结构
```js
let describe = {
  visualization_type: [
    {
      visualization_type: [
        { chartType: "network_chart", data: data },
        { chartType: "pie_chart", data: data.nodes },
      ],
      composition_pattern: "nested",
    },
    { chartType: "stack_bar_chart", data: data.nodes },
  ],
  composition_pattern: "repetition",
};
```