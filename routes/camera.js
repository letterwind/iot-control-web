var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('camera', { title: '樹梅派相機控制' });
});

module.exports = router;