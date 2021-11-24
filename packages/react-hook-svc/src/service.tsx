import { createContext, useContext, useState } from 'react';

class ServiceBase<S = {}> {
    public state: S = {} as any;
    setState!: React.Dispatch<React.SetStateAction<Partial<S>>>;
}

function createServiceCtx<S extends ServiceBase>(Service: new () => S, Context = createContext<S>(null as any)) {
    let currentInstance: S;

    function getService() {
        return currentInstance;
    }

    function useService() {
        return useContext(Context);
    }

    function withProvider<T>(Child: React.ComponentType<T>) {
        return (props: T) => {
            currentInstance = new Service();
            const [state, setState] = useState(currentInstance.state);

            const setStateWrap = (payload: Function | Object) => {
                if (typeof payload === 'function') {
                    payload = payload(state);
                }

                setState({
                    ...state,
                    ...payload
                });
            };

            currentInstance.state = state;
            currentInstance.setState = setStateWrap;

            return (
                <Context.Provider value={currentInstance}>
                    <Child {...props} />
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
