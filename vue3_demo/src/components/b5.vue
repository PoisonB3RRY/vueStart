<template>
  <div class="hello">
    <h2>{{name}}</h2>
    <h5>count:{{count}}</h5>
    <div>{{user.name}},{{user.sex}},{{user.cls.a}},{{user.cls.b.c}}</div>
    <div>{{user2.name}},{{user2.sex}},{{user2.cls.a}},{{user2.cls.b.c}}</div>
    <div v-for="(arr2,index) in arr" :key="index">
      {{arr2}}
    </div>
     <div v-for="(arr3,index) in arr2" :key="index">
      {{arr3}}
    </div>
  </div>
</template>

<script>
import { onMounted,ref,reactive } from 'vue'
export default {
  name: "hello",
  setup(msg) {
    onMounted(()=>{
      console.log("onMounted");
    })
    console.log(msg);

    //创建定时器增加count值
    let count = ref(1);
    let arr  = ref(["aa","bb"]);

    let arr2  = reactive(["aa","bb"])

    let user = ref({
        name:"张三",
        sex:"男",
        cls:{
            a:"一班",
            b:{
              c:"一年级"
            }
        }
    });

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

      count.value++
      user.value.cls.a = "二班"
      user.value.cls.b.c = "二年级"
      arr.value[1]="cc";


      arr2[1]="cc2"
      user2.cls.a = "二班"
      user2.cls.b.c = "二年级"

    },1000)
    
    return { name:"Mr liu",count:count,user:user,user2:user2,arr:arr,arr2:arr2 };
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
