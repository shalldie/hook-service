import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { TodoList } from './TodoList';
import { svc } from '../service';
import { getGlobalService, useGlobal, withGlobalProvider } from './global.service';

const App = svc.connect(withGlobalProvider)(TodoList);

createRoot(document.getElementById('root') as HTMLElement).render(
    <StrictMode>
        <App />
    </StrictMode>
);

setInterval(() => {
    // 在任何地方获取全局 service
    const global = getGlobalService();
    global.setState({
        time: new Date().toLocaleTimeString()
    });
}, 1000);
