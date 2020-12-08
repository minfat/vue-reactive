class Observer{
    constructor(data) {
        this.walk(data)
    }
    //遍历data对象的所有属性
    walk(data) {
        //1.判断data是否是对象
        if(!data || typeof data !=='object') {
            return
        }
        //2.遍历data对象的所有属性
        Object.keys(data).forEach(key=>{
            
        })
    }
    //转换getter,setter
    defineReactive(obj,key,val) {

    }
}