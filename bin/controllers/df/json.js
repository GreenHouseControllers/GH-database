//json functions
const getElement = require('../../functions/function_json/getElement');
const readJson = require('../../functions/function_json/readJson');
const writeJson = require('../../functions/function_json/writeJson');
const pushElement = require('../../functions/function_json/pushElement');
const deleteElement = require('../../functions/function_json/deleteElement');

// json
const json = function (method, name, path, data) {
// choose method
    if (method == 'getElement'){
        let answer = getElement(path, name, data);
        return answer;
    }
    if (method == 'readJson'){
        let answer = readJson(path, name);
        return answer;
    }
    else if (method == 'writeJson'){
        let answer = writeJson(path, name, data);
        return answer;
    }
    else if (method == 'pushElement'){
        let answer = pushElement(path, name, data);
        return answer;
    }
    else if (method == 'deleteElement'){
        let answer = deleteElement(path, name, data);
        return answer;
    }
}
//exports
module.exports = json;