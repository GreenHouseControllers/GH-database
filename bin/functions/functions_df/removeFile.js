// add modules
const fs = require('fs');
const path = require('path');
const conf = require('gh-get-config');

let removeFile = function (dirPath, name) {
    try {
// remove file
        fs.unlinkSync(path.join(__dirname, conf("backMethodsPath"), dirPath, name));
        return ("file has been removed");
    }
    catch (err){
        return({
            message: "Can not remove file",
            err: err
        });
    }
}
//exports
module.exports = removeFile;