import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), dts()],

    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/service.ts'),
            name: 'VueHookSVC',
            formats: ['umd', 'es']
        },
        rollupOptions: {
            external: ['vue', 'vue-demi'],
            output: {
                globals: {
                    vue: 'Vue',
                    'vue-demi': 'VueDemi'
                }
            }
        }
    },

    optimizeDeps: {
        exclude: ['vue-demi']
    }
});
