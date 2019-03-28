var app = express();
var router = express.Router();

// This function will executed for every request to the router
router.use(function(req, res, next) {
    console.log('Time : ', Date.now());
    next();
});

// A middleware only execute in the path /user/:id
router.use('/user/:id', function(req, res, next) {
    console.log('Request URL : ', req.originalUrl);
    next();
}, function(req, res, next) {
    console.log('Request Type : ', req.method);
    next();
});

// A middleware only handle GET requests 
router.get('/user/:id', function(req, res, next) {
    // If the user id is 0, skip to next router
    if (req.params.id == 0) {
        next('route');
    } else {
        next();
    }
}, function(req, res, next) {
    res.render('regular');
});

// Handle a special page
router.get('/user/:id', function(req, res, next) {
    console.log(req.params.id);
    res.render('special');
});

app.use('/', router);