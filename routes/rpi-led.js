var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('rpi-led', { title: '樹梅派LED開燈控制' });
});

module.exports = router;