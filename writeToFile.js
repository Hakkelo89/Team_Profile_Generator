const fs = require("fs");

const writeToFile = (fileName, path) => {
  console.log("file created");
  fs.writeFileSync(path, fileName, "utf-8");
};

module.exports = writeToFile;
