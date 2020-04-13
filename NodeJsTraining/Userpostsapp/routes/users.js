var express = require('express');
var router = express.Router();
let checkLogin = require('../helpers/auth-helper');
let findUser = require('../helpers/user-helper');
let userDetails = require('../helpers/user-retriving');
let userPostDetails = require('../helpers/userpost-retriving')
let encrypt = require('../helpers/encryption');
/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource Hello');
});

router.post('/login', function (req, res, next) {
  const cred = req.body;
  const headers = req.headers;
  console.log(cred);
  if (!cred.username || !cred.password) {
    
    return res.status(400).send({ status: 'not ok' });
  }

  const isValid = checkLogin(cred.username, cred.password);
  if (isValid) {
    var auth_key = encrypt(cred.username, cred.password);
    res.cookie('username', cred.username);
    res.cookie('auth_token', auth_key, { httpOnly: true, maxAge: 6000000 });
  }
 
  if (isValid) {
    res.status(301).header({ Location: '/' }).send({});
  }
  else {
    res.status(200).send("<h1>Invalid Credentials</h1>");
  }

});

router.get('/userDetails/:username', function (req, res, next) {
  const pathParams = req.params;
  const user = userDetails(pathParams.username);
  if (!user) {
    return res.send('User not found');
  }
  res.setHeader('content-type', 'applicaton/json');
  const result = JSON.stringify({ message: "firsname=" + user.firstName + ";lastname=" + user.lastName + ";Age=" + user.age + ";Email=" + user.email + ";Address=" + user.address });
  res.send(result);
});

router.get('/userPostDetails/:username', function (req, res, next) {
  const pathParams = req.params;
  const users = userPostDetails(pathParams.username);
  if (!users) {
    return res.send('User not found');
  }
  var posts = [];
  res.send(users);
});

router.post('/logout', function (req, res, next) {
  res.clearCookie('auth_token');
  res.clearCookie('username');
  res.status(301).header({ Location: '/' }).send({});

});

module.exports = router;

