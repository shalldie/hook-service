import { useCallback, useMemo } from 'react';
import { ETodoType, TTodoItem, useTodo } from '..';
import cn from 'classnames';

export function TodoItem(props: { item: TTodoItem }) {
    const todo = useTodo();

    const rootClass = useMemo(() => {
        const done = props.item.type === ETodoType.DONE;
        return cn('todo-item', { done });
    }, [props.item.type]);

    return (
        <div className={rootClass}>
            <div onClick={() => todo.toggleTodo(props.item)} className="content">
                {props.item.name}
            </div>
            {/* useCallback 包装下更好，这里只是演示 */}
            <div onClick={() => todo.removeTodo(props.item)} className="ctl">
                删除
            </div>
        </div>
    );
}
