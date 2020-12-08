class Watcher{
    constructor(vm,key,cb,oldValue) {
        this.vm = vm 
        //data中的属性名
        this.key = key 
        //回调函数负责更新视图
        this.cb = cb 
        this.oldValue = vm[key]
    }
    //当数据发生变化的时候更新视图
    update() {
        
    }
}