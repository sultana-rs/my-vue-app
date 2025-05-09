﻿import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    css: {
        preprocessorOptions: {
            less: {
                additionalData: `
          @import "@/styles/variables.less";
          @import "@/styles/mixins.less";
        `,
            },
        },
    },
    server: {
        port: 5173,
        strictPort: true, // ❗ Prevents switching to other ports
        open: true        // ✅ Auto-opens browser
    },
})
