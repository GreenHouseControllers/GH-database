// add modules
const fs = require('fs');
const path = require('path');

exports.path = function (name){
    try {
// read and parse collection list
        let file = fs.readFileSync(path.join(__dirname, '../collections_list.json'), 'utf8');
        let parsedFile = JSON.parse(file);
        let pathFromList;
// get collection info object
        for (i = 0; i < parsedFile.length; i++) {
            if (parsedFile[i]["name"] == name) {
                pathFromList = parsedFile[i]["path"];
            }
        }
        if(pathFromList == undefined) return({err: "invalid collection name"});
        let returnPath = path.join('../collections', pathFromList);

        return returnPath;
    } catch (err) {
        return({err});
    }
}