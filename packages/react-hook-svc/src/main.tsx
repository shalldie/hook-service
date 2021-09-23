import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { TodoList } from './TodoList';

ReactDOM.render(
    <StrictMode>
        <TodoList />
    </StrictMode>,
    document.getElementById('root')
);
