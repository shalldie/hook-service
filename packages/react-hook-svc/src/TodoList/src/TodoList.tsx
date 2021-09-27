import { useMemo } from 'react';
import { ETodoType, useTodo, withTodoProvider } from '..';
import { svc } from '../../service';
import { TodoAdd } from './TodoAdd';
import { TodoItem } from './TodoItem';
import { TodoTab } from './TodoTab';
import './TodoList.scss';

function TodoListBase() {
    const todo = useTodo();
    const list = useMemo(() => {
        return todo.state.list.filter(n => todo.state.type === ETodoType.ALL || todo.state.type === n.type);
    }, [todo.state.list, todo.state.type]);

    return (
        <div className="todo-list">
            <TodoAdd />
            <TodoTab />
            <div className="list">
                {list.map((item, index) => (
                    <TodoItem item={item} key={index} />
                ))}
            </div>
        </div>
    );
}

export const TodoList = withTodoProvider(TodoListBase);

// 当有多个 withProvider 的时候可以用 connect
export const TodoList2 = svc.connectProvider(TodoListBase, withTodoProvider);
