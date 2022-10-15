<template>
    <div class="hello">
        <h3>获取坐标,x:{{point.x}},y:{{point.y}}</h3>
    </div>
</template>
<script>
import pointSave from "./usePoint"
export default {
    setup(){
        let point = pointSave();     
            console.log("s",point);
            console.log("ss",point)
            let obj = {}
            for(let itm in point){
                obj[itm] = point[itm]
            }
            console.log(obj)
        return {point};
    }
}
</script>

