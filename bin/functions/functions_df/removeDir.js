// add modules
const fs = require('fs');
const path = require('path');
const conf = require('gh-get-config');

let removeDir = function (dirPath, name) {
    try {
// remove directory
        fs.rmdirSync(path.join(__dirname, conf("backMethodsPath"), dirPath, name));
        return ("directory has been removed");
    }
    catch (err){
        return({
            message: "Can not remove directory",
            err: err
        });
    }
}
//exports
module.exports = removeDir;