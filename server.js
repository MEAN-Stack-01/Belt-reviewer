var express = require('express');
var session = require('express-session')
const flash = require('express-flash');
var validate = require('mongoose-validator');

// Create an Express App
var app = express();
// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');

// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(flash());
//Set Static Path
app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }}))
// Require path
var path = require('path');
// Setting our Static Folder Directory
app.use(express.static( __dirname + '/public/dist/public' ));
app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
app.set('css', __dirname + '/static/stylesheets');
app.set('css', __dirname + '/static/images');

require('./server/config/routes.js')(app);

app.all("*", (req,res,next) => {
  res.sendFile(path.resolve("./public/dist/public/index.html"))
});

// Setting our View Engine set to EJS
app.set('view engine', 'ejs');
// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
