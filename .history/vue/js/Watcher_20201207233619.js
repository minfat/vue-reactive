class Watcher{
    constructor(vm,key,cb,oldValue) {
        this.vm = vm 
        //data中的属性名
        this.key = key 
        //回调函数负责更新视图
        this.cb = cb 
        //把当前watcher对象记录到dep类的静态属性target
        Dep.target = this //this就是 watcher对象
        //触发get方法，在get方法中会调用addSub
        this.oldValue = vm[key]
        console.log(this.oldValue,'----this.oldValue---')
        Dep.target = null
    }
    //当数据发生变化的时候更新视图
    update() {
        console.log(this.vm,'------this.vm---------------')
        let newValue = this.vm[this.key].test
        console.log(newValue,'----newValuessssssssss----')
        if(this.oldValue === newValue) {return}
        this.cb(newValue)
    }
}