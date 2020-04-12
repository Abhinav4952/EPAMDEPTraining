const fs = require("fs")
const path = require("path")
const getAllFiles = function (dirPath, file_list) {
  files = fs.readdirSync(dirPath)

  file_list = file_list || []

  files.forEach(function (file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {

      file_list = getAllFiles(path.join(dirPath, file), file_list)

    } else {
      file_list.push(path.join(__dirname, dirPath, "/", file))
    }
  })

  return file_list
}

module.exports = {
  getAllFiles: getAllFiles
};

