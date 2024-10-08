/// <reference types="vite/client" />
/// <reference types="unplugin-vue-router/client" />
/// <reference types="vite-plugin-vue-layouts/client" />
/// <reference types="unplugin-vue-macros/macros-global" />
/// <reference types="unplugin-vue-define-options" />
/// <reference types="vite-plugin-pwa/client" />

declare module '*.md' {
    import type { ComponentOptions } from 'vue'

    const Component: ComponentOptions

    export default Component
}