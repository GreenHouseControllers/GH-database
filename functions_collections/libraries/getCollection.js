// add modules
const fs = require('fs');
const path = require('path');

exports.path = function (name){
// read and parse collection list
    let file = fs.readFileSync(path.join(__dirname, '../collections_list.json'), 'utf8');
    let parsedFile = JSON.parse(file);
    let returnPath;
// get collection info object
    for (i = 0; i < parsedFile.length; i++) {
        if (parsedFile[i]["name"] == name){
            returnPath  = parsedFile[i]["path"];
        }
    }
    return returnPath;
}