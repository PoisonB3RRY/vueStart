<template>
  <div class="app-main">
    <div class="app-nav" v-show="appToken">
      <template v-for="menu in menuList" :key="menu.name">
        <div class="nav-a-btn" :class="{'router-active':menuActive==menu.path}"
          @click="menuChangeRouter(menu)">{{menu.btnName}}</div>
      </template>
    </div>
    <div class="app-content">
      <div class="app-header-content" v-show="appToken">
        <div> {{crumbsRouter}}</div>
        <div>Token： {{appToken}}</div>
        <el-button type="primary" round @click="loginOut">退出登录</el-button>
      </div>
      <div class="app-container">
        <router-view></router-view>
        <!-- 新添加，微应用的容器 -->
        <div id="micro-container"></div>
      </div>
    </div>
  </div>

</template>

<script setup>
import { reactive, toRefs, ref } from "@vue/reactivity";
import { computed, watch, onMounted } from "@vue/runtime-core";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import { actions } from "@/micros"


const Router = useRouter()
const Route = useRoute()
const Store = useStore()

let state = reactive({
  menuList: [
    {
      name: 'home',
      path: '/master-home',
      btnName: '主-home'
    },
    {
      name: 'master-about',
      path: '/master-about',
      btnName: '主-about'
    },
    {
      name: 'micro-home',
      path: '/vue2-micro-app/home',
      btnName: '子-home'
    },
    {
      name: 'micro-about',
      path: '/vue2-micro-app/about',
      btnName: '子-about'
    }
  ],
  menuActive: computed(() => Route.path),
  crumbsRouter: computed(() => {
    let name = ""
    state.menuList.forEach(item => {
      if (state.menuActive == item.path) {
        name = item.btnName
      }
    })
    return name
  }),
  // 从环境变量中取参数
  appId: process.env.VUE_APP_MICRO_ENTRY,
  appToken: computed(() => Store.state.token)
})

watch(() => Route.path, (val, oval) => {
  console.log("监听路由变化", val, oval)
})

onMounted(() => {
  actions.onGlobalStateChange((state) => {
    // state: 变更后的状态; prevState: 变更前的状态
    console.log("主应用观察者：状态改变", state);
    let token = state.globalToken
    Store.commit("setToken", token)
    console.log("全局token", Store.state.token)
  })
})

let menuChangeRouter = (row) => {
  state.menuActive = row.name
  // 路由跳转方式
  Router.push({ path: row.path })
  // 跳转方法二 
  //  window.history.pushState({}, '', '/#'+row.path)
}

let loginOut = () => {
  Store.commit("loginOut")
  Router.push('/login')
}

let { menuList, menuActive, crumbsRouter, appId, appToken } = toRefs(state)


</script>


<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
$leftWidth: 200px;
.app-main {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
  background: #f6f7fc;
}
.app-nav {
  width: $leftWidth;
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 0px 10px 0px rgb(0, 47, 60, 0.2);
  padding: 20px;
  box-sizing: border-box;
  background: #fff;
  z-index: 9;

  .nav-a-btn {
    width: 100%;
    height: 40px;
    line-height: 40px;
    background: #f3f4f5;
    margin-bottom: 10px;
    font-weight: bold;
    cursor: pointer;
  }

  .router-active {
    color: #42b983;
    background: #deeefdde;
  }
}
.app-content {
  width: calc(100% - $leftWidth);
  height: 100%;
  .app-header-content {
    padding: 0 20px;
    width: 100%;
    height: 50px;
    background: #ffffff;
    box-shadow: 0px 0px 8px 0px rgb(0 0 0 / 8%);
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    border-bottom: 1px solid #ccc;
  }
  .app-container {
    width: 100%;
    height: calc(100% - 50px);
    overflow: auto;
    padding: 20px;
    box-sizing: border-box;
  }
}

/* S 修改滚动条默认样式 */

::-webkit-scrollbar {
  width: 8px;
  background: white;
}

::-webkit-scrollbar-corner,
   /* 滚动条角落 */
::-webkit-scrollbar-thumb,
::-webkit-scrollbar-track {
  /*滚动条的轨道*/
  border-radius: 4px;
}

::-webkit-scrollbar-corner,
::-webkit-scrollbar-track {
  /* 滚动条轨道 */
  background-color: rgba(180, 160, 120, 0.1);
  box-shadow: inset 0 0 1px rgba(180, 160, 120, 0.5);
}

::-webkit-scrollbar-thumb {
  /* 滚动条手柄 */
  background-color: #00adb5;
}

/* E 修改滚动条默认样式 */
</style>
