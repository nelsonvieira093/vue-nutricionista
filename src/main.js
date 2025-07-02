import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import router from './router'
import '@progress/kendo-theme-default/dist/all.css'


createApp(App).use(router).mount('#app')
