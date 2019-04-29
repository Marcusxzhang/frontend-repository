# Express #
## 路由 ##
#### 基本路由 ####
路由是指判断应用程序如何回应客户端对特定端口的要求，每一个路由可以有一个或者多个处理函数。  
`app.METHOD(PATH, HANDLER)`  
其中：  
* app是express实例
* METHOD是HTTP请求方法
* PATH是服务器上的路径
* HANDLER是要执行的函数  
  
实例：  
```javascript
var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('hello world');
});
```  
  
#### 基本方法 ####
Express支持下列方法：`get`，`post`，`put`，`head`，`delete`，`options`，`trace`，`copy`，`lock`，`mkcol`，`move`，`purge`，`propfind`，`proppatch`，`unlock`，`report`，`mkactivity`，`checkout`，`merge`，`m-search`，`notify`，`subscribe`，`unsubscribe`，`patch`，`search`，`connect`。  
  
实例：  
```javascript
app.get('/', function(req, res) {
    res.send('Get request');
});
app.post('/', function(req, res) {
    res.send('Post request');
});
app.all('/', function(req, res, next) {
    res.send('All request');
    next();
});
```  
  
#### 路由路径 ####

#### ####

## 撰写middleware ##
## 使用middleware ##
## 使用temmplate engines ##
## 错误处理 ##
## 除错 ##
## 位于Proxy背后的Express ##