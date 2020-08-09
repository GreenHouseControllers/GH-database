// add modules
const fs = require('fs');
const path = require('path');

let createDir = function (dirPath, name) {
    try {
// create directory
        fs.mkdirSync(path.join(__dirname, '../file_sistem', dirPath, name));
        return ("directory has been created");
    }
    catch (err){
        return({
            message: "Can not create directory",
            err: err
        });
    }
}
//exports
module.exports = createDir;