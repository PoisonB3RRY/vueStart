const state = {
    strA : "ABC",
    stus: localStorage["stus"] ? JSON.parse(localStorage["stus"]) : [],
}
export default state