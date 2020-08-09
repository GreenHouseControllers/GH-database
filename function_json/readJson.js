// add modules
const fs = require('fs');
const path = require('path');

let readJson = function (dirPath, name) {
    try {
// read and parse file
        let file = fs.readFileSync(path.join(__dirname, '../file_sistem', dirPath, name), 'utf8');
        let returnFile = JSON.parse(file);
        return(returnFile);
    }
    catch (err){
        return({
            message: "Can not read file",
            err: err
        });
    }
}
//exports
module.exports = readJson;