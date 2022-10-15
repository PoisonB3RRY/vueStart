<template>
    <div class="iframe">
        <!-- 
              name(必传)：应用名称
              url(必传)：应用地址，会被自动补全为http://localhost:3000/index.html
              baseroute(可选)：基座应用分配给子应用的基础路由，就是上面的 `/my-page`
             -->
        <micro-app name='app1' 
            :data="dataForChild" 
            url='http://localhost:8081/' 
            baseroute='/my-page'></micro-app>
            
        <micro-app name='app2' 
            url='http://localhost:4200/' 
            baseroute='/my-page2'></micro-app>
    </div>
</template>

<script>
    export default {
        name: "MyPage",
        data() {
            return {
                dataForChild: {
                    type: '今天非常好'
                }
            }
        }
    }
</script>

<style scoped>
    .iframe{
        border: solid 1px #ccc;
        display: flex;
        flex: 1
    }
    .iframe micro-app{
        width: 50%
    }
</style>


