<template>
  <div class="hello">
    <h2>{{a}}</h2>
    <h1>{{ name }}</h1>
    <button @click="clk2">改变</button>
    <button @click="clk">改变</button>
  </div>
</template>

<script>
import {ref} from "vue"
export default {
  name: 'HelloWorld',
  data(){
      return{
        a:"今天的天气非常好"
      }
  },
  methods:{
     clk2(){
       this.a='明天又是一个大晴天';
     }
  },
  setup(){
     let name = ref("张三");
     function clk(){
       name.value = "李四";
     }
     return {
       name,
       clk
     }
  }
}
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
