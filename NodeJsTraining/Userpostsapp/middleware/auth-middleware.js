var path = require('path');
module.exports = function(req, res, next){
    const cookies = req.cookies;
    if (cookies.auth_token) {
      next();
    } else {
      res.sendFile(path.join(__dirname, '../public/loginpage.html'));
    }
  }

