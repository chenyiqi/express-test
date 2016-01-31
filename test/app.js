var express = require('express');

var app = express();
app.set('views', __dirname +'/public');
app.set('view engine', 'html');
app.engine('html', require('ejs').__express);
app.use(function(req, res, next) {
	console.log(req);
	next();
});
app.use('/', function(req, res, next) {
	res.render('index', {});
});
app.listen('3000');