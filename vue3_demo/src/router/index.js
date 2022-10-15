
import { createRouter, createWebHistory } from 'vue-router';
import HelloWorld from '@/components/HelloWorld'
import b2 from '@/components/b2'
import b3 from '@/components/b3'
import b4 from '@/components/b4'
import b5 from '@/components/b5'
import b6 from '@/components/b6'
import ff from '@/components/ff'
import dd from '@/components/dd'

// 1. 定义路由组件

// 2. 定义一些路由
const routes = [
  { path: '/', component: HelloWorld },
  { path: '/b2', component: b2 },
  { path: '/b3', component: b3 },
  { path: '/b4', component: b4 },
  { path: '/b5', component: b5 },
  { path: '/b6', component: b6 },
  { path: '/ff', component: ff },
  { path: '/dd', component: dd },
]
// 3. 创建路由实例并传递 `routes` 配置
const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHistory(),
  routes, // `routes: routes` 的缩写
})

// 路由守卫
router.beforeEach(() => {
  // const isLogin = localStorage.getItem("loginUserInfo") ? true : false;
  // if (to.path == '/log' || to.path == '/reg') {
  //   next();
  // } else {
  //   // 是否在登录状态下
  //   isLogin ? next() : next('/log');
  // }
});

export default router;