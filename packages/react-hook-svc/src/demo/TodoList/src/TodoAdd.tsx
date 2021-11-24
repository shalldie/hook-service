import { useState } from 'react';
import { useTodo } from '..';

export function TodoAdd() {
    const todo = useTodo();
    const [model, setModel] = useState('');

    function addTodo() {
        if (!model.length) {
            return;
        }
        todo.addTodo(model);
        setModel('');
    }
    // console.log('invoke todoadd');

    return (
        <div className="todo-add">
            <input value={model} onChange={ex => setModel(ex.target.value)} type="text" />
            <button onClick={addTodo}>添加</button>
        </div>
    );
}
