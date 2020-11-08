// add modules
const path = require('path');

const fsRw = require('./libraries/fs-rw-list');
const createFile = require('../functions_df/createFile');
const addStructure = require('../function_json/writeJson');

const nullName = '';

let createCollection = function (name, inputDirPath, fileName) {
    try {
// set dirPath
        let dirPath = path.join('../collections', inputDirPath);
// add collection to the list
        let fsRwListAnswer = fsRw(name, dirPath, fileName);
        if(fsRwListAnswer == 'isTrue') return 'name is already taken';
// create collection json file
        let createFileAnswer = createFile(dirPath, nullName);
        if(createFileAnswer.err) return createFileAnswer;
// add structure to the collection file
        let addStructureAnswer = addStructure(dirPath, nullName, []);
        if(addStructureAnswer.err) return addStructureAnswer;

        return  'Collection has been created';
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