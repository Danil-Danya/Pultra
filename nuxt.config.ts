import { defineNuxtConfig } from 'nuxt/config';

import fs from 'fs';
import path from 'path';
import fse from 'fs-extra';

export default defineNuxtConfig({
    compatibilityDate: '2025-05-15',
    ssr: true,

    server: {
        port: process.env.NITRO_PORT || 8000,
        host: process.env.NITRO_HOST || '127.0.0.1'
    },

    app: {
        baseURL: '/', 
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
            ]
        }
    },

    runtimeConfig: {
        public: {
            siteBaseURL: process.env.SITE_BASE_URL
        }
    },


    devtools: { enabled: true },
    modules: ['@nuxt/fonts', '@nuxt/image'],
    //plugins: ['~/plugins/animations/gsap.cleaner.js'],

    image: {
        provider: 'ipx',
        formats: ['webp'],
        domains: ['pultra.kls-digital.ru'],
        screens: {
            xs: 320,
            sm: 640,
            md: 768,
            lg: 1024,
            xl: 1280,
            xxl: 1536
        },
        presets: {
            default: {
                sizes: 'xs:100vw sm:100vw md:50vw lg:33vw xl:25vw'
            }
        }
    },

    css: [
        '@/assets/styles/main.scss'
    ],

    serverMiddleware: [
        { path: '/', handler: '~/server/middleware/compression.js' }
    ],

    vite: {
        //plugins: [compression()],
        build: {
            minify: 'terser',
            terserOptions: {
                compress: {
                    drop_console: true,
                    drop_debugger: true,
                },
            },
        },
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `@import "@/assets/styles/global/wrapper.scss";`
                }
            }
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
        }
    }
})