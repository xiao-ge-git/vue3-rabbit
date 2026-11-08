import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// elementPlus按需导入
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
        resolvers: [
            // 配置elementPlus采用sass样式配色系统
            ElementPlusResolver({ importStyle: "sass" }),
        ],
    }),
  ],
    resolve: {
        alias: { // 实际的路径转化在这
        '@': fileURLToPath(new URL('./src', import.meta.url))
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                // 自动导入定制化样式文件进行样式覆盖
                additionalData: `
                    @use "@/styles/element/index.scss" as *;
                    @use "@/styles/var.scss" as *;
                `,
            }
        }
    },
    server: {
        proxy: {
            // 接口地址走本地同源，由 dev server 转发，避开浏览器跨域与 http->https 重定向
            '/api': {
                target: 'https://pcapi-xiaotuxian-front-devtest.itheima.net',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '')
            }
        }
    }
})
