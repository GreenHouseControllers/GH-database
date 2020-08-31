// add modules
const  readJson = require('../../function_json/readJson');

const getElement = (path, nullName, key, data) => {
    try {
// read file
        let file = readJson(path, nullName);
// check file
        if (file["message"] == 'Can not read file'){
            return "can not get element";
        }else {
// get element
            let element;
            for (i = 0; i < file.length; i++) {
                if (file[i][key] == data) {
                    element = file[i];
                }
            }
            return element;
        }
    } catch(err){
      return({
          message: "can not get element",
          error: err
      })
    }
}
// exports
module.exports = getElement;