// add modules
const fs = require('fs');
const path = require('path');
const conf = require('gh-get-config');

let deleteElement = function (dirPath, name, data) {
    try {
//read and parse file
        let file = fs.readFileSync(path.join(__dirname, conf("backMethodsPath"), dirPath, name), 'utf8');
        let parsedFile = JSON.parse(file);
//delete
        let newArr = delete parsedFile[data];
//write file
        let writeData = JSON.stringify(parsedFile, null, 4);
        fs.writeFileSync(path.join(__dirname, '../../../data/file_system', dirPath, name), writeData);
        return('element has been deleted');
    }
    catch (err){
        return {
            message: "Can not delete element",
            err: err
        }

    }
}
//exports
module.exports = deleteElement;