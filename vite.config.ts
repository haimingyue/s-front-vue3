import { fileURLToPath, URL } from 'node:url'
import VueRouter from 'unplugin-vue-router/vite'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// vite.config.ts
import UnoCSS from 'unocss/vite'
// vite.config.ts
import AutoImport from 'unplugin-auto-import/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
// import VueMacros from 'unplugin-vue-macros/vite'
import { viteMockServe } from 'vite-plugin-mock'
import { VitePWA } from 'vite-plugin-pwa'

import Layouts from 'vite-plugin-vue-layouts'
import postcssViewportPlugin from 'postcss-px-to-viewport-8-plugin'

import Markdown from 'unplugin-vue-markdown/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(
      {
        include: [/\.vue$/, /\.md$/], // <-- allows Vue to compile Markdown files
      }
    ),
    vueJsx(),
    VueRouter({
      /* options */
      extensions: ['.vue', '.md']
    }),
    UnoCSS(),
    AutoImport({
      // targets to transform
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/ // .md
      ],

      // global imports to register
      imports: [
        // presets
        'vue',
        // 'vue-router'
        VueRouterAutoImports,
        '@vueuse/core',
        'pinia'
      ]
    }),
    Components({
      /* options */
      resolvers: [
        IconsResolver({
          prefix: 'icon' // <--
        })
      ],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/]
    }),
    Icons({ /* options */ autoInstall: true }),
    Layouts({
      layoutsDirs: 'src/layouts',
      defaultLayout: 'default'
    }),
    VitePWA(),
    viteMockServe({
      // default
      mockPath: 'mock',
      enable: true
    }),

    Markdown({ /* options */ }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // css: {
  //   postcss: { 
  //     plugins: [
  //       // @ts-ignore
  //       postcssViewportPlugin({
  //         unitToConvert: 'px',
  //         viewportWidth: 750,
  //         unitPrecision: 5,
  //         propList: ['*', '!font-size'],
  //         viewportUnit: 'vw',
  //         fontViewportUnit: 'vw',
  //         selectorBlackList: [],
  //         minPixelValue: 1,
  //         mediaQuery: true,
  //         replace: true,
  //         exclude: /node_modules/,
  //         include: /\/src\//,
  //         landscape: false,
  //         landscapeUnit: 'vw',
  //         landscapeWidth: 1125,
  //       })
  //     ]
  //   }
  // }
})
