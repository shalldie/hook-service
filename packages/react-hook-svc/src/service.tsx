import { createContext, useContext, useRef, useState } from 'react';

class ServiceBase<S = {}> {
    public state: S = {} as any;
    setState!: (payload: Partial<S>) => void;
}

function createServiceCtx<S extends ServiceBase>(Service: new () => S, Context = createContext<{ s: S }>(null as any)) {
    let currentInstance: S;

    function getService() {
        return currentInstance;
    }

    function useService() {
        return useContext(Context).s;
    }

    function withProvider<T>(Child: React.ComponentType<T>) {
        return (props: T) => {
            const instance = useRef<S>();
            if (!instance.current) {
                instance.current = new Service();
                currentInstance = instance.current;
            }

            const [_state, setState] = useState(instance.current.state);

            if (!instance.current.setState) {
                instance.current.setState = (payload: Partial<S>) => {
                    instance.current!.state = {
                        ...instance.current!.state,
                        ...payload
                    };
                    setState(instance.current!.state);
                };
            }

            return (
                <Context.Provider value={{ s: instance.current }}>
                    <Child {...(props as any)} />
                </Context.Provider>
            );
        };
    }

    return { getService, useService, withProvider, Context };
}

function connect<T>(...withProviders: ReturnType<typeof createServiceCtx>['withProvider'][]) {
    return (Child: React.ComponentType<T>) => {
        for (const withPro of withProviders) {
            Child = withPro(Child);
        }
        return Child;
    };
}

// wrap namespace
const svc = { ServiceBase, createServiceCtx, connect };
export { svc, ServiceBase, createServiceCtx, connect };
