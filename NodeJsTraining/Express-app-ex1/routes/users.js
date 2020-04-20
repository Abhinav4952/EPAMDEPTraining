var express = require('express');
var router = express.Router();
const userDetails = require('../additionaljs/user_retriving');
/* GET users listing. */
router.get('/', function (req, res, next) {
  const user = userDetails('user1');
  if (!user) {
    return res.send('User not found');
  }
  res.send('Hello from  ' + user.fullName);

});
router.get('/:username', function (req, res, next) {
  console.log(req.headers);
  const pathParams = req.params;
  const user = userDetails(pathParams.username);
  if (!user) {
    return res.send('User not found');
  }
  res.setHeader('content-type', 'applicaton/json');
  const result = JSON.stringify({ message: 'Hello from  ' + user.fullName + ' and my Email is ' + user.email + '. I am from '+user.address+' from API Call' });
  res.send(result);
});
module.exports = router;

