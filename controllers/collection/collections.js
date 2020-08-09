// add main methods functions
const createCollection = require('../../functions_collections/createCollection');
const removeCollection = require('../../functions_collections/removeCollection');
// add crud sub-controller
const crud = require('./crud');

module.exports = {
    collection(req, res){
// get parameters
        let method = req.body.method;
        let path = req.body.path;
        let name = req.body.name;
        let fileName = req.body.fileName;
        let data = req.body.data;
        let newData = req.body.newData;
        let key = req.body.key;

// main methods
        if(method == 'createCollection') {
            let answer = createCollection(name, path, fileName);
            res.status(200).send(answer);
        }
        else if(method == 'removeCollection'){
            let answer = removeCollection(name);
            res.status(200).send(answer);
        } else {
// crud methods
            let answer = crud(method, name, data, newData, key);
            res.status(200).send(answer);
        }
    }
}