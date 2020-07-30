const fs = require('fs');
const path = require('path');

let pushElement = function (dirPath, name, data) {
    try {
        let file = fs.readFileSync(path.join(__dirname, '../file_sistem', dirPath, name), 'utf8');
        let parsedFile = JSON.parse(file);
        parsedFile.push(data);
        let writeData = JSON.stringify(parsedFile);
        fs.writeFileSync(path.join(__dirname, '../file_sistem', dirPath, name), writeData);
        return('element has been pushed');
    }
    catch (err){
        return({
            message: "Can not push element",
            err: err
        });
    }
}

module.exports = pushElement;