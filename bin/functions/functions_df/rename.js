// add modules
const fs = require('fs');
const path = require('path');
const conf = require('gh-get-config');

let writeFile = function (dirPath, oldName, newName) {
    let dir_file;

// choose dir or file
    let oldNameArr = oldName.split('.');
    if(oldNameArr[1]) dir_file = 'file'
    else dir_file = 'dir';

    try {
// rename file
        let fullPath = path.join(__dirname, conf("backMethodsPath"), dirPath);
        fs.renameSync(path.join(fullPath, oldName), path.join(fullPath, newName));
        return (`${dir_file} has been renamed`);
    }
    catch (err){
        return({
            message: `Can not rename ${dir_file}`,
            err: err
        });
    }
}
//exports
module.exports = writeFile;