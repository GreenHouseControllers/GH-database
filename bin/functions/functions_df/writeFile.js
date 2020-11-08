// add modules
const fs = require('fs');
const path = require('path');
const conf = require('gh-get-config');

let writeFile = function (dirPath, name, data) {
    try {
// write file
        fs.writeFileSync(path.join(__dirname, conf("backMethodsPath"), dirPath, name), data);
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