const user_post_details = require('./user-postsdb');
module.exports = function userPostDetails(username) {
  const result = user_post_details.filter(entry => {
    return entry.username === username;
  });
  if (result.length < 1) {
    return null;
  }
  return result;
}

