<template>
  <div>主应用</div>
  <MyPage />
</template>

<script>
import MyPage from './components/MyPage.vue'

export default {
  name: 'App',
  components: {
    MyPage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
