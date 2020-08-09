// add modules
const fs = require('fs');
const path = require('path');

let writeJson = function (dirPath, name, data) {
    try {
// write file
        let writeData = JSON.stringify(data, null, 4);
        fs.writeFileSync(path.join(__dirname, '../file_sistem', dirPath, name), writeData);
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
module.exports = writeJson;