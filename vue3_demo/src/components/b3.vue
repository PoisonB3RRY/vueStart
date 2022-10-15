<template>
  <div class="hello">
    <h2>{{name}}</h2>
  </div>
</template>

<script>
import { onMounted } from 'vue'
export default {
  name: "hello",
  setup(msg) {
    onMounted(()=>{
      console.log("onMounted");
    })
    console.log(msg);
    return { name:"Mr liu" };
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
