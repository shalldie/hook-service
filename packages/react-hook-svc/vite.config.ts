import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react({
            jsxRuntime: 'classic'
        }),
        dts()
    ],

    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/service.tsx'),
            name: 'ReactHookSVC',
            formats: ['umd', 'es']
        },
        rollupOptions: {
            external: ['react', 'react-dom'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM'
                }
            }
        }
    }
});
