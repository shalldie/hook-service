import { svc } from '../../service';
import { ETodoType, TTodoItem } from './todo.types';

/**
 * todolist 的所有业务
 *
 * @class TodoService
 * @extends {svc.ServiceBase}
 */
class TodoService extends svc.ServiceBase {
    /**
     * 当前业务的所有数据，是 reactive 的
     * 可以分为3种类型：1.全局 2.业务（页面） 3.复杂组件
     */
    state = {
        /** 当前选择 tab */
        type: ETodoType.ALL as ETodoType,
        /** 所有 todo 项 */
        list: [
            { name: 'default value 1', type: ETodoType.UNDONE },
            { name: 'default value 2', type: ETodoType.DONE },
            { name: 'default value 3', type: ETodoType.UNDONE }
        ] as TTodoItem[]
    };

    public addTodo(name: string) {
        this.state.list.push({
            name,
            type: ETodoType.UNDONE
        });
    }

    public removeTodo(item: TTodoItem) {
        this.state.list = this.state.list.filter(n => n !== item);
    }
}

export const useTodo = svc.createUseService(TodoService);
