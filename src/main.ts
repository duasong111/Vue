import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'


const app = createApp(App)

app.mount('#app')

// console.log('Initial URL:', window.location.href) // 打印初始 URL
