# 路由 Routing #

## 基本路由 Basic routing ##
定义
> app.METHOD(PATH, HANDLER)

* app 是 express 的实例
* METHOD 是 HTTP 要求方法
* PATH 是服务器的路径
* HANDLER 是符合路由要求的执行函数

例子：
> example-code-basic-routing.ts

## 路由 Routing ##

### 路由方法 Route methods ###
例子
> example-code-routing-method.ts

### 路由路径 Route path ###
例子
> example-code-routing-path.ts

### 路由参数 Route parameters ###
在路径中使用变量 然后存储在req.params中
路径 : /users/:userId/books/:bookId
> http://localhost:3000/users/34/books/8989
> req.params: { "userId": "34", "bookId": "8989" }

(-) 和 (.) 可用来拓展用法
路径 : /flights/:from-:to
> http://localhost:3000/flights/LAX-SFO
> req.params: { "from": "LAX", "to": "SFO" }

路径 ： /plantae/:genus.:species
> http://localhost:3000/plantae/Prunus.persica
> req.params: { "genus": "Prunus", "species": "persica" }

可使用正则表达式来拓展
路径 ： /user/:userId(\d+)
> http://localhost:3000/user/42
> {"userId": "42"}

### 路由处理程式 Route handling ###
例子
> example-code-routing-handling.ts

### 回应方法 Response method ###
* res.download() --> 提示要下载的文档
* res.end() --> 结束回应程序
* res.json() --> 传送JSON回应
* res.jsonp() --> 传送JSON回应 并支持JSONP
* res.redirect() --> 重新导向
* res.render() --> 渲染试图
* res.send() --> 传送各种类型的回应
* res.sendFile --> 以八位元组串流形式发送文档
* res.sendStatus() --> 设定回应状态码
* ...

### app.route() ###
可以为一个路由路径 建立多个路由处理程式链
app.route('/book')
   .get(function(req, res) {
       res.send('Get a random book');
   })
   .post(function(req, res) {
       res.send('Add a book);
   })
   .put(function(req, res) {
       res.send('Update the book');
   });

### express.Router ###
例子
> example-code-express-router.ts