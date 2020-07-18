const fs = require('fs');
const path = require('path');

let readJson = function (dirPath, name) {
    try {
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

module.exports = readJson;