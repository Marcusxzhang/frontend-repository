## HTTP Request ##
#### 前端进行网络请求的关注点 ####
一般情况下，在前端发出请求我们只需关注下面几点：  
* 传入基本参数(url, 请求方式)
* 请求参数，请求参数类型
* 设置请求头
* 获取相应的方式
* 获取相应头，响应状态，相应结果
* 异常处理
* 携带cookie设置
* 跨域请求  
  
#### 前端进行网络请求的方式 ####
* form表单，ifream，刷新页面
* AJAX - 异步网络请求的开山鼻祖
* jQuery - 一个时代
* fetch - AJAX的替代者
* axios request等众多开源库  
  
#### 关于网络请求的疑问 ####
* AJAX的出现解决了什么问题
* 原生AJAX如何使用
* JQuery的网络请求方式
* fetch的用法以及坑点
* 如何正确使用fetch
* 如何选择合适的跨域方式  
  
#### AJAX的出现解决了什么问题 ####
在AJAX出现之前，web程序是这样工作的：  
首次进入-> 数据查询,提交表单 -> 浏览器发送请求 -> 服务器收到请求 -> 拼接html返回 -> 浏览器收到html -> 刷新页面  
  
这种交互的缺陷是显而易见的，任何与服务器交互的页面都要刷新页面。所以就有了AJAX。使用AJAX，网页应用能够快速的增量更新成现在用户界面上，而不需要重载整个页面。  
  
#### 原生AJAX的用法 ####
这里主要分析`XMLHttpRequest`对象，下面是一段基础使用。  
```javascript
var xhr = new XMLHttpRequest();
xhr.open('post', 'www.xx.com', true);
// 接收返回值
xhr.onreadystatechange = function() {
    if(xhr.readyState === 4) {
        
    }
}
// 处理函数
postData = {"name1":"value1","name2":"value2"};
postData = (function(value) {
    for(var key in value) {
        oStr += key += "=" + value[key] + "&";
    }
    return oStr;
}(postData));
// 设置请求头
xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
// 异常处理

```  
  
以下是对`XMLHttpRequest`对象常用的函数，属性，事件进行分析。  
![XMLHttpRequest](https://mmbiz.qpic.cn/mmbiz_png/aDoYvepE5x1qX2icp41PvbktBR9BQ8jJ8vWbfibfzGlLibibt3zscwicAaficKvicJZiaksNcMY79oTJrOgmPCEl2KFNBA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1 "XMLHttpRequest")  
  
函数  
`open`  
用于初始化一个请求，用法：  
`xhr.open(method, url, async)`  
* `method`： 请求方式
* `url`： 请求的url
* `async`： 是否为异步请求  
  
`send`  
用于发送`HTTP`请求，即调用该方法后`HTTP`请求才会被真正发出  
`xhr.send(param)`  
* `param`： http请求的参数，可以为`string`，`Blob`等类型  
  
`abort`  
用于终止一个`ajax`请求，调用该方法后`readyState`将设置为`0`  
`xhr.abort()`  
  
`setRequestHeader`  
用于设置`HTTP`请求头，此方法必须在`open()`和`send()`之间调用  
`xhr.setRequestHeader(header, value)`  
  
`getResposneHeader`  
用于获取`http`返回头  
`var header = xhr.getResponseHeader(name);`  
  
属性  
`readyState`  
用来表示`XMLHttpRequest`对象所处的状态。  
  
`status`  
表示`http`请求的状态。  
  
`responseType`  
表示响应的数据类型。  
  
`response`  
返回相应的正文。  
  
`withCredentials`  
ajax请求默认会携带同源请求的cookie，而跨域则不会携带。设置xhr的withCredentials为true将允许。  
  
事件回调  
`onreadystatechange`  
`xhr.onreadystatechange = callback`  
当readystate属性发生变化时，callback会被触发。  
  
`onloadstart`  
`xhr.onloadstart = callback`  
在ajax请求发送之前，callback会被触发。  
  
`onprogress`  
```javascript
xhr.onprogress = function(event) {
    console.log(event.loaded + " " + event.total);
}
```  
可以获取总资源大小`total`和已经加载的资源大小`loaded`。  
  
`onload`  
`xhr.onload = callback`  
当完成加载时，将触发callback。  
  
异常处理  
`onerror`  
`xhr.onerror = callback`  
当加载失败时会触发callback。  
  
`ontimeout`  
`xhr.ontimeout = callback`  
预期时间到期会触发callback。  
  
#### JQuery对AJAX的封装 ####
```javascript
$.ajax({
    dataType:'json',
    contentType:'application/json',
    headers:{'Content-Type':'application/json'},
    xhrFields:{withCredentials:true},
    data:JSON.stringify({a:[{b:1, a:1}]}),
    error:fucntion(xhr,status){
        console.log(xhr, status);
    },
    success: function(data, status) {
        console.log(data, status);
    }
})
```  
  
![jquery](https://mmbiz.qpic.cn/mmbiz_png/aDoYvepE5x1qX2icp41PvbktBR9BQ8jJ8WnySQibAnZRQgsCyibF9gvvSatQic0iciaw4tfweDH1pdmsJSXVQQVJamwg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1 "jquery")  
  
常用配置  
`url`  
当前页地址，发送请求的地址。  
  
`type`  
HTTP请求方法。  
  
`timeout`  
设置请求超过时间。  
  
`success`  
请求成功后的回调函数。  
  
`jsonp`  
在一个jsonp请求中重写回调函数的名字。  
  
`error`  
请求失败时调用此函数。  
源码对错误的判定：  
`isSuccess = status >= 200 && status < 300 || status === 304;`  
  
`dataType`  
* `xml`： 返回xml文档
* `html`： 返回纯文本HTML信息。
* `script`返回纯文本JavaScript代码
* `json`：返回json数据
* `jsonp`：JSONP格式
* `text`：返回纯文本字符串  
  
`data`  
使用`JSON.stringify`转码。  
  
`complete`  
请求完成后的回调函数。  
  
`async`  
默认情况下所有的请求皆为异步请求。如果需要同步发送，设置为false。  
  
`contentType`  
默认`application/x-www-form-urlcoded`。发送消息至服务器时内容编码类型。  
  
#### JQuery的替代者 ####
FetchAPI是一个用于访问和操控HTTP管道的强大的原生API。但他还没被浏览器完全支持，仍然需要一个`polyfill`。  
  
#### fetch的使用 ####
一个基本的fetch請求：  
```javascript
const options = {
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({name:"123"}),
    credentials:"same-origin",
    mode:"cors"
}
fetch('http://www.xxx.com')
.then(function(response){
    return response.json();
})
.then(function(myJson){
    console.log(myJson); // 相应数据
})
.catch(function(err){
    console.log(err); // 异常处理
})
```  
  
![fetchapi](https://mmbiz.qpic.cn/mmbiz_png/aDoYvepE5x1qX2icp41PvbktBR9BQ8jJ8erRvsvhvSiaWfhOgQcVobc1gq7uk5Z8MibWxAibA6c8CZOEAffjZ51cJg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1 "fetchAPI")  
  
`fetch()`  
用于发起获取资源的请求，返回一个`promise`，会在resolve后传回`Response`对象。  
  
`Headers`  
可以通过构造函数来创建一个`headers`对象：  
```javascript
var myHeaders = new Headers();
myHeaders.append("Content-Type","text/plain")
```  
  
`Request`  
通过构造函数可以创建一个`Request`对象，这个对象可以作为`fetch`函数的第二个参数。
  
`Response`  
在`fetch()`处理完`promise`之后返回一个`response`实例。  
  
#### fetch的坑点 ####
由于`fetch`是一个非常底层的API，并没有进行很多封装，有以下问题：  
* 不能直接传递JavaScript对象作为参数
* 需要自己判断返回值类型，并执行响应获取返回值的方法
* 获取返回值方法只能调用一次，不能多次调用
* 无法正常的捕获异常
* 老板浏览器不会默认携带cookie
* 不支持jsonp  
  
#### 对fetch的封装 ####
  
请求参数处理  
支持传入不同的参数类型：  
```javascript
function stringify(url, data) {
    var dataString = url.indexOf('?') == -1 ? '?' : '&';
    for (var key in data) {
        dataString += key + '=' + data[key] + '&';
    }
    return dataString;
}

if(request.formData) {
    request.body = request.data;
} else if(/^get$/i.test(request.method)) {
    request.url = `${request.url}${stringify(request.url, request.data)}`;
} else if(request.form) {
    request.headers.set('Content-Type','application/x-www-form-urlencoded;charset=UTF-8');
    request.body = stringify(request.data);
} else {
    request.headers.set('Content-Type','application/json;charset=UTF-8');
    request.body = JSON.stringify(request.data);
}
```  
  
cookie携带  
`fetch`在新版浏览器已经开始默认携带同源`cookie`，但在老版不会默认携带。  
```javascript
request.credentials = 'same-origin';
request.credentials = 'include';
```  
  
异常处理  
当接收到一个代表为错误的状态码时，fetch()返回的promise不会标记为reject。  
```javascript
.then(response => {
    if(response.ok) {
        return Promise.resolve(response);
    } else {
        const error = new Error(`请求失败! 状态码: ${response.status}, 失败信息: ${response.statusText}`);
        error.response = response;
        return Promise.reject(error);
    }
})
```
  
返回值处理  
对不同的返回值调用不同的函数接收，这里必须提前判断好类型。  
```javascript
.then(response => {
    let contentType = response.headers.get('content-type');
    if(contentType.includes('application/json')) {
        return response.json();
    } else {
        return response.text();
    }
});
```

#### 跨域总结 ####
浏览器的同源策略限制了从一个源加载的文档或者脚本如何与来自另一个源的资源进行交互。这是一个用于隔离潜在恶意文件的重要安全机制。  
跨域的条件： **协议**，**域名**，**端口**，有一个不用都算跨域。  
  
以下是解决跨域的几种方式： 
   
`nginx`  
使用`nginx`反响代理实现跨域。  
  
`CORS`  
`CORS`是一个W3C标准，全称是Cross-origin resource sharing。它允许浏览器向跨源服务器，发出`XMLHttpRequest`请求。  
  
服务器设置`Access-Control-Allow-Origin`就可以开启`CROS`。该属性表示哪些域名可以访问资源，如果设置通配符则表示所有网站都可以访问资源。  
```javascript
app.all('*', function(req, res, next){
        res.header("Access-Control-Allow-Origin","*");
        res.header("Access-Control-Allow-Headers","X-Requested-With");
        res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
        next();
    }
);
```  
  
`jsonp`  
`script`标签的`src`属性中的链接可以访问跨域的js脚本，利用这个特性，服务端不再返回JSON格式的数据，而是返回一段调用某个函数的js代码。  
  
JQuery对jsonp的支持  
```javascript
$.ajax({
    type:"get",
    url:"http://xxxx",
    dataType:"jsonp",
    jsonp:"callback",
    jsonCallback:"doo",
    success:function(data) {
        console.log(data);
    }
});
```  
  
`fetch`和`axios`等并没有直接对jsonp的支持，需要进行手动封装：  
```javascript
(function(window, document){
    "use strict";
    var jsonp = function(url, data, callback) {

    }
    window.$jsonp = jsonp;
})(window, document)
```  
  
`postMessage跨域`  
`psotMessage()`方法允许来自不同源的脚本采用异步方式进行有限的通信，可以实现**跨文本档** **多窗口** **跨域消息传递**。  
```javascript
// 捕获iframe
var domain = 'http://scriptandstyle.com';
var iframe = document.getElementById('myIFrame').contentWindow;

// 发送消息
setInterval(function(){
    var message = 'Hello!  The time is: ' + (newDate().getTime());
    iframe.postMessage(messgae, domain);
}, 6000);

// 响应事件
window.addEventListener('message', function(event){
    if(event.origin !== 'http://davidwalsh.name'
) return;
    console.log('message received: ' + event.data, event);
    event.source.postMessage('holla back!', event.origin);
}, false);
```  
`postMessage`跨域适用于以下场景：同浏览器多窗口间跨域通信、 iframe间跨域通信。  
  
`WebSocket`  
`WebSocket`是一种双向通信协议，在建立连接后，`WebSocket`的`server`和`client`都能主动向对方发送或接收数据不受同源策略的限制。  
```javascript
function WebSocketTest() {
    if("WebSocket" in window) {
        alert("Supported!");
        // 打开一个web socket
        var ws = new WebSocket("ws://localhost:3000/abcd");
        ws.onopen = function(){
            // Web socket已连接上
            ws.send("send data");
            alert("data transfering");
        };
        ws.onmessage = function(evt) {
            var received_msg = evt.data;
            alert("data received");
        };
        ws.onclose = function() {
            // 关闭websocket
            alert("connection is closed");
        };
    } else {
        // 浏览器不支持
        alert("Not supported!");
    }
}
```


