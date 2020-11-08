const getDirContent = require('../../functions/function_fsState/getDirContent');

const fsState = (method, path) => {
    if(method == "getDirContent") return getDirContent(path);
}

module.exports = fsState;