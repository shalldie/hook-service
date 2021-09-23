import { createContext, useContext, useRef, useState } from 'react';

class ServiceBase<S = {}> {
    public state: S = {} as any;
    setState!: React.Dispatch<React.SetStateAction<Partial<S>>>;
}

function createServiceCtx<S extends ServiceBase>(Service: new () => S, Context = createContext<S>(null as any)) {
    function withContext<T>(Child: React.ComponentType<T>) {
        return (props: T) => {
            const sr = useRef<S>(null as any);
            if (!sr.current) {
                sr.current = new Service();
            }

            const [state, setState] = useState(sr.current.state);
            sr.current.state = state;
            sr.current.setState = (payload: Function | Object) => {
                if (typeof payload === 'function') {
                    // const result = payload(state);
                    // setState({
                    //     ...state,
                    //     ...result
                    // });
                    // return;
                    payload = payload(state);
                }

                setState({
                    ...state,
                    ...payload
                });
            };

            return (
                <Context.Provider value={sr.current}>
                    <Child {...props} />
                </Context.Provider>
            );
        };
    }

    function useService() {
        return useContext(Context);
    }

    return {
        withContext,
        useService,
        context: Context
    };
}

type TWithContext<T> = (Child: React.ComponentType<T>) => (props: T) => JSX.Element;

function connectContext<T>(Child: React.ComponentType<T>, ...withContextWrappers: TWithContext<T>[]) {
    for (const withCtx of withContextWrappers) {
        Child = withCtx(Child);
    }
    return Child;
}

const svc = {
    ServiceBase,
    createServiceCtx,
    connectContext
};

export { svc, ServiceBase, createServiceCtx, connectContext };
