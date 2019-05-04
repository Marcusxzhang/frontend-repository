# 前端存储 - localStorage #
## localStorage的介绍 ##
在html5中，引入了两个新的前端存储特性：  
* localStorage
* sessionStorage
  
这两者非常相似，都是在前端保存一定量的数据，称为**前端存储**。可是亮着仍然存在一定区别。  
* 生命周期
  * localStorage：生命周期是永久的，即是关闭页面，浏览器，其中的内容也不会消失，除非手动删除localStorage中的内容。
  * sessionStorage：生命周期是一次浏览器窗口会话，浏览器窗口指的是一组同源页面的浏览器页面集合，当这些窗口全部关闭后，sessionStorage的内容将不会存在。
* 存储大小： 两者都为5MB/域名
* 存储位置：两者都保存在客户端，不与服务器进行交互
* 存储内容类型：两者都只能存储字符串，但是可以通过类型转换来存储各类数据
* 获取方式
  * localStorage：window.localStorage
  * sessionStorage：sessionStorage
  
由此可见，localStorage适合在前端存储长时间使用的数据，sessionStorage适合存储短期使用，一次性的数据。  
  
localStorage在IE6/7等一些低版本的浏览器中是无法被支持的。  
```javascript
if(!window.localStorage) {
    // not supported
} else {
    // supported
}
```  
  
## localStorage的使用 ##
在localStorage中，数据是以键值对的形式存在，可以使用json对象的形式直接对localStorage中的内容进行操作：  
```javascript
// 设置数据
localStorage.a = 'hello';
localStorage.b = 'zero';
// 读取数据
console.log(localStorage.a);
console.log(localStorage.b);
```  
  
如果要使用json数据形式：  
```javascript
// 存入json数据
localStorage.jsonTest = JSON.stringify({
    a: 'hello',
    b: 'zero'
});
// 读取json数据
console.log(JSON.parse(localStorage.jsonTest).a);
console.log(JSON.parse(localStorage.jsonTest).b);
```
  
## 使用js库来操作localStorage ##
我们可以使用一个js库，**store.js**。  
这个库的一大优点就是他将为我们自动进行类型转换，也就是说可以直接使用json对象。  
  
安装：  
```nodejs
npm install store
```  
  
API：  
```javascript
// 引入
let store = require('store');

// 设置数据
store.set('user', {
    name: 'Kindem'
});

// 获取数据
let obj = store.get('user');

// 删除数据
store.remove('user');

// 删除所有数据
store.clearAll();

// 遍历键值对
store.each((value, key) => {
    // .. do something
});
```
