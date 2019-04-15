# ECMAScript 6 #
http://es6.ruanyifeng.com/#README


## ECMAScript 6 简介 ##
#### ECMAScript和JavaScript的关系 ####
#### ES6与ECMAScript 2015的关系 ####
#### 语法提案的批准流程 ####
#### ECMAScript的历史 ####
#### 部署进度 ####
#### Babel转码器 ####
#### Traceur转码器 ####
## let和const命令 ##
#### let命令 ####
#### 块级作用域 ####
#### const命令 ####
#### 顶层对象的属性 ####
#### global对象 ####
## 变量的解构赋值 ##
#### 数组的解构赋值 ####
#### 对象的解构赋值 ####
#### 字符串的解构赋值 ####
#### 数值和布尔值的解构赋值 ####
#### 函数参数的解构赋值 ####
#### 圆括号问题 ####
#### 用途 ####
## 字符串的扩展 ##
#### 字符的Unicode表示法 ####
#### codePointAt() ####
#### String.fromCodePoint() ####
#### 字符串的遍历器借口 ####
#### normalize() ####
#### includes(), startsWith(), endsWith() ####
#### repeat() ####
#### padStart(), padEnd() ####
#### matchAll() ####
#### 模块字符串 ####
#### 实例: 模版编译 ####
#### 标签模版 ####
#### String.raw() ####
#### 模版字符串的限制 ####
## 正则的扩展 ##
#### RegExp构造函数 ####
#### 字符串的正则方法 ####
#### u修饰符 ####
#### RegExp.prototype.unicode属性 ####
#### y修饰符 ####
#### RegExp.prototype.sticky属性 ####
#### RegExp.prototype.flags属性 ####
#### s修饰符: dotAll模式 ####
#### 后行断言 ####
#### Unicode属性类 ####
#### 具名组匹配 ####
#### String.prototype.matchAll ####
## 数值的扩展 ##
#### 二进制和八进制表示法 ####
#### Number.isFinite(), Number.isNaN() ####
#### Number.parseInt(), Number.parseFloat() ####
#### Number.isInteger() ####
#### Number.EPSILON ####
#### 安全整数和Number.isSafeInteger() ####
#### Math对象的扩展 ####
#### 指数运算符 ####
## 函数的扩展 ##
#### 函数参数的默认值 ####
#### rest参数 ####
#### 严格模式 ####
#### name属性 ####
#### 箭头函数 ####
ES6允许使用箭头`=>`定义函数。  
```javascript
var f = v => v;
// the same as
var f = function(v) {
    return v;
}
```  
如果箭头函数不需要或者需要多个参数，就使用一个圆括号来代表参数部分。  
```javascript
var f = () => 5;
// the same as
var f = function() { return 5; };

var sum = (num1, num2) => num1 + num2;
// the same as
var sum = function(num1, num2) {
    return num1 + num2;
}
```  
箭头函数的一个用处是**简化回调函数**。  
```javascript
[1, 2, 3].map(function(x) {
    return x * x;
});
// the same as
[1, 2, 3].map(x => x * x);
```  
  
使用注意点：  
* 函数体内的`this`对象，就是定义所在的对象，不是使用时所在的对象。
* 不可以使用new命令。
* 不可以使用`arguments`对象，如果要用，就用`rest`参数。
* 不可以使用yield命令，所以剪头函数不能用作generator函数。
#### 双冒号运算符 ####
#### 尾调用优化 ####
#### 函数参数的尾逗号 ####
## 数组的扩展 ##
#### 扩展运算符 ####
#### Array.from() ####
#### Array.of() ####
#### 数组实例的copyWithin() ####
#### 数组实例的find()和findIndex() ####
#### 数组实例的fill() ####
#### 数组实例的entries(), keys(), values() ####
#### 数组实例的includes() ####
#### 数组实例的flat(), flatMap() ####
#### 数组的空位 ####
## 对象的扩展 ##
## 对象的新增方法 ##
## Symbol ##
## Set和Map数据结构 ##
#### Set ####
#### WeakSet ####
#### Map ####
#### WeakMap ####
## Proxy ##
## Reflect ##
## Promise 对象 ##
#### Promise的含义 ####
Promise是异步编程的一种解决方案。  
所谓Promise，其实就是一个容器，保存着未来才会结束的事件。从语法上来说，Promise是一个对象，可以通过它来获取异步操作的消息。  
Promise对象有以下两个特点：  
* 对象的状态不受外界影响。Promise对象有三个状态：`pending`，`fulfilled`和`rejected`。只有异步操作的结果能够改变状态。
* 一旦状态改变，就不会再变，任何时候都可以得到这个结果。
  
有了Promise对象，就可以将异步操作用同步操作的流程表达出来，避免层层嵌套的回调函数。  
  
不过Promise也有缺点：
* 无法取消
* 如果不设置回调函数，Promise内部抛出的错误。不会反映到外部。
* 处于`pending`状态，我们不知道是刚刚开始还是即将完成。
#### 基本用法 ####
ES6规定，Promise对象是一个构造函数，用来生成Promise实例。代码如下：  
```javascript
const promise = new Promise(function(resolve, reject) {
    // ... some code
    if(/* Success */) {
        resolve(value);
    } else {
        reject(error);
    }
})
```  
`resove`的作用是将Promise对象从`pending`变为`resolved`，将结果传递出去。`reject`是将Promise对象从`pending`变为`reject`，将结果传递出去。  
  
`Promise`实例生成后，可以同`then`来分别指定`resolved`和`rejected`。  
```javascript
promise.then(function(value) {
    // success
}, function(error) {
    // failure
});
```  
下面是`Promise`对象的简单例子：  
```javascript
function timeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms, 'done');
    });
}

timeout(100).then((value) => {
    console.log(value);
});
```  
  
下列方法是`Promise`对象实现的Ajax操作的例子。  
```javascript
const getJSON = function(url) {
    const promise = new Promise(function(resolve, reject){
        // Ajax here
        const handler = function() {
        if (this.readyState !== 4) {
            return;
        }
        if (this.status === 200) {
            resolve(this.response);
        } else {
            reject(new Error(this.statusText));
        }
        };
        const client = new XMLHttpRequest();
        client.open("GET", url);
        client.onreadystatechange = handler;
        client.responseType = "json";
        client.setRequestHeader("Accept", "application/json");
        client.send();
    });
    return promise;
};
getJSON("/posts.json").then(function(json) {
    console.log("Contents: " + json);
}, function(error) {
    console.log("Error", + error);
});
```  
上面代码中，`getJSON`是对XMLHttpRequest对象的封装，并返回一个`Promise`对象。  
  
#### Promise.prototype.then() ####
Promise实例有个`then`方法，也就是定义在`Promise.prototype`上的。它的作用其实就是Promise实例添加状态改变是的回调函数。第一个参数是`resolved`状态的回调函数，第二个（可选）是`rejected`状态的回调函数。  
值得注意的是，`then`返回的是一个新的`Promise`实例，因此可以采用链式写法，代码如下：  
```javascript
getJSON("/post/1.json").then(
    post => getJSON(post.commentURL)
).then(
    comments => console.log("resolved: " + comments),
    err => console.log("rejected: " + err)
)
```  
  
#### Promise.prototype.catch() ####
#### Promise.prototype.finally() ####
#### Promise.all() ####
`Promise.all`方法可以将多个Promise实例包装成一个新的Promise实例。  
`const p = Promise.all([p1, p2, p3]);`这时候`p`的状态由`p1`,`p2`,`p3`决定。例子如下：  
```javascript
const promises = [2, 3, 5, 7, 11, 13].map(function(id) {
    return getJSON('/post' + id + '.json');
});
Promise.all(promises).then(function(posts) {
    // ...
}).catch(function(reason){
    // ...
});
```  
以下是另一个例子：  
```javascript
const databasePromise = connectDatabase();
const booksPromise = databasePromise.then(findAllBooks);
const userPromise = databasePromise.then(getCurrentUser);
Promise.all([
  booksPromise,
  userPromise
]).then(([books, user]) => pickTopRecommendations(books, user));
```  
上面的代码中，`booksPromise`和`userPromise`是两个异步操作，只有都等到他们的结果都返回了，才能触发`pickTopRecommendations`这个回调函数。  
  
值得注意的是，如果作为参数的Promise实例，自己定义了`catch`方法，如果他一旦被`rejected`，并不会触发`Promise.all()`的`catch`方法。  
```javascript
const p1 = new Promise((resolve, reject) => {
    resolve('hello');
})
.then(result => result)
.catch(e => e);

const p2 = new Promise((resolve, reject) => {
    throw new Error('error');
})
.then(result => result)
.catch(e => e);

Promise.all([p1, p2])
.then(result => console.log(result))
catch(e => console.log(e));
```  
显然，`p1`会`resolved`，`p2`会`rejected`，但是因为`p2`执行完`catch`方法之后，也会变成`resolved`。  
如果p2没有自己的`catch`方法，就会调用`Promise.all()`的`catch`方法。 
所以比较好的代码为：  
```javascript
const p1 = new Promise((resolve, reject) => {
  resolve('hello');
})
.then(result => result);

const p2 = new Promise((resolve, reject) => {
  throw new Error('报错了');
})
.then(result => result);

Promise.all([p1, p2])
.then(result => console.log(result))
.catch(e => console.log(e));
``` 
  
#### Promise.race() ####
#### Promise.resolve() ####
有时候我们需要将现有对象变成Promise对象，`Promise.resolve`方法就可以起到这个作用。  
`const jsPromise = Promise.resolve($.ajax('/whatever.json'));`。  
`Promise.resolve`等价于下面的写法：  
```javascript
Promise.resolve(foo);
// same
new Promise(resolve => resolve('foo'));
```  
  
`Promise.resolve`方法的参数分为四种情况：  
（1）参数是一个Promise实例  
如果参数是Promise实例，则`Promise.resolve`不作任何修改，原封不动返回。  
（2）参数是一个`thenable`对象  
`thenable`对象是具有`then`方法的对象，比如：  
```javascript
let thenable = {
    then: function(resolve, reject) {
        resolve(42);
    }
};

let p1 = Promise.resolve(thenable);
p1.then(function(value) {
    console.log(value);
});
// 42
```
（3）参数不是具有`then`方法的对象，或者根本不是对象  
```javascript
const p = Promise.resolve('Hello');
p.then(function(s) {
    console.log(s);
});

// Hello
```  
（4）不带任何参数
  
#### Promise.reject() ####
`Promise.reject(reason)`方法也会返回一个新的Promise实例，该实例的状态为`rejected`。  
```javascript
const p1 = Promise.reject('error');
const p = new Promise((resolve, reject) => reject('error'));
// same

p.then(null, function(s) {
    console.log(s);
});
// error
```  
  
值得注意的是，`Promise.reject()`的参数，会原封不动的变成`reject`的理由。  
  
#### 应用 ####
我们可以将图片的加载写成一个`Promise`，一旦加载完成，`Promise`的状态就会发生变化。  
```javascript
const preloadImage = function(path) {
    return new Promise(function (resolve, reject) {
        const image = new Image();
        image.onload = resolve;
        image.onerror = reject;
        image.src = path;
    });
}
```  
与此同时，我们还可以将Generator函数和Promise结合在一起。  
```javascript
function getFoo() {
    return new Promise(function(resolve,reject) {
        resolve('foo');
    });
}

const g = function* () {
    try {
        const foo = yield getFoo();
        console.log(foo);
    } catch(e) {
        console.log(e);
    }
}

function run(generator) {
    const it = generator();
    function go(result) {
        if (result.done) {
            return result.value;
        }
        return result.value.then(function(value) {
            return go(it.next(value));
        }, function(error) {
            return go(it.throw(error));
        });
    }
    go(it.next());
}

run(g);
```
#### Promise.try() ####
## Iterator和for..of循环 ##
## Generator函数的语法 ##
## Generator函数的异步应用 ##
## async函数 ##
#### 含义 ####
#### 基本语法 ####
#### 语法 ####
#### async函数的实现原理 ####
#### 与其他异步处理方法的比较 ####
#### 实例：按顺序完成异步操作 ####
#### 异步遍历器 ####
## Class的基本语法 ##
## Class的继承 ##
## Module的语法 ##
## Module的加载实现 ##
## 编程风格 ##
## 读懂规格 ##
## ArrayBuffer ##
