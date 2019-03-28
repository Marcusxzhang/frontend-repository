app.set('view engine', 'pug');

app.get('/', function(req, res) {
    res.render('index', {title: 'Hey', message: 'Hello there!'});
});