//////////////////////////////////////////////////
// init app
var express = require('express');
var app     = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// read in constants.js
require("./js/constants.js")
//////////////////////////////////////////////////


//////////////////////////////////////////////////
// use res.render to load up an ejs view file index page
app.get('/', function(req, res) {
	res.render('pages/index');
});
//////////////////////////////////////////////////


//////////////////////////////////////////////////
// return initial base map settings from constants.js
app.get('/initmap', function(req, res) {

    // create json object that specifies initial base map settings
    var json = {
        "url":          CONST_MAP_URL,
        "attribution":  CONST_MAP_ATTRIBUTION,
        "maxZoom":      CONST_MAP_MAX_ZOOM,
        "latitudeY":    CONST_MAP_CENTER_LATITUDEY,
        "longitudeX":   CONST_MAP_CENTER_LONGITUDEX,
        "zoom":         CONST_MAP_INITIAL_ZOOM
    }
    res.end(JSON.stringify(json))

});
//////////////////////////////////////////////////


//////////////////////////////////////////////////
var server = app.listen(process.env.APP_PORT, process.env.APP_HOST, function () {
    console.log("Node-Leaflet app listening at http://%s:%s", server.address().address, server.address().port)
})
//////////////////////////////////////////////////


// about page
// app.get('/about', function(req, res) {
// 	res.render('pages/about');
// });

// app.get('/', function (req, res) {
//     res.statusCode = 200;
//     res.end();
// });
