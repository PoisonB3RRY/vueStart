import { reactive,onBeforeUnmount,onMounted } from "vue"

function pointSave(){
    let point = reactive({
        x:0,
        y:0
    })
    onMounted(()=>{
        point.x=1
        point.y=2
    })
    setInterval(()=>{
        point.x++;
        point.y++;
    },1000)
    
    return point;
}

export default pointSave;