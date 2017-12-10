var express       = require('express');
var app           = express();

var bodyParser    = require('body-parser');
//var multer        = require('multer');
var uuid          = require('uuid');
// var passport      = require('passport');
// var cookieParser  = require('cookie-parser');
var session       = require('express-session');
var mongoose      = require("mongoose");

// var mongodb = require("mongodb");
// var ObjectID = mongodb.ObjectID;

// setup a local connection string
//var connectionString = 'mongodb://127.0.0.1:27017/assignment';

// use remote connection string
// if running in remote server
// if(process.env.MONGODB_URI) {
//     connectionString = MONGODB_URI
// }


//connect to database
var db = mongoose.connect(process.env.MONGOLAB_AMBER_URI);

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
// var db;

// Connect to the database before starting the application server.
// mongodb.MongoClient.connect(process.env.MONGODB_URI, function (err, database) {
//   if (err) {
//     console.log(err);
//     process.exit(1);
//   }

  // Save database object from the callback for reuse.
  // db = database;
  // console.log("Database connection ready");

//app.use(express.bodyParser({ uploadDir: './public/uploads', keepExtensions: true }));

//app.use(multer());

// app.use(session({
//     resave: true,
//     saveUninitialized: true,
//     secret: process.env.PASSPORT_SECRET
// }));

// app.use(cookieParser());

// app.use(passport.initialize());
//
// app.use(passport.session());


//require("./public/assignment/server/app.js")(app, uuid, db, mongoose);
require("./public/server/app.js")(app, uuid, db, mongoose);


// var ipaddress = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
// var port = process.env.OPENSHIFT_NODEJS_PORT || 3000;

// app.listen(port, ipaddress, function () {
//     console.log("Server is listening on: " + ipaddress + ":" + port);
// });

// var server = app.listen(process.env.PORT || 8080, function () {
//     var port = server.address().port;
//     console.log("App now running on port", port);
//   });

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
