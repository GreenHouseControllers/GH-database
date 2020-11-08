const fs = require('fs');
const path = require('path');

const removeFile = (insideName) => {
    try {
// remove file in the storage
        fs.unlinkSync(path.join(__dirname, '../../../data/storage', insideName));
        return true;
    } catch (err) {
        return {error: err};
    }
}


const remove = (auto, originalName) => {
// if called auto remove
    if(auto) return removeFile(originalName);
    try {
// read file list
        let sfnl = fs.readFileSync(path.join(__dirname, './storageFileNameList.json'), 'utf8');
        let storageFileNameList = JSON.parse(sfnl);

        let insideName;
// remove file from the list
        for (i = 0; i < storageFileNameList.length; i++) {
            if (storageFileNameList[i][originalName]){
                insideName = storageFileNameList[i][originalName]["path"];
                storageFileNameList.splice(i, 1);
            }
        }
// write new file list
        let writeData = JSON.stringify(storageFileNameList, null, 4);
        fs.writeFileSync(path.join(__dirname, './storageFileNameList.json'), writeData);
// call remove file function
        return removeFile(insideName);
    } catch (err) {
        return {
            message: "Can not remove file",
            error: err
        }
    }
}

module.exports = remove;