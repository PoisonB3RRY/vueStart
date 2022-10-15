<template>
    <div class="frame">
        <h3>学生信息管理</h3>
        <div class="act">
            <item :stus="stus"></item>
            <add></add>
        </div>
    </div>
</template>

<script>
    import item from "./item"
    import add from "./add"
    export default {
        data() {
            return {
                stus: this.$store.state.stus
            }
        },
        components:{
            item:item,
            add:add
        }
    }
</script>

<style scoped>
    .frame {
        margin: 15px 0px;
    }
    .act {
        width: 100%;
        margin: 10px 0px;
        background-color: #eee;
        padding: 10px;
        border: solid 1px #ccc;
    }
</style>


