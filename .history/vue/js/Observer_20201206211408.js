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
            this.defineReactive(data,key,data[key])
        })
    }
    //转换getter,setter
    defineReactive(obj,key,val) {
        //如果val是对象，把val内部的属性转换成响应式的。递归
        this.walk(val)
        Object.defineProperty(obj,key,{
            enumerable:true,//可枚举
            configurable:true,//可配置
            get() {
                return val //obj[key] 会发生死递归，这就是为什么要传递val而不是直接用obj[key]
            },
            set(newValue) {
                if(newValue === val) {retun}
                val = newValue
                this.walk(newValue)
                //发送给通知
            }
            
        })
    }
}