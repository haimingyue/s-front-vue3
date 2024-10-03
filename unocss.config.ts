// import { defineConfig } from 'unocss'
import presetWind from '@unocss/preset-wind'
// import { presetWind, presetIcons } from 'unocss'
import { defineConfig, transformerDirectives, transformerVariantGroup } from 'unocss'
import presetIcons from '@unocss/preset-icons'

export default defineConfig({
  shortcuts: {
    'router-link': 'text-white text-xl px-8 py-2 cursor-pointer font-300 hover:font-500',
    'bg-image': 'w-full h-full bg-cover bg-no-repeat bg-center-top',
    'btn': 'px-4 py-2 bg-sky-400 text-white hover:bg-sky-300 cursor-pointer',
    'btn-plain': 'px-4 py-2 border border-sky-400 text-sky-400 hover:(bg-sky-400 text-white) cursor-pointer'
  },
  presets: [
    presetWind(),
    presetIcons({
      // prefix: 'i-'
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle'
        // ...
      }
    })
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  theme: {
    colors: {
      main: '#4E98F4'
    }
  },
  // 从接口加载出来的动态class
  safelist: ['i-mdi:web']
})
