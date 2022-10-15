import { createApp } from 'vue'
import App from './App.vue'
import 'zone.js'
import microApp from '@micro-zoe/micro-app'
microApp.start();
console.log(microApp)
createApp(App).mount('#app')
