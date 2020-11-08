// add modules
const fs = require('fs');
const path = require('path');
const conf = require('gh-get-config');

let readJson = function (dirPath, name) {
    try {
// read and parse file
        let file = fs.readFileSync(path.join(__dirname, conf("backMethodsPath"), dirPath, name), 'utf8');
        let returnFile = JSON.parse(file);
        return(returnFile);
    }
    catch (err){
        return {
            message: "Can not read file",
            err: err
        }

    }
}
//exports
module.exports = readJson;