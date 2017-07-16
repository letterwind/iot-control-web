var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var io = require('socket.io');
var net = require('net');


var index = require('./routes/index');
var users = require('./routes/users');
var rpiLed = require('./routes/rpi-led');
var rpiCamera = require('./routes/camera');
var temperature = require('./routes/temperature');
var ultrasonic = require('./routes/ultrasonic');
var motors = require('./routes/motors');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var client = new net.Socket();
client.connect(80, '192.168.31.120');
app.use(function(req, res, next) {
    req.client = client;

    //client.destroy();


    next();
});
client.on('data', function(data) {
    console.log('Received: ' + data);
    //client.destroy(); // kill client after server's response
});

client.on('close', function() {
    console.log('Connection closed');
    client.connect(80, '192.168.31.120');
});
app.use('/', index);
app.use('/users', users);
app.use('/rpi-led', rpiLed);
app.use('/camera', rpiCamera);
app.use('/arduino-18b20', temperature);
app.use('/arduino-sonic', ultrasonic);
app.use('/arduino-dcmotors', motors);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;