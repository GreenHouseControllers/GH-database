const fs = require('fs');
const path = require('path');

const getFile = (name) => {
    try {
        let sfnl = fs.readFileSync(path.join(__dirname, './storageFileNameList.json'), 'utf8');
        let storageFileNameList = JSON.parse(sfnl);

        let insideName;
        let mimetype;

        for (i = 0; i < storageFileNameList.length; i++) {
            if (storageFileNameList[i][name]) {
                insideName = storageFileNameList[i][name]["path"];
                mimetype = storageFileNameList[i][name]["mimetype"];
            }
        }
        if(!insideName) return 'no-file';
        let fullPath = path.join(__dirname, '../../../data/storage', insideName);

        return {
            path: fullPath,
            mimetype: mimetype
        }
    } catch (err) {
        return {error: err};
    }
}

module.exports = getFile;