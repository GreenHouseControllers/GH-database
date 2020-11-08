// add main methods functions
const createCollection = require('../../functions/functions_collections/createCollection');
const removeCollection = require('../../functions/functions_collections/removeCollection');
const renameCollection = require('../../functions/functions_collections/renameCollection');
// add crud sub-controller
const crud = require('./crud');

//add modules
const connectCheck = require('../../connect/apiConnect');
const errorLog = require('gh-logger');

// response block
const response = (res, answer) => {
    // error analysis
    let code, data;
    if(answer.err) code = 500, errorLog.addLog(answer)
    else if(answer.code) code = answer.code, data = answer.data
    else code = 200, data = answer;

//response
    res.status(code).send(data);
}

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
            let newName = req.body.newName;

// main methods
            if (method == 'createCollection') {
                let answer = createCollection(name, path, fileName);
                response(res, answer);
            } else if (method == 'removeCollection') {
                let answer = removeCollection(name);
                response(res, answer);
            } else if(method == 'renameCollection') {
                let answer = renameCollection(name, newName);
                response(res, answer);
            } else {
// crud methods
                let answer = crud(method, name, data, newData, key);
                response(res, answer);
            }
        } else {
            res.status(200).send('connection failed! \n connect with database before sending request.')
        }
    }
}