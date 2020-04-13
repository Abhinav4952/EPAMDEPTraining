var express = require('express');
var router = express.Router();
var path = require('path');
/* GET home page. */
router.get('/', function (req, res, next) {
  const flag = false;
  if (req.cookies.auth_token) {
    res.sendFile(path.join(__dirname, '../userprofile/homepage.html'));
  }
  else {
    res.sendFile(path.join(__dirname, '../public/home1.html'));
  }
});

router.get('/login', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../public/loginpage.html'));
});

router.get('/userhome', function (req, res, next) {
  if (req.cookies.auth_token) {
    res.sendFile(path.join(__dirname, '../userprofile/homepage.html'));
  }
  else {
    res.sendFile(path.join(__dirname, '../public/home1.html'));
  }
});

router.get('/userposts', function (req, res, next) {
  if (req.cookies.auth_token) {
    res.sendFile(path.join(__dirname, '../userprofile/userpost.html'));
  }
  else {
    res.sendFile(path.join(__dirname, '../public/home1.html'));
  }
});

module.exports = router;

