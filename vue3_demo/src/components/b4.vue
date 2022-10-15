<template>
  <div class="hello">
    <h2>{{name}}</h2>
    <h5>count:{{count}}</h5>
    <div>{{user.name}},{{user.sex}}</div>
  </div>
</template>

<script>
import { onMounted,ref } from 'vue'
export default {
  name: "hello",
  setup(msg) {
    onMounted(()=>{
      console.log("onMounted");
    })
    console.log(msg);

    //创建定时器增加count值
    let count = ref(1);
    let user = ref({
        name:"张三",
        sex:"男"
    });
    setInterval(()=>{
      count.value++
      user.value.name = "李四"
    },1000)
    return { name:"Mr liu",count:count,user:user };
  },
  beforeCreate(){
    console.log("beforeCreate");
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
