const fs = require('fs');
const path = require('path');

let createFile = function (dirPath, name) {
    try {
        fs.openSync(path.join(__dirname, '../file_sistem', dirPath, name), 'w');
        return ("fie has been created");
    }
    catch (err){
        return({
            message: "Can not create file",
            err: err
        });
    }
}

module.exports = createFile;