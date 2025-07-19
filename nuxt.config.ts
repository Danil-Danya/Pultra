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


    devtools: { enabled: true },
    modules: ['@nuxt/fonts',],

    css: [
        '@/assets/styles/main.scss'
    ],

    vite: {
        //plugins: [compression()],
        build: {
            minify: 'esbuild',
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
            const from = path.resolve('assets/images');
            const to = path.resolve('public/images');

            if (await fse.pathExists(from)) {
                await fse.copy(from, to)
                console.log('Картинки скопированы из assets/images → public/images');
            } 
            else {
                console.warn('Папка assets/images не найдена');
            }
        }
    },
})