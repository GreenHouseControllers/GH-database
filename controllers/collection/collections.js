// add main methods functions
const createCollection = require('../../functions_collections/createCollection');
const removeCollection = require('../../functions_collections/removeCollection');
// add crud sub-controller
const crud = require('./crud');

//add modules
const connectCheck = require('../../connect/apiConnect');

module.exports = {
    collection(req, res) {
        if (connectCheck(req.ip) == true){
// get parameters
            let method = req.body.method;
            let path = req.body.path;
            let name = req.body.name;
            let fileName = req.body.fileName;
            let data = req.body.data;
            let newData = req.body.newData;
            let key = req.body.key;

// main methods
            if (method == 'createCollection') {
                let answer = createCollection(name, path, fileName);
                res.status(200).send(answer);
            } else if (method == 'removeCollection') {
                let answer = removeCollection(name);
                res.status(200).send(answer);
            } else {
// crud methods
                let answer = crud(method, name, data, newData, key);
                res.status(200).send(answer);
            }
        } else {
            res.status(200).send('connection failed! \n connect with database before sending request.')
        }
    }
}