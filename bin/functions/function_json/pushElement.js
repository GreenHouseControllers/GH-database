// add modules
const fs = require('fs');
const path = require('path');
const conf = require('gh-get-config');

let pushElement = function (dirPath, name, data) {
    try {
// read and parse file
        let file = fs.readFileSync(path.join(__dirname, conf("backMethodsPath"), dirPath, name), 'utf8');
        let parsedFile = JSON.parse(file);
// push element
        parsedFile.push(data);
// write file
        let writeData = JSON.stringify(parsedFile, null, 4);
        fs.writeFileSync(path.join(__dirname, conf("backMethodsPath"), dirPath, name), writeData);
        return('element has been pushed');
    }
    catch (err){
        return {
            message: "Can not push file",
            err: err
        }

    }
}
//exports
module.exports = pushElement;