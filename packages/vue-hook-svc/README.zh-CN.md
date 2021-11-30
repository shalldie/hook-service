# vue-hook-svc

[![npm][vue-hook-svc-icon]][vue-hook-svc-npm]
[![npm][vue-hook-svc-bundle]][vue-hook-svc-npm]
[![Build Status](https://img.shields.io/github/workflow/status/shalldie/hook-service/ci?label=build&logo=github&style=flat-square)](https://github.com/shalldie/hook-service/actions)
[![License](https://img.shields.io/npm/l/vue-hook-svc?logo=github&style=flat-square)](https://github.com/shalldie/hook-service)

极其精简的状态管理库，提供了 Vue2/3 版本。`minzipped` 不超过 `300 bytes`。

[English](./README.md) | [中文](./README.zh-CN.md)

## 优势

-   **~300 bytes** _min+gz._
-   **最小 API** _看 5 分钟就能写，简单易用_
-   **TypeScript 编写** _提供足够多的类型推导._

## 安装

    npm install vue-hook-svc --save

## 用法 & 示例

```ts
// 定义一个 service
import { svc } from 'vue-hook-svc';

export class SomeService extends svc.ServiceBase {
    state = {
        time: 0
    };

    updateTime() {
        this.state.time = new Date().toLocaleTimeString();
    }
}

// 创建一个全局的 service
export const globalSomeSvc = svc.createSingleton(SomeService);
// 创建一个方法获取 service，跟随组件生命周期
export const useSomeSvc = svc.createUseService(GlobalService);
```

```ts
// 使用全局 service
import { globalSomeSvc } from '.';

globalSomeSvc.state.time = 'some new str';
```

```ts
// 使用跟随组件生命周期的 service，需要在 `setup` 中

// 所有的子组件和公共父组件共享 `useSomeSvc` 产生的实例
const svc = useSomeSvc();
```

```vue
// 在 template 中用
<template>
    <div>
        <span>{{ svc.state.time }}</span>
        <button @click="() => svc.updateTime()">update</button>
    </div>
</template>
```

<!-- vue-hook-svc -->

[vue-hook-svc-icon]: https://img.shields.io/npm/v/vue-hook-svc.svg?logo=npm&style=flat-square
[vue-hook-svc-npm]: https://www.npmjs.com/package/vue-hook-svc
[vue-hook-svc-bundle]: https://img.shields.io/bundlephobia/minzip/vue-hook-svc?logo=npm&style=flat-square
