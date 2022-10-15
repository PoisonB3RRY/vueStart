<template>
    <ul>
        <li class="title">
            <span>姓名</span>
            <span>分数</span>
            <span>操作</span>
        </li>
        <li v-for="(item,index) in stus" class="item">
            <span>{{item.name}}</span>
            <span>{{item.score}}</span>
            <span @click="del_stus(index)">删除</span>
        </li>
    </ul>
</template>

<script>
import {
    mapMutations
} from "vuex"
export default {
    props: {
        stus: {
            type: Array,
            required: true
        }
    },
    methods: {
        ...mapMutations(["del_stus"])
    }
}
</script>
<style scoped>
    li{
        overflow: hidden;
         background-color: #fff;
         padding: 8px;
         border-bottom: dashed 1px #eee;
    }
    li span{
        float: left;
        width: 85px;
        cursor: pointer;
    }
    .title{
       background-color: #eee;
       font-weight: 700;
    }
</style>


