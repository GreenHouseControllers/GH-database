//functions_df
const createDir = require('../functions_df/createDir');
const removeDir = require('../functions_df/removeDir');
const createFile = require('../functions_df/createFile');
const removeFile = require('../functions_df/removeFile');
const readFile = require('../functions_df/readFile');
const writeFile = require('../functions_df/writeFile');
const readJson = require('../function_json/readJson');

const dirFile = function (method, name, path, data) {
    if(method == 'createDir'){
        let answer = createDir(path, name);
        return answer;
    }
    else if (method == 'removeDir'){
        let answer = removeDir(path, name);
        return answer;
    }
    else if (method == 'createFile') {
        let answer = createFile(path, name);
        return answer;
    }
    else if (method == 'removeFile'){
        let answer = removeFile(path, name);
        return answer;
    }
    else if (method == 'readFile'){
        let answer = readFile(path, name);
        return answer;
    }
    else if (method == 'writeFile'){
        let answer = writeFile(path, name, data);
        return answer;
    }
}

module.exports = dirFile;