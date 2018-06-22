var express = require('express');
var path = require("path");
var helmet = require('helmet')


var app = express();
app.use(helmet());
app.use(express.json());


env = process.env.NODE_ENV || 'development';

var forceSsl = function (req, res, next) {
    if (req.headers['x-forwarded-proto'] !== 'https') {

        return res.redirect(['https://', req.get('Host'), req.url].join(''));


    }
    return next();
};
if (env === 'production') {
    app.use(forceSsl);
}

var port = 9700;
app.listen(process.env.PORT || port, function () {
    console.log('Running REST HTTPS server on port: ' + port);
});

app.use(express.static(__dirname + '/dist'));


app.get('/', function (request, response) {
    response.sendFile(path.resolve(__dirname, 'index.html'));
});
app.get('/resume', function (request, response) {
    console.log(__dirname)
    response.sendFile(path.resolve(__dirname, 'dist/assets/evanfreymiller2018resumeprint.pdf'));
});

app.get('', function (req, res) {
    res.redirect('/');
});


app.get('/imagine', function (req, res) {
    res.redirect('/');
});


app.get('*', function (req, res) {
    res.redirect('/');
});

