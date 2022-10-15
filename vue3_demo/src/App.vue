<template>
  <div id="app">
    <ol class="fl l">
      <li>基础知识
      <ul>
        <li><a href="/">首页</a></li>
        <li>
          <a href="/b2">执行时机</a>
        </li>
        <li>
          <a href="/b3">包含时机</a>
        </li>
        <li>
          <a href="/b4">ref响应式变化</a>
        </li>
        <li>
          <a href="/b5">reactive响应式变化</a>
        </li>
        <li>
          <a href="/b6">监测变化</a>
        </li>
      </ul>
      </li>
       <li>传参与封装
      <ul>
        <li><a href="/ff">父与子传参</a></li>
        <li><a href="/dd">hooks封装</a></li>
      </ul>
       </li>
    </ol>
    <div class="fl">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App'
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
  h3,h2{
    margin: 0;
    padding: 0;
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
  .hello{
  padding: 20px;
  } 
  .hello div{
    margin: 5px 0;
  }
</style>
