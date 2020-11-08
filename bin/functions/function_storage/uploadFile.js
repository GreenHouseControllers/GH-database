const fs = require('fs');
const path = require('path');

const autoRemove = require('./remove');

const uploadFile = (file) => {
    try {
// read file list
        let sfnl = fs.readFileSync(path.join(__dirname, './storageFileNameList.json'), 'utf8');
        let storageFileNameList = JSON.parse(sfnl);

        const originalName = file.originalname;
        const insideFileName = file.filename;
        const mimetype = file.mimetype;

// check if there eny file with the same name adn remove uploaded file if it is.
        for (i = 0; i < storageFileNameList.length; i++) {
            if (storageFileNameList[i][originalName]){
                let autoRemoveAnswer = autoRemove(true, insideFileName);
                if(autoRemoveAnswer.error) return autoRemoveAnswer;
                return 'name-taken';
            }
        }
// file params for a list
        let fileParams = {
            path: insideFileName,
            mimetype: mimetype
        }
// add file params to the list
        let fileArr = {}
        fileArr[originalName] = fileParams;
        storageFileNameList.push(fileArr);
// write new list
        let writeData = JSON.stringify(storageFileNameList, null, 4);
        fs.writeFileSync(path.join(__dirname, './storageFileNameList.json'), writeData);

        return 'ok'
    } catch (err) {
// remove uploaded file if it's error
        let autoRemoveAnswer = autoRemove(true, file.filename);
        return {
            error: err,
            autoRemove: autoRemoveAnswer
        }
    }
}

module.exports = uploadFile;

