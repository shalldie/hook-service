import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { TodoList } from './TodoList';
import { Provider } from '../service';
import { getGlobalService, useGlobal, withGlobalProvider } from './global.service';

const NewTodo = withGlobalProvider(TodoList);

// const Header: React.FC = props => {
//     const global = useGlobal();
//     return <div>{global.state.time}</div>;
// };

ReactDOM.render(
    <StrictMode>
        <NewTodo />
        {/* <Provider withProviders={[withGlobalProvider]}>
            <TodoList />
        </Provider> */}
    </StrictMode>,
    document.getElementById('root')
);

setInterval(() => {
    // 在任何地方获取全局 service
    const global = getGlobalService();
    window.g = global;
    global.setState({
        time: new Date().toLocaleTimeString()
    });
}, 1000);

window.getGlobalService = getGlobalService;
