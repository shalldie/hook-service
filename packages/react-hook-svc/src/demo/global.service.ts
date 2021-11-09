import { svc } from '../service';

export class GlobalService extends svc.ServiceBase {
    state = {
        time: new Date().toLocaleTimeString()
    };
}

export const {
    //
    getService: getGlobalService,
    withProvider: withGlobalProvider,
    useService: useGlobal
} = svc.createServiceCtx(GlobalService);
