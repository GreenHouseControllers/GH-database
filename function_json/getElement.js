// add modules
const fs = require('fs');
const path = require('path');

let getElement = function (dirPath, name, key) {
    try {
// read and parse file
        let file = fs.readFileSync(path.join(__dirname, '../file_sistem', dirPath, name), 'utf8');
        let parsedFile = JSON.parse(file);
// get element
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
//exports
module.exports = getElement;