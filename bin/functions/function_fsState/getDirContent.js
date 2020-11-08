const fs = require('fs');
const path = require('path');
const conf = require('gh-get-config');
const errorLog = require('gh-logger');

const getDirContent = (dirPath) => {
    try{
        return fs.readdirSync(path.join(__dirname, conf("backMethodsPath"), dirPath));
    } catch (err) {
        const error = {
            message: "Can not read dir content",
            err: err
        }
        errorLog.addLog(error);
        return error
    }
}

module.exports = getDirContent;