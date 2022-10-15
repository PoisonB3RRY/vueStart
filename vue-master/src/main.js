import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import 'zone.js';
import router from './router'
import store from './store'
import start from '@/micros'

import vueDragging from "./directives/vue-dragging.es5"

const Vue = createApp(App)


Vue.use(store)
Vue.use(router)
Vue.use(ElementPlus, { size: 'small', zIndex: 3000 })
Vue.use(vueDragging)
Vue.mount('#app')

start({ sandbox: { experimentalStyleIsolation: true } })
