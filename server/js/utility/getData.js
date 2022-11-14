const fs = require('fs');

exports.getFileData = () => {
      //Read and parse local json file.
      let rawData = fs.readFileSync("server/data/data.json");
      let data =  JSON.parse(rawData);
      return data;
};