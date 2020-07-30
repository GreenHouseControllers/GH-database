const fs = require('fs');
const path = require('path');

let readJson = function (dirPath, name, key) {
    try {
        let file = fs.readFileSync(path.join(__dirname, '../file_sistem', dirPath, name), 'utf8');
        let parsedFile = JSON.parse(file);
        let returnElement = parsedFile[key];
        return(returnElement);
    }
    catch (err){
        return({
            message: "Can not get element",
            err: err
        });
    }
}

module.exports = readJson;