// add modules
const fs = require('fs');
const path = require('path');
const conf = require('gh-get-config');

let createFile = function (dirPath, name) {
    try {
// create file
        fs.openSync(path.join(__dirname, conf("backMethodsPath"), dirPath, name), 'w');
        return ("file has been created");
    }
    catch (err){
        return({
            message: "Can not create file",
            err: err
        });
    }
}
//exports
module.exports = createFile;