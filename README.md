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

## 相关文章

[Service - 业务与 UI 分离](https://nosaid.com/article/service-separate-logic-ui)

## 我所期望的状态管理

1. 可以区分 全局/业务级
    - 全局是单例
    - 业务级有生命周期
2. 有一个 reactive 的 state ，随便你在哪里用
3. 有对应的业务方法，供对应业务组件使用
    - 大部分业务应该放在 service 里面声明。 `service.method()`
    - 不需要 props, emit, dispatch。 组件间传值可以是多余的。
4. 使用简单，不要有太多概念，可以用常规优化方式
    - 我不想知道 `mutations`, `actions`, `dispatch`, `reducer`, `combineXXX`...
    - `时间旅行` 等概念很强大，但是 `99%` 的情况用不上，不需要。

## 不仅仅是 store，更是 service

一个系统，亦或一块业务、一个组件，应该分为 `数据`、`业务`、`UI` 3 部分。

常见的 store 往往只是数据层，我希望 `状态管理`（service） 可以作为 `数据+业务`，组件（UI）只需要展示 service 的数据，调用 service 的方法。

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
