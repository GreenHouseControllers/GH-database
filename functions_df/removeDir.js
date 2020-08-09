// add modules
const fs = require('fs');
const path = require('path');

let removeDir = function (dirPath, name) {
    try {
// remove directory
        fs.rmdirSync(path.join(__dirname, '../file_sistem', dirPath, name));
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