# 中间层 Middleware #
有权存取 request, response 和 执行函数
中间层可以执行
* 执行任何代码
* 对req和res进行任何变更
* 结束 / 回应循环
* 回调下一个middleware

*middleware函数必须通过next来结束req或者res循环*

## 开发 example ##
例子
> sample-code-develop.ts

## 使用middleware ##
* Application-level middleware
* Router-level middleware
* Error-hadnling middleware
* Built-in middleware
* Third-party middleware

### Application-level middleware ###
首先会连接 express的实例
例子
> example-code-application-middleware.ts

### Router-level middleware ###
首先会连接 express.Router() 的实例
例子
> example-code-router-middleware.ts

### Error-hadnling middleware ###
必须引入*四个*参数
例子
> example-code-error-middleware.ts

### Built-in middleware ###
唯一的built in middleware是
> express.static(root, [options])
例子
> example-code-builtin-middleware.ts

### Third-party middleware ###
例子
> example-code-thirdparty-middleware.ts