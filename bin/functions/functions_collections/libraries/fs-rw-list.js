// add modules
const fs = require('fs');
const path = require('path');

const rw = function (name, dirPath, fileName){
// read and parse collection list
    let collections_list = fs.readFileSync(path.join(__dirname, '../collections_list.json'), 'utf8');
    let parsedCollection_list = JSON.parse(collections_list);
// check collection with the same name
    for (i = 0; i < parsedCollection_list.length; i++) {
        if (parsedCollection_list[i]['name'] == name) {
            return 'isTrue';
        }
    }
// content of new collection object
    let newCollection = {
        name: name,
        path: dirPath,
        fileName: fileName
    }
// add object and write collection list
    parsedCollection_list.push(newCollection);
    fs.writeFileSync(path.join(__dirname, '../collections_list.json'), JSON.stringify(parsedCollection_list, null, 4))
    return ("collection has been created");
}
// exports
module.exports = rw;