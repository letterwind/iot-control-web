var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('ultrasonic', { title: '超音波感測' });
});

module.exports = router;