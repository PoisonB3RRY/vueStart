<template>
    <div class="hello">
        <h3>{{info.name}},{{info.msg}},{{info.say}}</h3>
        <slot></slot>
        <div>
            <button @click="giveValue">传参</button>
        </div>
    </div>
</template>
<script>
import { reactive } from "vue"
export default {
    name:"cc",
    props:[
        "msg",
        "say"
    ],
    emits:["giveF"],
    setup(props,context){
        
        
        let info = reactive({
            name:"tgrong",
            msg:props.msg,
            say:props.say
        })
       function giveValue(){
           context.emit("giveF","今天是个大晴天")
        }
        return{
            info,
            giveValue
        }
    }
}
</script>

