# react-hook-svc

[![npm][react-hook-svc-icon]][react-hook-svc-npm]
[![npm][react-hook-svc-bundle]][react-hook-svc-npm]
[![Build Status](https://img.shields.io/github/actions/workflow/status/shalldie/hook-service/ci.yml?branch=master&label=build&logo=github&style=flat-square)](https://github.com/shalldie/hook-service/actions)
[![License](https://img.shields.io/npm/l/react-hook-svc?logo=github&style=flat-square)](https://github.com/shalldie/hook-service)

A service、state manager for React. `minzipped` less than `300 bytes`。

[English](./README.md) | [中文](./README.zh-CN.md)

## Advantage

-   **~300 bytes** _min+gz._
-   **Minimal API** _5 minutes to learn, easy to use._
-   **Written in TypeScript** _offer you more types._

## Installation

    npm install react-hook-svc --save

## Usage & Example

### `declare a service`

```ts
// declare a service
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

// create a service func depends on the component's lifecycle
export const { useService, getService, withProvider } = svc.createServiceCtx(SomeService);
```

### `wrap the component with withProvider`

```tsx
// wrap the component with withProvider
import { svc } from 'react-hook-svc';
import { useService, withProvider } from './service';

function AppBase() {
    // after wrapper, current component and it's children will get the same instance with `useService`
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
// this may be usefull with lots of withProviders
// export const App = svc.connect(withProvider)(App);
```

### `use it outside the component, anywhere`

```ts
// when withProvider the root component of App, the service may be a global one.
// you can get it with `getService`
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
