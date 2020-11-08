// add modules
const fs = require('fs');
const path = require('path');
const conf = require('gh-get-config');

let createDir = function (dirPath, name) {
    try {
// create directory
        fs.mkdirSync(path.join(__dirname, conf("backMethodsPath"), dirPath, name));
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