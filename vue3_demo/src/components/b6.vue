<template>
  <div class="hello">
    <h2>{{name}}</h2>
    <h5>count:{{count}}</h5>
    <h5>count2:{{count2}}</h5>
    <div>{{user2.name}},{{user2.sex}},{{user2.cls.a}},{{user2.cls.b.c}}</div>
  </div>
</template>

<script>
import { onMounted,ref,watch,computed,reactive } from 'vue'
export default {
  name: "hello",
  setup(msg) {
    onMounted(()=>{
      console.log("onMounted");
    })
    console.log(msg);

    //创建定时器增加count值
    let count = ref(1);
    let user2 = reactive({
        name:"张三",
        sex:"男",
        cls:{
            a:"一班",
            b:{
              c:"一年级"
            }
        }
    });

    setInterval(()=>{
      count.value++;
      user2.cls.a = "二班"
    },1000)


    watch(count, (newValue, oldValue) => {
      console.log(newValue,oldValue);
      console.log(count.value);
    });

    watch(user2, (newValue, oldValue) => {
      console.log("对象检测")
      console.log(newValue,oldValue);
      console.log(count.value);
    });

    watch(()=>user2.cls.a, (newValue, oldValue) => {
      console.log("对象属性检测")
      console.log(newValue,oldValue);
      console.log(count.value);
    },{deep:true})


  


    let count2 = computed(()=>count.value*2);

    return { name:"Mr liu",count2:count2,count:count,user2:user2 };
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
