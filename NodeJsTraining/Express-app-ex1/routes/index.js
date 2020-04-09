var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.end('Hello world');
});

router.get('/about', function (req, res, next) {

  res.end('About page');
});

module.exports = router;

