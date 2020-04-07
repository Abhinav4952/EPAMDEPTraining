const crypto = require('crypto');
const fs = require("fs")
function calcdigest(filename) {
  const sha1_hash = crypto.createHash('sha1');
  const md5_hash = crypto.createHash('md5');
  const input = fs.createReadStream(filename);
  input.on('readable', () => {
    const data = input.read();
    if (data) {
      md5_hash.update(data);
      sha1_hash.update(data);
    } else {
      const calc_digest = (filename + "=>" + md5_hash.digest('hex') + " " + sha1_hash.digest('hex'));
      fs.appendFile('cryptodata.txt', calc_digest + '\n', function (err) {
        if (err) throw err;
        console.log(calc_digest);
      });
    }
  });
}

module.exports = {
  calcdigest: calcdigest
};

