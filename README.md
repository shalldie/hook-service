# hook-service

[![Build Status](https://img.shields.io/github/workflow/status/shalldie/hook-service/ci?label=build&logo=github&style=flat-square)](https://github.com/shalldie/hook-service/actions)
[![License](https://img.shields.io/github/license/shalldie/hook-service?logo=github&style=flat-square)](https://github.com/shalldie/hook-service)

`Monorepo` of service、state manager for Vue2/Vue3/React. `minzipped` less than `300 bytes`。

极其精简的状态管理库，提供了 Vue2/3 和 React 版本。`minzipped` 不超过 `300 bytes`。

---

| name                             |                    npm version                    |                     bundle size                     | framework |
| :------------------------------- | :-----------------------------------------------: | :-------------------------------------------------: | :-------: |
| [vue-hook-svc][vue-hook-svc]     |   [![npm][vue-hook-svc-icon]][vue-hook-svc-npm]   |   [![npm][vue-hook-svc-bundle]][vue-hook-svc-npm]   |    vue    |
| [react-hook-svc][react-hook-svc] | [![npm][react-hook-svc-icon]][react-hook-svc-npm] | [![npm][react-hook-svc-bundle]][react-hook-svc-npm] |   react   |

---

我感觉状态管理需要这样，

1. 可以区分 全局/业务级
2. 有一个 reactive 的 state ，随便你在哪里改动
3. 有对应的共享业务方法
4. 使用简单，不要有太多概念，可以用 react 常规优化方式

<!-- vue-hook-svc -->

[vue-hook-svc]: packages/vue-hook-svc
[vue-hook-svc-icon]: https://img.shields.io/npm/v/vue-hook-svc.svg?logo=npm&style=flat-square
[vue-hook-svc-npm]: https://www.npmjs.com/package/vue-hook-svc
[vue-hook-svc-bundle]: https://img.shields.io/bundlephobia/minzip/vue-hook-svc?logo=npm&style=flat-square

<!-- react-hook-svc -->

[react-hook-svc]: packages/react-hook-svc
[react-hook-svc-icon]: https://img.shields.io/npm/v/react-hook-svc.svg?logo=npm&style=flat-square
[react-hook-svc-npm]: https://www.npmjs.com/package/react-hook-svc
[react-hook-svc-bundle]: https://img.shields.io/bundlephobia/minzip/react-hook-svc?logo=npm&style=flat-square
