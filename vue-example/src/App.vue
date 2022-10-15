<template>
  <div id="app">
    <ol class="fl l">
      <li>入口开始
        <ul>
          <li><a href="#/a">全局方法</a></li>
          <li><a href="#/b">全局对象</a></li>
        </ul>
      </li>
      <li>数据驱动
        <ul>
          <li><a href="#/c">购物车</a></li>
          <li><a href="#/d">监听路由</a></li>
          <li><a href="javascript:;" @click="refresh">刷新路由</a></li>
        </ul>
      </li>
      <li>组件化
        <ul>
          <li><a href="#/e">全局注册</a></li>
          <li><a href="#/f">非父子间传参</a></li>
          <li><a href="#/g">按需加载</a></li>
        </ul>
      </li>
      <!-- <li>路由
        <ul>
          <li><a href="#/eee">路由配置</a></li>
          <li><a href="#/ccc">重置路由</a></li>
          <li><a href="#/aaa">路由传参</a></li>
          <li><a href="#/bbb">路由嵌套</a></li>
          <li><a href="#/ddd">命名视图</a></li>
        </ul>
      </li> -->
      <li>vuex
        <ul>
          <li><a href="#/fff">人员信息管理</a></li>
        </ul>
      </li>
    </ol>
    <div class="fl">
      <router-view :key="activeDate"></router-view>
      <router-view name="m"></router-view>
      <router-view name="f"></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App',
     data() {
      return {
        activeDate: ''
      }
    },
    methods: {
      refresh: function() {
        this.activeDate = (new Date()).toString();
      }
    }
  }
</script>

<style>
  #app {
    font-size: 16px;
    float: left;
    border: dashed 1px #666;
    border-radius: 8px;
    box-shadow: 5px 5px 8px #eee;
    width: 100%;
  }
  router-view {
    border: solid 1px red;
  }
  img {
    width: 80px;
  }
  ul {
    padding: 0px;
    margin: 0px;
    list-style-type: none;
  }
  .l {
    width: 170px;
  }
  .fl {
    float: left;
  }
  a {
    text-decoration: aqua;
    display: inline-block;
    color: #444;
    font-size: 13px;
  }
  .frame {
    margin-top: 15px;
  }
  .frame>div {
    margin: 15px 0;
  }
  .frame>div>span {
    margin-right: 30px;
  }
</style>

