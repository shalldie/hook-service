import path from 'path';
import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [reactRefresh(), dts()],

    esbuild: {
        jsxInject: `import React from 'react'`
    },

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
