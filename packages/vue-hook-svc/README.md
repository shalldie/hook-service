# vue-hook-svc

[![npm][vue-hook-svc-icon]][vue-hook-svc-npm]
[![npm][vue-hook-svc-bundle]][vue-hook-svc-npm]
[![Build Status](https://img.shields.io/github/workflow/status/shalldie/hook-service/ci?label=build&logo=github&style=flat-square)](https://github.com/shalldie/hook-service/actions)
[![License](https://img.shields.io/npm/l/vue-hook-svc?logo=github&style=flat-square)](https://github.com/shalldie/hook-service)

A service、state manager for Vue2/3. `minzipped` less than `300 bytes`。

[English](./README.md) | [中文](./README.zh-CN.md)

## Advantage

-   **~300 bytes** _min+gz._
-   **Minimal API** _5 minutes to learn, easy to use._
-   **Written in TypeScript** _offer you more types._

## Installation

    npm install vue-hook-svc --save

if in Vue2, you need `@vue/composition-api` installed

    npm i @vue/composition-api --save

## Usage & Example

### `declare a service`

```ts
// declare a service
import { svc } from 'vue-hook-svc';

export class SomeService extends svc.ServiceBase {
    state = {
        show: true
    };

    toggle() {
        this.state.show = !this.state.show;
    }
}

// create a global service
export const globalSomeSvc = svc.createSingleton(SomeService);
// create a service func depends on the component's lifecycle
export const useSomeSvc = svc.createUseService(GlobalService);
```

### `use in global, anywhere`

```ts
// use in global, anywhere
import { globalSomeSvc } from '.';

globalSomeSvc.state.show = false;
```

### `use with the component's lifecycle`

```ts
// use with the component's lifecycle
// in setup of vue's file

// then all children can use `useSomeSvc` to get the same instance.
const svc = useSomeSvc();
```

### `use in template`

```html
<!-- use in template -->
<template>
    <div>
        <button @click="() => svc.toggle()">update</button>
        <span v-if="svc.state.show">...</span>
    </div>
</template>
```

## License

MIT

<!-- vue-hook-svc -->

[vue-hook-svc-icon]: https://img.shields.io/npm/v/vue-hook-svc.svg?logo=npm&style=flat-square
[vue-hook-svc-npm]: https://www.npmjs.com/package/vue-hook-svc
[vue-hook-svc-bundle]: https://img.shields.io/bundlephobia/minzip/vue-hook-svc?logo=npm&style=flat-square
