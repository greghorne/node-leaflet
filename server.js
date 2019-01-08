var express = require('express');
var app     = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file
// index page
app.get('/', function(req, res) {
	res.render('pages/index');
});

// about page
app.get('/about', function(req, res) {
	res.render('pages/about');
});

app.get('/', function (req, res) {

    L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
        minZoom:  5,
        maxZoom: 17,
    }).addTo(map);

    res.statusCode = 200;
    res.end();
});

var server = app.listen(process.env.APP_PORT, process.env.APP_HOST, function () {
   console.log("Example app listening at http://%s:%s", server.address().address, server.address().port)
})