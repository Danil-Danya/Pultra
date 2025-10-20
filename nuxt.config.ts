import { defineNuxtConfig } from 'nuxt/config';

import path from 'path';
import fse from 'fs-extra';

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  ssr: true,

  server: {
      port: process.env.NITRO_PORT || 8000,
      host: process.env.NITRO_HOST || '127.0.0.1'
  },

  alias: {
      '@': path.resolve(__dirname, './'),
  },

  app: {
    head: {
        title: 'Pultra',
        meta: [
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name: 'description', content: 'Описание сайта Pultra' }
        ],
        link: [
            { rel: 'preconnect', href: 'https://pultra-back.kls-digital.ru' },
            { rel: 'dns-prefetch', href: 'https://pultra-back.kls-digital.ru' }
        ]
    },
    pageTransition: false
  },

  experimental: {
    clientRouteNavigation: false,
    payloadExtraction: false
  },

  runtimeConfig: {
      public: {
          siteBaseURL: process.env.SITE_BASE_URL,
          apiBaseURL: process.env.API_BASE_URL
      }
  },
  
  modules: ['@nuxt/fonts', '@sentry/nuxt/module'],

  plugins: [
      '@/plugins/pinia/pinia.js',
      '@/api/api.init.js'
  ],

  css: [
      '@/assets/styles/main.scss'
  ],

  serverMiddleware: [
      { path: '/', handler: '~/server/middleware/compression.js' }
  ],

  nitro: {
    compressPublicAssets: true,
    minify: true,
    routeRules: {
      '/': { prerender: true },
      '/produkciya/**': { isr: 600 },
      '/izdeliya/**': { isr: 600 },
      '/blog/**': { isr: 600 },
      '/proekty/**': { isr: 1800 },
      '/vakansii/**': { isr: 1800 },
      '/o-kompanii': { prerender: true },
      '/kontakty': { prerender: true },
      '/proektirovshchikam/**': { isr: 1800 },
      '/api/**': { cors: true, headers: { 'cache-control': 's-maxage=300' } }
    }
  },

  vite: {
    build: {
        target: 'esnext',
        cssCodeSplit: false,
        sourcemap: false,
        minify: 'terser',
        terserOptions: {
            compress: {
                drop_console: true,
                drop_debugger: true,
                pure_funcs: ['console.info', 'console.debug', 'console.warn'],
            },
            format: {
                comments: false,
            },
        },
        rollupOptions: {
            output: {
                manualChunks: {
                    'vendor-core': ['vue', 'vue-router', 'pinia'],
                    'vendor-sentry': ['@sentry/vue', '@sentry/browser'],
                    'vendor-swiper': ['swiper'],
                    'vendor-gsap': ['gsap'],
                    'vendor-utils': ['lodash-es'],
                },
            },
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import "@/assets/styles/global/wrapper.scss";`
            },
        },
    },
    optimizeDeps: {
        include: ['axios', 'pinia'],
    },
  },

  postcss: {
    plugins: {
      autoprefixer: {},
      cssnano: { preset: 'default' }
    }
  },

  hooks: {
      async 'build:before'() {
        const imagesFrom = path.resolve('assets/images');
        const imagesTo = path.resolve('public/images');

        if (await fse.pathExists(imagesFrom)) {
            await fse.copy(imagesFrom, imagesTo);
            console.log('Картинки скопированы: assets/images → public/images');
        } 
        else {
            console.warn('Папка assets/images не найдена');
        }

        const modelsFrom = path.resolve('assets/models');
        const modelsTo = path.resolve('public/models');

        if (await fse.pathExists(modelsFrom)) {
            await fse.copy(modelsFrom, modelsTo);
            console.log('Модели скопированы: assets/models → public/models');
        } 
        else {
            console.warn('Папка assets/models не найдена');
        }

        const docsFrom = path.resolve('assets/docs');
        const docsTo = path.resolve('public/docs');

        if (await fse.pathExists(docsFrom)) {
            await fse.copy(docsFrom, docsTo);
            console.log('Документы скопированы: assets/docs → public/docs');
        } 
        else {
            console.warn('Папка assets/docs не найдена');
        }
    }
  },

  sentry: {
    sourceMapsUploadOptions: {
      org: 'daniel-comp-int',
      project: 'pultra'
    }
  },

  sourcemap: {
    client: 'hidden'
  }
})