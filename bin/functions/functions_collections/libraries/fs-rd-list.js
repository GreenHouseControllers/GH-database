// add modules
const fs = require('fs');
const path = require('path');

const removeFile = require('../../functions_df/removeFile');
// get element number
exports.getElementNum = (name) => {
// read and parse collection list
    let collections_list = fs.readFileSync(path.join(__dirname, '../collections_list.json'), 'utf8');
    let file = JSON.parse(collections_list);
// get element number
    let element;
    for (i = 0; i < file.length; i++) {
        if (file[i]['name'] == name) {
            element = file.indexOf(file[i]);
        }
    }
    return element;
}
// get object from collection list
exports.getObj = (name) => {
    // read and parse collection list
    let collections_list = fs.readFileSync(path.join(__dirname, '../collections_list.json'), 'utf8');
    let file = JSON.parse(collections_list);
// get object from collection list
    let obj;
    for (i = 0; i < file.length; i++) {
        if (file[i]['name'] == name) {
            obj = file[i];
        }
    }
    return({file, obj});
}
// remove collection
exports.remove = (element, inputDirPath, name, file) => {
// remove collection from collection list
    file.splice(element, 1);
// write collection list
    let writeData = JSON.stringify(file, null, 4);
    fs.writeFileSync(path.join(__dirname, '../collections_list.json'), writeData);
// sat dirPath
    let dirPath = path.join('../collections', inputDirPath);
//remove collection file
    let answerRf = removeFile(dirPath, name);
// analysis of the response
    if (answerRf == 'file has been removed') {
        return 'Collection has been removed';
    }else{
        return {message: 'can not remove collection', err: {}};
    }
}

exports.rename = (name, newName) => {
    try {
// read and parse collection list
        let collections_list = fs.readFileSync(path.join(__dirname, '../collections_list.json'), 'utf8');
        let file = JSON.parse(collections_list);
// get object from collection list
        let obj;
        for (i = 0; i < file.length; i++) {
            if (file[i]['name'] == name) {
                file[i]["name"] = newName;
                let writeData = JSON.stringify(file, null, 4);
                fs.writeFileSync(path.join(__dirname, '../collections_list.json'), writeData);
                return {type: 'ok'};
            }
        }
        return({type: 'no-collection'})
    } catch (err) {
        // return ({
        //     message: "Can not rename collection",
        //     error: err
        // })
        return({
            type: 'no',
            err: err
        });
    }
}