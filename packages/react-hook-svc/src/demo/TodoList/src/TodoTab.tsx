import { useMemo } from 'react';
import { ETodoType, useTodo } from '..';
import cn from 'classnames';

const TAB_LIST = [
    {
        name: '全部',
        value: ETodoType.ALL
    },
    {
        name: '已完成',
        value: ETodoType.DONE
    },
    {
        name: '未完成',
        value: ETodoType.UNDONE
    }
];

function useTabs() {
    const todo = useTodo();

    return useMemo(() => {
        return TAB_LIST.map(item => {
            return {
                ...item,
                className: cn('tab-item', { active: todo.state.type === item.value }),
                click() {
                    todo.setState({
                        type: item.value
                    });
                }
            };
        });
    }, [todo.state]);
}

export function TodoTab() {
    const tabs = useTabs();

    return (
        <div className="todo-tab">
            {tabs.map(item => (
                <div className={item.className} key={item.value} onClick={item.click}>
                    {item.name}
                </div>
            ))}
        </div>
    );
}
