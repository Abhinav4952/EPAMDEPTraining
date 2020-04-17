const fs = require("fs")
const file_retriving=require('./fileretriving');
const calculating_digest=require('./calcdigest');
const args=process.argv.slice(2);
fs.truncate('cryptodata.txt', 0, function(){console.log('done')})
const file_list = file_retriving.getAllFiles(args[0])
console.log(file_list);
for (i = 0; i < file_list.length; i++) {
  calculating_digest.calcdigest(file_list[i]);
}

  