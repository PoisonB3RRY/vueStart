const mutations = {
    // 增加学生信息
    add_stus(state, data) {
        state.stus.push(data);
        localStorage.setItem("stus", JSON.stringify(state.stus));
    },
    // 删除学生信息
    del_stus: (state, index) => {
        state.stus.splice(index, 1);
        localStorage.setItem("stus", JSON.stringify(state.stus));
    }
}
export default mutations