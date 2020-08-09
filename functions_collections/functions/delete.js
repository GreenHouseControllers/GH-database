// add modules
const  readJson = require('../../function_json/readJson');
const writeJson = require('../../function_json/writeJson');

const deleteElement = (path, nullName, key, data) => {
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
// remove element
        file.splice(element, 1);
// write new  object
        let answerWrite = writeJson(path, nullName, file);

        if (answerWrite == 'file has been wrote') {
            return 'element has been deleted';
        } else {
            return answerWrite;
        }
    } catch(err){
        return({
            message: "can not delete element",
            error: err
        })
    }
}
// exports
module.exports = deleteElement;