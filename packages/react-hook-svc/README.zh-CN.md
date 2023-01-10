# react-hook-svc

[![npm][react-hook-svc-icon]][react-hook-svc-npm]
[![npm][react-hook-svc-bundle]][react-hook-svc-npm]
[![Build Status](https://img.shields.io/github/actions/workflow/status/shalldie/hook-service/ci.yml?branch=master&label=build&logo=github&style=flat-square)](https://github.com/shalldie/hook-service/actions)
[![License](https://img.shields.io/npm/l/react-hook-svc?logo=github&style=flat-square)](https://github.com/shalldie/hook-service)

A service、state manager for React. `minzipped` less than `300 bytes`。

[English](./README.md) | [中文](./README.zh-CN.md)

## 优势

-   **~300 bytes** _min+gz_
-   **最小 API** _看 5 分钟就能写，简单易用_
-   **TypeScript 编写** _提供足够多的类型推导_

## 安装

    npm install react-hook-svc --save

## 使用 & 示例

### `定义一个 service`

```ts
// 定义一个 service
// service.ts
import { svc } from 'react-hook-svc';

class SomeState {
    show = true;
}

export class SomeService extends svc.ServiceBase<SomeState> {
    state = new SomeState();

    toggle() {
        this.setState({
            show: !this.state.show
        });
    }
}

// 创建 service 相关使用方法，跟随组件生命周期
export const { useService, getService, withProvider } = svc.createServiceCtx(SomeService);
```

### `通过 withProvider 把组件包一层`

```tsx
// 通过 withProvider 把组件包一层
import { svc } from 'react-hook-svc';
import { useService, withProvider } from './service';

function AppBase() {
    // 在包一层之后，当前及其子组件，都可以使用 `userService` 获取相同的实例
    const svc = useService();

    const show = useMemo(() => svc.state.show, [svc.state]);

    return (
        <>
            <button onClick={() => svc.toggle()}></button>
            {show && <span>...</span>}
        </>
    );
}

export const App = withProvider(AppBase);
// 如果有很多 withProviders，使用 svc.connect 会方便很多
// export const App = svc.connect(withProvider)(App);
```

### `在组件之外访问 service`

```ts
// 如果 withProvider 了应用的根组件，那么就可以视为一个全局 service
// 可以通过 getService 拿到最新的实例
import { getService } from './service';

function demo() {
    const svc = getService();
    svc.setState({
        show: true
    });
}
```

## License

MIT

<!-- react-hook-svc -->

[react-hook-svc-icon]: https://img.shields.io/npm/v/react-hook-svc.svg?logo=npm&style=flat-square
[react-hook-svc-npm]: https://www.npmjs.com/package/react-hook-svc
[react-hook-svc-bundle]: https://img.shields.io/bundlephobia/minzip/react-hook-svc?logo=npm&style=flat-square
