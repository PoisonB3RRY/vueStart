import { createRouter, createWebHashHistory } from 'vue-router'
import store from '../store'

const routes = [
  {
    path: '/',
    redirect:'/master-home'
  },
  {
    path: '/master-home',
    name: 'master-home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/master-about',
    name: 'master-about',
    component: () => import('../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if(to.path !== '/login') {
    if(store.state.token) {
      next()
    }else {
      console.log("主应用 - 未登录 去登陆")
      next('/login')
    }
  }else {
    next()
  }
})


export default router
