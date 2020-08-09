// add modules
const fs = require('fs');
const path = require('path');

let readFile = function (dirPath, name) {
    try {
//read file
        let file = fs.readFileSync(path.join(__dirname, '../file_sistem', dirPath, name), 'utf8');
            return(file);
    }
    catch (err){
        return({
            message: "Can not read file",
            err: err
        });
    }
}
//exports
module.exports = readFile;