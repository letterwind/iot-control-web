var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('temp', { title: '溫度感測' });
});

module.exports = router;