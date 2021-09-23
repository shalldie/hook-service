import { ChangeEvent, useState } from 'react';
import { useTodo } from '..';

export function TodoAdd() {
    const todo = useTodo();
    const [model, setModel] = useState('');

    function handleChange(ex: ChangeEvent<HTMLInputElement>) {
        setModel(ex.target.value);
    }

    function addTodo() {
        if (!model.length) {
            return;
        }
        todo.addTodo(model);
        setModel('');
    }

    return (
        <div className="todo-add">
            <input value={model} onChange={handleChange} type="text" />
            <button onClick={addTodo}>添加</button>
        </div>
    );
}
