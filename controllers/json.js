//json functions
const getElement = require('../function_json/getElement');
const readJson = require('../function_json/readJson');
const writeJson = require('../function_json/writeJson');
const pushElement = require('../function_json/pushElement');
const deleteElement = require('../function_json/deleteElement');


const json = function (method, name, path, data) {
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

module.exports = json;