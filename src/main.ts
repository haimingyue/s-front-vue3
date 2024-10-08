import './assets/main.scss'
// import 'reset-scss'
// import 'virtual:uno.css'
import 'uno.css'
// import '@unocss/reset/normalize.css'
import '@unocss/reset/tailwind.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
