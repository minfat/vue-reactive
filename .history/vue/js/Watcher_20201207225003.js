class Watcher{
    constructor(vm,key,cb,oldValue) {
        this.vm = vm 
        //data中的属性名
        this.key = key 
        //回调函数负责更新视图
        this.cb = cb 
        //把当前watcher对象记录到dep类的静态属性target
        //触发get方法，在get方法中会调用addSub
        
        this.oldValue = vm[key]
    }
    //当数据发生变化的时候更新视图
    update() {
        let newValue = this.vm[this.key]
        if(this.oldValue === newValue) {return}
        this.cb(newValue)
    }
}