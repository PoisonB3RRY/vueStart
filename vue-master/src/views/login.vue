<template>
  <div class="main-app-login">
    <el-form label-position="left" label-width="80px" size="default" style="max-width: 300px">
      <el-form-item label="Name">
        <el-input v-model="loginFrom.name"></el-input>
      </el-form-item>
      <el-form-item label="Password">
        <el-input v-model="loginFrom.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="loginIn()">LOGIN</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity';
import { useStore } from 'vuex'
import { useRouter, useRoute } from "vue-router";

import { actions } from "@/micros"
import { onMounted } from '@vue/runtime-core';

export default {
  components: {

  },
  props: {

  },
  setup() {
    const Store = useStore()
    const Router = useRouter()

    const loginFrom = reactive({
      name: '',
      password: '',
    })

    // onMounted(() => {
    //   actions.onGlobalStateChange((state) => {
    //     // state: 变更后的状态; prevState: 变更前的状态
    //     console.log("主应用观察者：状态改变", state);
    //   })
    // })

    let loginIn = () => {
      let token = loginFrom.name + "&" + loginFrom.password
      Store.commit("setToken", token)

      //   微应用 通信
      actions.setGlobalState({ globalToken: token })

      console.log("token", Store.state.token)
      Router.push("/")
    }

    return { loginFrom, loginIn }
  },

};
</script>

<style lang="scss" scoped>
.main-app-login {
  text-align: center;
}
</style>
