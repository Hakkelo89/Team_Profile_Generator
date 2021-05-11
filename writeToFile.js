const fs = require("fs");

const writeToFile = (fileName) => {
  const callback = (err) => {
    if (err) {
      console.log("Error", err);
    } else {
      console.log("Write successful");
    }
  };

  fs.appendFile(`./${fileName}.md`, callback);
};

module.exports = writeToFile;
