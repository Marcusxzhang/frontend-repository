// 字符串类型的路由路径

// 符合 acd & abcd
app.get('/ab?cd', function(req, res) {
    res.send('ab?cd');
});

// 符合 abcd abbcd abbbcd
app.get('/ab+cd', function(req, res) {
    res.send('ab+cd');
});

// 符合 abcd abxcd abRABDOMcd ab123cd 等
app.get('/ab*cd', function(req, res) {
    res.send('ab*cd');
});

// 符合 abe 和 abcde
app.get('/ab(cd)?e', function(req, res) {
    res.send('ab(cd)?e');
});

// 正则表达式
// 符合 butterfly 和 dragonfly
app.get(/.*fly$/, function(req, res) {
    res.send('/.*fly$/');
});