import { createContext, FC, ReactChild, ReactChildren, useContext, useRef, useState } from 'react';

class ServiceBase<S = {}> {
    public state: S = {} as any;
    setState!: React.Dispatch<React.SetStateAction<Partial<S>>>;
}

function createServiceCtx<S extends ServiceBase>(Service: new () => S, Context = createContext<S>(null as any)) {
    let serviceInstance: S;

    function getService() {
        return serviceInstance;
    }

    function useService() {
        return useContext(Context);
    }

    function withProvider<T>(Child: React.ComponentType<T>) {
        return (props: T) => {
            const sr = useRef(new Service());
            serviceInstance = sr.current;

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
                <Context.Provider value={sr.current}>
                    <Child {...props} />
                </Context.Provider>
            );
        };
    }

    return { getService, useService, withProvider, context: Context };
}

type TWithProvider<T> = (Child: React.ComponentType<T>) => (props: T) => JSX.Element;

function connectProvider<T>(Child: React.ComponentType<T>, ...withProviders: TWithProvider<T>[]) {
    for (const withPro of withProviders) {
        Child = withPro(Child);
    }
    return Child;
}

// const Wrapper:React.FC = props=>

const Provider: FC<{ withProviders?: TWithProvider<any>[] }> = props => {
    const Com = connectProvider(() => <>{props.children}</>, ...(props.withProviders || []));
    return <Com />;
};

// wrap namespace
const svc = { Provider, ServiceBase, createServiceCtx, connectProvider };
export { svc, Provider, ServiceBase, createServiceCtx, connectProvider };
