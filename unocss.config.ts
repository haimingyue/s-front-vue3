// import { defineConfig } from 'unocss'
import presetWind from '@unocss/preset-wind'
// import { presetWind, presetIcons } from 'unocss'
import { defineConfig, transformerDirectives } from 'unocss'
import presetIcons from '@unocss/preset-icons'

export default defineConfig({
  shortcuts: {
    'router-link': 'text-white text-xl px-8 py-2 cursor-pointer font-300 hover:font-500',
    'bg-image': 'w-full h-full bg-cover bg-no-repeat bg-center-top'
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
  transformers: [transformerDirectives()]
})
