import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { TodoList } from './TodoList';
import { svc } from '../service';
import { getGlobalService, useGlobal, withGlobalProvider } from './global.service';

const App = svc.connect(withGlobalProvider)(TodoList);

ReactDOM.render(
    <StrictMode>
        <App />
    </StrictMode>,
    document.getElementById('root')
);

setInterval(() => {
    // 在任何地方获取全局 service
    const global = getGlobalService();
    global.setState({
        time: new Date().toLocaleTimeString()
    });
}, 1000);
