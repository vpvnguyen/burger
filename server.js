var express = require('express');
var exphbs = require('express-handlebars');

var PORT = process.env.PORT || 3000;

var app = express();

// MIDDLEWARE
// static pages
app.use(express.static('public'));

// parse body as json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// import burger routes and give the server access to them
var routes = require('./controllers/burgers_controller.js');
app.use(routes);

// start server and listen for client requests
app.listen(PORT, function () {
    // log (server-side) when server has started
    console.log(`Server listening on: http://localhost:${PORT}`);
});
