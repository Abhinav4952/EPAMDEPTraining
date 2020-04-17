const crypto=require('crypto');
module.exports = function encrypt(username,password) {
    var shasum = crypto.createHash('sha1')
    shasum.update(username+password);
    var result =shasum.digest('hex');
    return result;
  }

  