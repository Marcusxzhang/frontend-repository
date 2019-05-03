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
[app.js](https://github.com/Marcusxzhang/frontend-repository/blob/master/Vue/tutorial/code/chapter-1/app.html)  
  
## 数据和方法 ##
可以直接在`methods`里面定义函数，来实现想要实现的功能。  
  
重点： **如果要在methods里面拿到data的数据，使用**`this.xxx`**就可以了**。  
  
代码：  
[index.html](https://github.com/Marcusxzhang/frontend-repository/blob/master/Vue/tutorial/code/chapter-2/index.html)  
[app.js](https://github.com/Marcusxzhang/frontend-repository/blob/master/Vue/tutorial/code/chapter-2/app.html)  
  
## 数据绑定 ##
## 属性绑定 ##
如果要绑定数据到属性上面的话，则需要使用`v-bind:`。  
如添加`href`属性到a标签里面，则`v-bind:href="..."`。  
  
如果想要绑定一个标签，则需要使用`v-html`。  
如添加a tag，则创建一个容器，然后绑定。  
  
代码：  
[index.html](https://github.com/Marcusxzhang/frontend-repository/blob/master/Vue/tutorial/code/chapter-3/index.html)  
[app.js](https://github.com/Marcusxzhang/frontend-repository/blob/master/Vue/tutorial/code/chapter-3/app.html)  
  
## 事件（点击 双击 鼠标事件）##
如果要绑定事件，则使用`v-on:click="..."`。  
如果要绑定`methods`里面的函数，则直接使用即可。  
如果要使用双击事件，则使用`v-on:dblclick="..."`。  
如果要使用鼠标事件，则使用`v-on:mousemove="...."`。  
  
重点： `v-on`其实可以等同于`@`。  
  
代码：  
[index.html](https://github.com/Marcusxzhang/frontend-repository/blob/master/Vue/tutorial/code/chapter-4/index.html)  
[app.js](https://github.com/Marcusxzhang/frontend-repository/blob/master/Vue/tutorial/code/chapter-4/app.html)  
  
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
[app.js](https://github.com/Marcusxzhang/frontend-repository/blob/master/Vue/tutorial/code/chapter-5/app.html)  
  
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
[app.js](https://github.com/Marcusxzhang/frontend-repository/blob/master/Vue/tutorial/code/chapter-6/app.html)  
  
## 双向数据绑定 ##
## 计算属性Computed ##
## 动态绑定CSS样式 ##
## 指令v-if ##
## 指令v-for ##
## 实战DEMO ##
## 实例化多个Vue对象 ##
## 初识组件的应用 ##
## 搭建脚手架CLI ##
## 介绍SRC文件流程及根组件App ##
## 组件嵌套 ##
## 组件CSS作用域 ##
## 实战DEMO ##
## 属性传值Props ##
## 传值和传引用 ##
## 事件传值（子传父） ##
## 生命周期钩子 ##
## 路由和请求 ##
