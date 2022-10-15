<template>
    <div class="act2">
        <div>
            <label for="name">姓名:</label>
            <input type="text" class="txt" placeholder="请输入姓名" name="name" v-model="name" />
        </div>
        <div>
            <label for="score">分数:</label>
            <input type="number" class="txt" name="score" v-model="score" />
        </div>
        <div>
            <label for="add"></label>
            <input type="button" value="增加" @click="add" />
        </div>
    </div>
</template>

<script>
import {
    mapMutations
} from "vuex"
export default {
    data() {
        return {
            name: "",
            score: 0
        }
    },
    methods: {
        ...mapMutations(["add_stus"]),
        add: function () {
            if (this.name.length > 0 && this.score> 0) {
                let _obj = {
                    "name": this.name,
                    "score": this.score
                }
                this.add_stus(_obj);
                this.name="";
                this.score=0;
            }else{
                console.log('姓名或分数不正确！')
            }
        }
    }
}
</script>

<style scoped>
.act2 {
  margin: 8px 0;
  background-color: #fff;
  padding: 5px;
}
.act2 div {
  margin: 8px 0;
}
.act2 .txt {
  padding: 5px;
}
.act2 label {
  display: inline-block;
  width: 50px;
  text-align: right;
}
</style>


