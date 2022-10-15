export default {
    ws:[],
    _createObj:function(o){
        this.ws = o;
    },
    _pushObj:function(x){
        this.ws.push(x)
    },

    num:0,
    _createNum:function(v){
        this.num =v;
    },
    _addNum:function(){
        this.num++;
    },
    
    i:0,
    arr:[]
}