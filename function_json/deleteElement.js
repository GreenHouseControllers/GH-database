const fs = require('fs');
const path = require('path');

let deleteElement = function (dirPath, name, data) {
    try {
        let file = fs.readFileSync(path.join(__dirname, '../file_sistem', dirPath, name), 'utf8');
        let parsedFile = JSON.parse(file);
        let newArr = delete parsedFile[data];
        let writeData = JSON.stringify(parsedFile);
        fs.writeFileSync(path.join(__dirname, '../file_sistem', dirPath, name), writeData);
        return('element has been deleted');
    }
    catch (err){
        return({
            message: "Can not delete element",
            err: err
        });
    }
}

module.exports = deleteElement;