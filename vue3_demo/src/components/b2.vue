<template>
  <div class="hello">
    <h1>{{ name }}</h1>
  </div>
</template>
<script>
export default {
  name: "hello",
  setup(msg) {
    console.log("我执行了",msg);
    return { name:"Mr tao" };
  },
  beforeCreate(){
    console.log("beforeCreate");
  }
};
</script>
<style scoped>
</style>