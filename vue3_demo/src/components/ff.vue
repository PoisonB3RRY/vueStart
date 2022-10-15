<template>
    <cc :msg="info.msg"
        :say="info.say"
        @giveF="getF">
        <div>获取传入值</div>
        <div>{{info.val}}</div>
    </cc>
</template>
<script>
import { reactive } from "vue"
import cc from "./cc.vue"
export default {
    components:{
        cc
    },
    setup(){
        let info = reactive({
            msg:"一个程序员",
            say:"18岁",
            val:""
        })
        function getF(d){
            console.log(d)
            info.val = d;
        }
        return{
            info,
            getF
        }
    }
}
</script>
