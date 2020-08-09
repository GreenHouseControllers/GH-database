// add modules
const fsRw = require('./libraries/fs-rw-list');
const createFile = require('../functions_df/createFile');
const addStructure = require('../function_json/writeJson');

const nullName = '';

let createCollection = function (name, dirPath, fileName) {
    try {
        // add collection to the list
        let fsRwListAnswer = fsRw(name, dirPath, fileName);
        // create collection json file
        let createFileAnswer = createFile(dirPath, nullName);
        // add structure to the collection file
        let addStructureAnswer = addStructure(dirPath, nullName, []);

        let returnArr = {
            fsRwListMessage: fsRwListAnswer,
            createFileMessage: createFileAnswer,
            addStructureMessage: addStructureAnswer
        }
        return  returnArr;
    }
    catch (err){
        return({
            message: "Can not create collection",
            err: err
        });
    }
}
// exports
module.exports = createCollection;