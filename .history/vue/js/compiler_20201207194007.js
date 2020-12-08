class Compiler {
    constructor(vm) {
        this.el = vm.$el 
        this.vm = vm 
        this.compile(this.el)
        
    }
    //编译模板，处理文本节点和元素节点
    compile(el) {
        let childNodes = el.childNodes
        //Array.from将伪数组
        Array.from(childNodes).forEach(node=>{
            //处理文本节点
            if(this.isTextNode(node)) {
                this.compileText(node)
            }else if(this.isElementNode(node)) {
                //处理元素节点
                this.compileElement(node)
            }
            //判断node节点，是否有子节点,如果有子节点，要递归调用compile
            if(node.childNodes && node.childNodes.length) {
                this.compile(node)
            }
        })
    }
    //编译元素节点，处理指令
    compileElement(node) {
        //遍历所有的属性节点
        Array.from(node.attributes).forEach(attr=>{
            let attrName = attr.name 
            if(this.isDirective(attrName)) {
                //v-text ==>text 
                attrName = attrName.substr(2)
                let key = attr.value
                this.update(node,key,attrName)
            }
        })
        
    }
    update(node,key,attrName) {
        console.log(attrName,'--attrName---')
        let updateFn = this[attrName+'Updater']
        console.log(updateFn,'---updateFn---')
        updateFn && updateFn(node,this.vm[key])
    }
    //处理 v-text 指令
    textUpdater(node,value) {
        console.log(value,'-value-')
        console.log(node,'---node---')
        node.textContet = value
        console.log(node.textContet,'----node.textContet----')
    }
    //处理 v-model 
    modelUpdater(node,value) {
        node.textContet = value 
    } 
    //编译文本节点，处理差值表达式
    compileText(node) {
        let reg = /\{\{(.+?)\}\}/
        let value = node.textContet
        if(reg.test(value)) {
            let key = RegExp.$1.trim()
            node.textContet = value.replace(reg,this.vm[key])
            console.log(node.textContet,'--node.textContet--')
        }
    }
    //判断元素属性是否是指令
    isDirective(attrName) {
        //判断字符串是否以v-开头
        return attrName.startsWith('v-')
    }
    //判断节点是否是文本节点
    isTextNode(node) {
        //nodeType === 1 元素节点 nodeType === 3 文本节点
        return node.nodeType === 3 
    }
    //判断节点是否是元素节点
    isElementNode(node) {
        return node.nodeType === 1 
    }
}