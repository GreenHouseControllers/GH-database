const fs = require('fs');
const path = require('path');

let removeFile = function (dirPath, name) {
    try {
        fs.unlinkSync(path.join(__dirname, '../file_sistem', dirPath, name));
        return ("fie has been removed");
    }
    catch (err){
        return({
            message: "Can not remove file",
            err: err
        });
    }
}

module.exports = removeFile;