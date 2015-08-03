var express = require('express');

var app = express();

app.use('/test', function (req, res) {
	console.log(req.query);
	res.send('test');
});

app.use(express.static('public'));

app.listen(80);