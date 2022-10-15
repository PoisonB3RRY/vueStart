import Vue from 'vue'
import vuex from 'vuex' //导入之前必须先安装，否则报错
import state from './state'
import mutations from './mutations' //名称必须添加s，否则找不到
import actions from './actions' //名称必须添加s，否则找不到

Vue.use(vuex);

export default new vuex.Store({
    state,
    mutations,
    actions
})