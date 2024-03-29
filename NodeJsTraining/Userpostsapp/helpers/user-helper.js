const db = require('./db');

module.exports = function findUser(username) {
  const result = db.filter(entry => {
    return entry.username === username;
  });
  if (result.length !== 1) {
    return null;
  }
  return result[0];
}

