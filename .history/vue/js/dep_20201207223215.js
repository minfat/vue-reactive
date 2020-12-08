class Dep{
    constructor() {
        //存储所有的观察者
        this.subs= []
        console.log(this.subs,'---this.subs---')
    }
    //添加观察者
    addSub(sub) {
        //所有观察者都有一个update方法
        if(sub && sub.update) {

        }
    }
    //发送通知
    notify() {

    }
}