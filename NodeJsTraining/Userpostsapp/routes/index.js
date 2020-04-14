var express = require('express');
var router = express.Router();
var path = require('path');
const authMiddleware = require('../middleware/auth-middleware');
/* GET home page. */
router.get('/', function (req, res, next) {
  const flag = false;
  if (req.cookies.auth_token) {
    res.sendFile(path.join(__dirname, '../userprofile/homepage.html'));
  }
  else {
    res.sendFile(path.join(__dirname, '../public/loginpage.html'));
  }
});

router.get('/login', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../public/loginpage.html'));
});

router.get('/userhome', authMiddleware, function (req, res, next) {
  res.sendFile(path.join(__dirname, '../userprofile/homepage.html'));

});

router.get('/userposts', authMiddleware, function (req, res, next) {
  res.sendFile(path.join(__dirname, '../userprofile/userpost.html'));

});

module.exports = router;

