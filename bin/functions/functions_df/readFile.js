// add modules
const fs = require('fs');
const path = require('path');
const conf = require('gh-get-config');

let readFile = function (dirPath, name) {
    try {
//read file
        let file = fs.readFileSync(path.join(__dirname, conf("backMethodsPath"), dirPath, name), 'utf8');
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