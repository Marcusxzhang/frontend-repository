# Vue 教程 #
## 初识Vue及引入CDN ##
Angular有很多限制：必须使用组件框架，必须使用集成等等。  
Vue可以在使用其他很好的第三方库。  
  
使用Vue有两种方式：  
* 直接引入CDN
* 命令行工具  
  
开发环境： 
`<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>`  
  
生产环境：  
`<script src="https://cdn.jsdelivr.net/npm/vue"></script>`
  
## 实例化Vue对象 ##
说明：  
* el： element 需要获取的元素，一定是html中的根容器元素。  
* data： 用于数据的存储。
* methods： 可使用原生function，也可以自己写。用于存储各种方法。
* data-binding： 给属性绑定对应的值。
  
小结：  
* 只需要实例想要的区域，用id形式绑定即可，**灵活**。
* data其实就是一个key-value对象，然后绑定到想要展示的区域。  
* data仅可使用在实例的区域内。
  
代码：  
[index.html](https://github.com/Marcusxzhang/frontend-repository/blob/master/Vue/tutorial/code/chapter-1/index.html)  
[app.js](https://github.com/Marcusxzhang/frontend-repository/blob/master/Vue/tutorial/code/chapter-1/app.js)  
  
## 数据和方法 ##
可以直接在`methods`里面定义函数，来实现想要实现的功能。  
  
重点： **如果要在methods里面拿到data的数据，使用**`this.xxx`**就可以了**。  
  
代码：  
[index.html](https://github.com/Marcusxzhang/frontend-repository/blob/master/Vue/tutorial/code/chapter-2/index.html)  
[app.js](https://github.com/Marcusxzhang/frontend-repository/blob/master/Vue/tutorial/code/chapter-2/app.js)  
  
## 数据绑定 ##
## 属性绑定 ##
如果要绑定数据到属性上面的话，则需要使用`v-bind:`。  
如添加`href`属性到a标签里面，则`v-bind:href="..."`。  
  
如果想要绑定一个标签，则需要使用`v-html`。  
如添加a tag，则创建一个容器，然后绑定。  
  
代码：  
[index.html](https://github.com/Marcusxzhang/frontend-repository/blob/master/Vue/tutorial/code/chapter-3/index.html)  
[app.js](https://github.com/Marcusxzhang/frontend-repository/blob/master/Vue/tutorial/code/chapter-3/app.js)  
  
## 事件（点击 双击 鼠标事件）##
如果要绑定事件，则使用`v-on:click="..."`。  
如果要绑定`methods`里面的函数，则直接使用即可。  
如果要使用双击事件，则使用`v-on:dblclick="..."`。  
如果要使用鼠标事件，则使用`v-on:mousemove="...."`。  
  
重点： `v-on`其实可以等同于`@`。  
  
代码：  
[index.html](https://github.com/Marcusxzhang/frontend-repository/blob/master/Vue/tutorial/code/chapter-4/index.html)  
[app.js](https://github.com/Marcusxzhang/frontend-repository/blob/master/Vue/tutorial/code/chapter-4/app.js)  
  
## 事件修饰符（once prev stop） ##
为了做到**方法只有纯粹的数据逻辑，而不是去处理DOM事件细节**，我们可以运用事件修饰符，来为`v-on`添加事件修饰符。  
对于绑定事件，可以使用事件修饰符来进行进一步的调整：  
* `.stop`
* `.prevent`
* `.capture`
* `.self`
* `.once`
* `.passive`  
  
代码：  
[index.html](https://github.com/Marcusxzhang/frontend-repository/blob/master/Vue/tutorial/code/chapter-5/index.html)  
[app.js](https://github.com/Marcusxzhang/frontend-repository/blob/master/Vue/tutorial/code/chapter-5/app.js)  
  
## 键盘事件及键值修饰符（alt enter） ##
值得注意的是，`keyCode`的事件用法已经被废弃了，可能不会被最新的浏览器支持。  
键值修饰符：  
* `.enter`
* `.tab`
* `.delete`
* `.esc`
* `.space`
* `.up`
* `.down`
* `.left`
* `.right`  
  
代码：  
[index.html](https://github.com/Marcusxzhang/frontend-repository/blob/master/Vue/tutorial/code/chapter-6/index.html)  
[app.js](https://github.com/Marcusxzhang/frontend-repository/blob/master/Vue/tutorial/code/chapter-6/app.js)  
  
## 双向数据绑定 ##
和`input`，`select`和`textarea`有关系。因为他们是输入的窗口。  
在Vue中，我们使用`v-model`来绑定`methods`里面的数据。
  
代码：  
[index.html](https://github.com/Marcusxzhang/frontend-repository/blob/master/Vue/tutorial/code/chapter-7/index.html)  
[app.js](https://github.com/Marcusxzhang/frontend-repository/blob/master/Vue/tutorial/code/chapter-7/app.js)  
  
## 计算属性Computed ##
`Computed`是一种优化，如果变量的**变动比较大**，则我们可以选择使用`Computed`方法。  
具体使用方法是：在`computed`里面声明函数，然后在html里面调用函数，不过要把`()`删除掉。  
  
代码：  
[index.html](https://github.com/Marcusxzhang/frontend-repository/blob/master/Vue/tutorial/code/chapter-8/index.html)  
[app.js](https://github.com/Marcusxzhang/frontend-repository/blob/master/Vue/tutorial/code/chapter-8/app.js)  
  
## 动态绑定CSS样式 ##
使用`v-bind:class=“xxx”`属性来设置动态class。  
与此同时，也可以结合computed方法，来返回一个对象，里面可以添加多个变量。  
  
代码：  
[index.html](https://github.com/Marcusxzhang/frontend-repository/blob/master/Vue/tutorial/code/chapter-9/index.html)  
[app.js](https://github.com/Marcusxzhang/frontend-repository/blob/master/Vue/tutorial/code/chapter-9/app.js)  
  
## 指令v-if ##
`v-if`当为false的时候，在标签中是不存在的，只有一个commnet段。  
可是如果我们使用`v-show`的话，在标签行是存在的，只是`display: none;`了。  
  
代码：  
[index.html](https://github.com/Marcusxzhang/frontend-repository/blob/master/Vue/tutorial/code/chapter-10/index.html)  
[app.js](https://github.com/Marcusxzhang/frontend-repository/blob/master/Vue/tutorial/code/chapter-10/app.js)  
    
## 指令v-for ##
`v-for`可以遍历数组也可以处理对象，使用形式为`v-for="xxx in xxxs"`。  
与此同时，我们也可以添加`index`来处理索引，如`v-for="(user,index) in users"`。  
另外，我们可以运用`template`来作为一个容器来渲染，而避免很多空的div标签重复。  
同时，如果遍历的是一个键值对，那么我们也可以这样处理：`v-for="(key, value) in user"`。  
在`v-for`中，我们可以添加key值来进行遍历，代码如下：  
`v-for="(item, index) in items" :key="index"`。  
代码：  
[index.html](https://github.com/Marcusxzhang/frontend-repository/blob/master/Vue/tutorial/code/chapter-11/index.html)  
[app.js](https://github.com/Marcusxzhang/frontend-repository/blob/master/Vue/tutorial/code/chapter-11/app.js)  
  
## 实例化多个Vue对象 ##
只需要定义多个Vue对象即可。  
```javascript
var one = new Vue({
    // ...
});
var two = new Vue({
    // ...
});
```  
  
与此同时，如果涉及**Vue对象之间的通信**，可以直接修改对象内的变量。  
    
## 初识组件的应用 ##
`template`里面**有且只有**一个根标签。  
定义之后，可以使用component自己定义的标签名。  
  
## 搭建脚手架CLI ##
Vue CLI脚手架：  
* 脚手架是通过webpack搭建的开发环境
* 使用ES6语法
* 打包和压缩JS为一个文件
* 项目文件在环境中编译，而不是浏览器
* 实现页面自动刷新
  
使用脚手架可以让我们开发速度变快，而且使用的资源也是最新的。  
然后在node的开发环境中，输入命令行：  
```nodejs
npm install --global vue-cli
vue init webpack my-project
cd my-project
npm install
npm run dev
```  
  
`package.json`把需要依赖的东西写进去。  
  
## 介绍SRC文件流程及根组件App ##
SRC是脚手架里非常重要的文件。  
`assets`可以放很多资源文件。`components`可以放组件文件。  
`App.vue`是模版组件，`main.js`是全局的功能文件。  
  
如果需要注册组件，那我们就要在`main.js`里面的components注册。  
  
每一个模版里面都有三个对应的模块：  
* html结构
* 处理逻辑
* 解决样式
  
## 组件嵌套 ##
在`main.js`的文件内，注册组件。  
```javascript
// 全局注册组件
import Users from './components/Users'

Vue.component("users", Users);
```  
  
如果不需要在全局声明组件，那我们只需要在组件文件内声明，然后在：  
```javascript
export default {
    // ...
    components: {
        "users": Users
    }
}
```  
  
## 组件CSS作用域 ##
如何实现一个组件里面的style只能在这个组件使用，则只需要要style标签里面添加：  
`<style scoped>`  
  
这样就会自动产生一个独特的标志。  
  
## 属性传值Props ##

## 传值和传引用 ##
## 事件传值（子传父） ##
## 生命周期钩子 ##
## 路由和请求 ##
