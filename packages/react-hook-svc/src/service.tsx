import { createContext, useContext, useRef, useState } from 'react';

class ServiceBase<S = {}> {
    public state: S = {} as any;
    setState!: React.Dispatch<React.SetStateAction<Partial<S>>>;
}

function createServiceCtx<S extends ServiceBase>(Service: new () => S, context = createContext<S>(null as any)) {
    function useService() {
        return useContext(context);
    }

    function withProvider<T>(Child: React.ComponentType<T>) {
        return (props: T) => {
            const sr = useRef<S>(null as any);
            if (!sr.current) {
                sr.current = useService() || new Service();
            }

            const [state, setState] = useState(sr.current.state);
            sr.current.state = state;
            sr.current.setState = (payload: Function | Object) => {
                if (typeof payload === 'function') {
                    payload = payload(state);
                }

                setState({
                    ...state,
                    ...payload
                });
            };

            return (
                <context.Provider value={sr.current}>
                    <Child {...props} />
                </context.Provider>
            );
        };
    }

    return { useService, withProvider, context };
}

type TWithProvider<T> = (Child: React.ComponentType<T>) => (props: T) => JSX.Element;

function connectProvider<T>(Child: React.ComponentType<T>, ...withContextWrappers: TWithProvider<T>[]) {
    for (const withCtx of withContextWrappers) {
        Child = withCtx(Child);
    }
    return Child;
}

// wrap namespace
const svc = { ServiceBase, createServiceCtx, connectProvider };
export { svc, ServiceBase, createServiceCtx, connectProvider };
