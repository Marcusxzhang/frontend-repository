// Express 支持的路由方法
// get | post | put | head | delete | options | trace | copy | lock | mkcol | move | purpe 
// propfind | proppatch | unlock | report | mkactivity | checkout | merge | m-search | notify
// subscribe | unsubscribe | patch | search | connect

// all 是一种特殊用法 无论什么路由方法 都会执行这个函数
app.all('/xxx', function(req, res, next) {
    console.log('Accessing xxx section');
    next();
})