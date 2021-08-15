const fs = require("fs");

const writeToFile = (data, path) => {
  fs.writeFileSync(path, data, "utf-8");
};

module.exports = writeToFile;
