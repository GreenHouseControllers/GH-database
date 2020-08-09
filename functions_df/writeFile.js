// add modules
const fs = require('fs');
const path = require('path');

let writeFile = function (dirPath, name, data) {
    try {
// write file
        fs.writeFileSync(path.join(__dirname, '../file_sistem', dirPath, name), data);
        return ("file has been wrote");
    }
    catch (err){
        return({
            message: "Can not write file",
            err: err
        });
    }
}
//exports
module.exports = writeFile;