// 单个函数
app.get('/example', function(req, res) {
    res.send('Hello from A');
});

// 处理多个函数 (保证有next)
app.get('/example', function(req, res, next) {
    console.log('Hello from A');
    next();
}, function (req, res) {
    console.log('Hello from B');
});

// 处理多个函数
var cb0 = function(req, res, next) {
    console.log('cb0');
    next();
};
var cb1 = function(req, res, next) {
    console.log('cb1');
    next();
};
var cb2 = function(req, res) {
    res.send('Hello from C');
};
app.get('/example', [cb0, cb1, cb2]);