// add modules
const fsRd = require('./libraries/fs-rd-list');

let removeCollection = function (name) {
    try {
// get parameters
        let getObj = fsRd.getObj(name);
        let file = getObj.file;
        let obj = getObj.obj;
        let path = obj.path;
        let nullName = '';
//get element
        let element = fsRd.getElementNum(name);
// remove element
        let answer = fsRd.remove(element, path, nullName, file);
        return answer;
    }
    catch (err){
        return({
            message: "Can not remove collection",
            err: err
        });
    }
}
// exports
module.exports = removeCollection;