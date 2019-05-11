# 如何通过数据劫持实现mvvm框架 #
  
## 代码 ##
```javascript
class Kvue{
    constructor(options) {
        this.$options = options;
        this._data = options.data;
        // 劫持数据
        this.observer(this._data);
        this.compile(options.el);
    }
    observer(data) {
        // 监控数据变化 (数据劫持)
        Object.keys(data).forEach(key => {
            // 每个key都要做劫持
            let value = data[key];
            let dep = new Dep();
            Object.defineProperty(data, key, {
                configurable: true,
                enumerable: true,
                get() {
                    if(Dep.target) {
                        dep.addSub(Dep.target);
                    }
                    return value;
                },
                set(newValue) {
                    console.log("set", newValue);
                    if(newValue !== value)
                    value = newValue;
                    dep.notify(newValue);
                }
            })
        });
    }
    compile(el) {
        let element = document.querySelector(el);
        this.compileNode(element);
    }
    compileNode(element) {
        // 遍历所有子节点
        let childNode = element.childNodes;
        // console.log(childNodes);
        Array.from(childNodes).forEach(node => {
            if(node.nodeType == 3) {
                // 文本
                let nodeContent = node.textContent;
                let reg = /\{\{\s*(\S.*)\s*\}\}/;
                if (reg.test(nodeContent)) {
                    console.log(RegExp.$1); // 选择正则的第一个结果
                    node.textContent = this._data[RegExp.$1];
                    new Watcher(this, RegExp.$1, newValue=> {
                        node.textContent = newValue;
                    });
                }
            } else if(node.nodeType == 1) {
                // 标签
                let attrs = node.attributes;
                console.log(attrs);
            }
            if(node.childNodes.length > 0) {
                // 如果递归完，再调用自己
                this.compileNode(node);
                Array.from(attrs).forEach(attr => {
                    console.log(attr);
                    let attrName = attr.name;
                    let attrValue = attr.value;
                    if(attrName.indexOf("k-") == 0) {
                        attrName = attrName.substr(2);
                        if(attrName == "model") {
                            node.value = this._data[attrValue];
                        }
                        // 监控双向绑定事件
                        node.addEventListener("input", e => {
                            // console.log(e.target.value);
                            this._data[attrValue] = e.target.value;
                        });
                        new Watcher(this, attrValue, newValue=> {
                            node.value = newValue;
                        });
                    }
                });
            }
        });

    }
}

// 发布订阅
// 发布模式目的是通知，并不是更新
class Dep {
    constructor() {
        this.subs = [];
    }
    addSub(sub) {
        this.subs.push();
    }
    notify(newValue) {
        this.subs.forEach(v => {
            v.update(newValue);
        });
    }
}

class Watcher {
    constructor(vm, exp, cb) {
        Dep.target = this;
        vm._data[exp];
        this.cb = cb;
        Dep.target = null;
    }
    update(newValue) {
        console.log("更新了", newValue);
        this.cb(newValue);
    }
}
```





