class Compiler {
    constructor(vm) {
        this.el = vm.el 
        this.vm = vm 
    }
    //编译模板，处理文本节点和元素节点
    compile(el) {
        let childNodes = el.childNodes
        //Array.from将伪数组
        Array.from(childNodes).forEach(node=>{
            if(this.isTextNode(node))
        })
    }
    //编译元素节点，处理指令
    compileElement(node) {

    }
    //编译文本节点，处理差值表达式
    compileText(node) {

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