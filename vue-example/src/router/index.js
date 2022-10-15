import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import { login, register, hots, news, main, footer } from '@/components/4-路由/路由详细/routers'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/a',
      name: 'a1',
      component: resolve => require(['@/components/1-入口开始/a1'],resolve)
    },
    {
      path: '/b',
      name: 'b1',
      component: resolve => require(['@/components/1-入口开始/b1'],resolve)
    },
    {
      path: '/c',
      name: 'c1',
      component: resolve => require(['@/components/2-数据驱动/c1'],resolve)
    },
    {
      path: '/d',
      name: 'd1',
      component: resolve => require(['@/components/2-数据驱动/d1'],resolve)
    },
    {
      path: '/e',
      name: 'e1',
      component: resolve => require(['@/components/3-组件化/全局注册/index'],resolve)
    },
    {
      path: '/f',
      name: 'f1',
      component: resolve => require(['@/components/3-组件化/非父子间传值/index'],resolve)
    },
    {
      path: '/g',
      name: 'g1',
      component: resolve => require(['@/components/3-组件化/按需加载/index'],resolve)
    },
    {
      path: '/log',
      name: 'Log',
      component: login
    },
    {
      path: '/reg',
      name: 'Reg',
      component: register
    },
    {
      path: '/ccc',
      redirect: "log"
    },
    {
      path: '/eee',
      name: 'eee',
      component: resolve => require(['@/components/4-路由/路由详细/index'],resolve)
    },
    {
      path: '/aaa',
      name: 'aaa',
      component: resolve => require(['@/components/4-路由/路由传参/index'],resolve)
    },
    {
      path: '/test',
      name: 'test',
      component: resolve => require(['@/components/4-路由/路由传参/test'],resolve)
    },
    {
      path: '/test/:cid',
      name: 'c-test',
      component: resolve => require(['@/components/4-路由/路由传参/test'],resolve)
    },
    {
      path: '/bbb',
      name: 'bbb',
      component: resolve => require(['@/components/4-路由/路由嵌套/index'],resolve),
      children: [
        {
          path: 'news',
          component: news
        },
        {
          path: 'hots',
          component: hots
        }
      ]
    },
    {
      path: '/ddd',
      components: {
        default: resolve => require(['@/components/4-路由/命名视图/index'],resolve),
        m: main,
        f: footer
      }
    },
    {
      path: '/fff',
      name: 'fff',
      component: resolve => require(['@/components/5-vuex/index'],resolve)
    }
  ]
})
