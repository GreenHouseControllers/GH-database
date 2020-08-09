// add modules
const  readJson = require('../../function_json/readJson');
const writeJson = require('../../function_json/writeJson');

const update = (path, nullName, key, data, newData) => {
    try {
// read collection file
        let file = readJson(path, nullName);
// get element index
        let element;
        for (i = 0; i < file.length; i++) {
            if (file[i][key] == data) {
                element = file.indexOf(file[i]);
            }
        }
// change element
        file.splice(element, 1, newData);
// write new  object
        let answerWrite = writeJson(path, nullName, file);
// response processing
        if (answerWrite == 'file has been wrote') {
            return 'collection has been updated';
        } else {
            return answerWrite;
        }
    } catch(err){
        return({
            message: "can not update collection",
            error: err
        })
    }
}
// exports
module.exports = update;