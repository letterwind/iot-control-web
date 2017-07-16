var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var client = req.client;
    client.write('Hello, server! Love, Client.');
    res.render('motors', { title: '直流馬達控制' });
});
router.get('/forward', function(req, res, next) {
    var client = req.client;
    client.write('forward');
    console.log('前進');
    res.end("ok");
});
router.get('/backward', function(req, res, next) {
    var client = req.client;
    client.write('backward');
    console.log('後退');
    res.end("ok");
});

router.get('/left', function(req, res, next) {
    var client = req.client;
    client.write('left');
    console.log('左前進');
    res.end("ok");
});
router.get('/right', function(req, res, next) {
    var client = req.client;
    client.write('right');
    console.log('右前進');
    res.end("ok");
});
router.get('/stop', function(req, res, next) {
    var client = req.client;
    client.write('stop');
    console.log('停止');
    res.end("ok");
});
module.exports = router;