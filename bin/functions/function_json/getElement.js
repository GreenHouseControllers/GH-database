// add modules
const fs = require('fs');
const path = require('path');
const conf = require('gh-get-config');

let getElement = function (dirPath, name, key) {
    try {
// read and parse file
        let file = fs.readFileSync(path.join(__dirname, conf("backMethodsPath"), dirPath, name), 'utf8');
        let parsedFile = JSON.parse(file);
// get element
        let returnElement = parsedFile[key];
        return(returnElement);
    }
    catch (err){
        return {
            message: "Can not get element",
            err: err
        }

    }
}
//exports
module.exports = getElement;