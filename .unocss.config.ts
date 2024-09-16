// import { defineConfig } from 'unocss'
import presetWind from '@unocss/preset-wind'
// import { presetWind, presetIcons } from 'unocss'
import { defineConfig } from 'unocss'
import presetIcons from '@unocss/preset-icons'

export default defineConfig({
  presets: [
    presetWind(),
    presetIcons({
      // prefix: 'i-'
      // extraProperties: {
      //   display: 'inline-block',
      //   'vertical-align': 'middle'
      //   // ...
      // }
    })
  ]
})
