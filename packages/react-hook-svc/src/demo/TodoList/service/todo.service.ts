import { ETodoType, TTodoItem } from './todo.types';
import { svc } from '../../../service';

class TodoServiceState {
    /** 当前选择 tab */
    type = ETodoType.ALL as ETodoType;
    /** 所有 todo 项 */
    list = [
        { name: 'default value 1', type: ETodoType.UNDONE },
        { name: 'default value 2', type: ETodoType.DONE },
        { name: 'default value 3', type: ETodoType.UNDONE }
    ] as TTodoItem[];
}

class TodoService extends svc.ServiceBase<TodoServiceState> {
    state = new TodoServiceState();

    public addTodo(name: string) {
        this.setState({
            list: [
                ...this.state.list,
                {
                    name,
                    type: ETodoType.UNDONE
                }
            ]
        });
    }

    public removeTodo(item: TTodoItem) {
        this.setState({
            list: this.state.list.filter(n => n !== item)
        });
    }

    public toggleTodo(item: TTodoItem) {
        item.type = item.type === ETodoType.DONE ? ETodoType.UNDONE : ETodoType.DONE;
        this.setState({
            list: [...this.state.list]
        });
    }
}

export const { useService: useTodo, withProvider: withTodoProvider } = svc.createServiceCtx(TodoService);
