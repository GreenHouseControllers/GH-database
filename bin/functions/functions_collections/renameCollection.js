// add modules
const fsRd = require('./libraries/fs-rd-list');

let renameCollection = function (name, newName) {
    try {
        let code, data;
        let answer = fsRd.rename(name, newName);

        if(answer.type == 'ok') code = 200, data = 'Collection has been renamed'
        else if(answer.type == 'no-collection') code = 400, data = 'No such collection'
        else if(answer.type == 'no') code = 500, data = {
            message: "Can not rename collection",
            err: answer.err
        }
        else code = 500, data = 'Unknown server error';

        return ({code, data});
    } catch (err){
        return({
            message: "Can not rename collection",
            err: err
        });
    }
}
// exports
module.exports = renameCollection;