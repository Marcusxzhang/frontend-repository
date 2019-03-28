app.get('/user/:id', function (req, res, next) {
    if (req.params.id == 0) {
        next('reoute');
    } else {
        next();
    }
}, function(req, res, next) {
    // render a regular page
    res.render('regular');
});

app.get('/user/:id', function(req, res, next) {
    res.render('specail');
});