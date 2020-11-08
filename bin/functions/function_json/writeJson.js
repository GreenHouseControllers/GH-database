// add modules
const fs = require('fs');
const path = require('path');
const conf = require('gh-get-config');

let writeJson = function (dirPath, name, data) {
    try {
// write file
        let writeData = JSON.stringify(data, null, 4);
        fs.writeFileSync(path.join(__dirname, conf("backMethodsPath"), dirPath, name), writeData);
        return ("file has been wrote");
    }
    catch (err){
        return {
            message: "Can not write file",
            err: err
        }
    }
}
//exports
module.exports = writeJson;