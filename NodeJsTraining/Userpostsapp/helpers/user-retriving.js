const user_detials = require('./db');

module.exports = function userDetails(username) {
  const result = user_detials.filter(entry => {
    return entry.username === username;
  });
  if (result.length !== 1) {
    return null;
  }
  return result[0];
}

