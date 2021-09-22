import { inject, provide, reactive } from 'vue-demi';

function cloneDeep<T>(sender: T): T {
    return JSON.parse(JSON.stringify(sender));
}

/**
 * service base class
 *
 * @abstract
 * @class ServiceBase
 */
abstract class ServiceBase {
    public defaultState = {};
    public state = {};

    /**
     * reset current service
     *
     * @returns
     * @memberof ServiceBase
     */
    reset() {
        Object.assign(this.state, cloneDeep(this.defaultState));
        return this;
    }
}

function createInstance<T extends { new (): InstanceType<T> }>(ServiceConstructor: T) {
    const instance = new ServiceConstructor();
    instance['defaultState'] = cloneDeep(instance['state']);
    instance['state'] = reactive(instance['state']);

    return instance;
}

const SINGLETON_MAP = new Map();
/**
 * 获取唯一单例
 *
 * @template T
 * @param {T} ServiceConstructor
 * @returns
 */
function createSingleton<T extends { new (): InstanceType<T> }>(ServiceConstructor: T): InstanceType<T> {
    if (!SINGLETON_MAP.has(ServiceConstructor)) {
        SINGLETON_MAP.set(ServiceConstructor, createInstance(ServiceConstructor));
    }
    return SINGLETON_MAP.get(ServiceConstructor);
}

/**
 * 为组件间创建获取相同 service 的 use hook
 *
 * @template T
 * @param {T} ServiceConstructor
 * @param {*} [key=Symbol()]
 * @return {*}
 */
function createUseService<T extends { new (): InstanceType<T> }>(ServiceConstructor: T, key = Symbol()) {
    return function () {
        let instance = inject<InstanceType<T>>(key, null as any);
        if (!instance) {
            instance = createInstance(ServiceConstructor);
            provide(key, instance);
        }
        return instance;
    };
}

/**
 * service namespace
 */
const svc = {
    ServiceBase,
    createSingleton,
    createUseService
};

export { svc, ServiceBase, createSingleton, createUseService };
