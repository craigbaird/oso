var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');
var passport = require('./strategies/userStrategy');
var session = require('express-session');

// Route includes
var index = require('./routes/index');

// User route includes
var user = require('./routes/user');
var register = require('./routes/register');

// Custom route includes
var googleBooksApi = require('./routes/googleBooksApi');
var books = require('./routes/books');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Serve back static files
app.use(express.static('./server/public'));

// Passport session configuration
app.use(session({
   secret: 'secret',
   key: 'user',
   resave: 'true',
   saveUninitialized: false,
   cookie: { maxage: 60000, secure: false }
}));

// Start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/register', register);
app.use('/user', user);

// Custom routes
app.use('/googleBooksApi', googleBooksApi);
app.use('/books', books);

// Index route
app.use('/', index);

// Mongo connection
var mongoURI = '';
    if(process.env.MONGODB_URI !== undefined) {
        mongoURI = process.env.MONGODB_URI;
    }
    else {
        mongoURI = 'mongodb://one_shelf_over:xbr2nma3@ds151973.mlab.com:51973/one_shelf_over';
    }

// var mongoURI = 'mongodb://localhost:27017/passport';
var mongoDB = mongoose.connect(mongoURI).connection;

mongoDB.on('error', function(err){
   if(err) {
     console.log('MONGO ERROR: ', err);
   }
   res.sendStatus(500);
});

mongoDB.once('open', function(){
   console.log('Connected to Mongo');
});

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function(){
   console.log('Listening on port: ' + app.get('port'));
});
