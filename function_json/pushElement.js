// add modules
const fs = require('fs');
const path = require('path');

let pushElement = function (dirPath, name, data) {
    try {
// read and parse file
        let file = fs.readFileSync(path.join(__dirname, '../file_sistem', dirPath, name), 'utf8');
        let parsedFile = JSON.parse(file);
// push element
        parsedFile.push(data);
// write file
        let writeData = JSON.stringify(parsedFile, null, 4);
        fs.writeFileSync(path.join(__dirname, '../file_sistem', dirPath, name), writeData);
        return('element has been pushed');
    }
    catch (err){
        return({
            message: "Can not push file",
            err: err
        });
    }
}
//exports
module.exports = pushElement;