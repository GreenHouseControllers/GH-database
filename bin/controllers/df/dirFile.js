// functions_df
const createDir = require('../../functions/functions_df/createDir');
const removeDir = require('../../functions/functions_df/removeDir');
const createFile = require('../../functions/functions_df/createFile');
const removeFile = require('../../functions/functions_df/removeFile');
const readFile = require('../../functions/functions_df/readFile');
const writeFile = require('../../functions/functions_df/writeFile');
const rename = require('../../functions/functions_df/rename');

// dirFile
const dirFile = function (method, name, path, data, newName) {
// choose method
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
    else if (method == 'rename'){
        let answer = rename(path, name, newName);
        return answer;
    }
}
// exports
module.exports = dirFile;