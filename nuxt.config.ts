import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  meta: {
    title: '',
    link: [
      {
        rel: 'icon', type: 'image/png', href: '/logo.png',
      },
    ],
    meta: [
      {
        name: 'description', content: '',
      },
      {
        name: 'Keywords', content: 'Vue,JavaScript,Nginx,Git,UniApp,Uni-App,Nuxt,React,前端,服务器,Linux,macOS,学习文档,笔记',
      },
    ],
  },
  build: {
    extractCSS: true,
  },
  css: [
    '@/assets/style/reset.scss',
  ],
  vueuse: {
    ssrHandlers: true,
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // additionalData: '@import "./assets/style/variable.scss";',
        },
      },
    },
    server: {
      proxy: {
        '/api': {
          target: 'http://127.0.0.1:7001',
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, ''),
        },
      },
    },
  },
  publicRuntimeConfig: {
    baseURL: 'http://127.0.0.1:7001',
  },
})