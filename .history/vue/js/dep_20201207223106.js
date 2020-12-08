class Dep{
    constructor() {
        //存储所有的观察者
        this.subs= []
        console.log(this.subs,'---this.subs---')
    }
}