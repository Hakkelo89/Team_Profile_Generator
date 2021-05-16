const fs = require("fs");

const writeToFile = (data, path) => {
  console.log("file created");
  fs.writeFileSync(path, data, "utf-8");
};

module.exports = writeToFile;
