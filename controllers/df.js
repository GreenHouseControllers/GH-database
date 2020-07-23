const fs = require('fs');

//functions
const createDir = require('../functions/createDir');
const removeDir = require('../functions/removeDir');
const createFile = require('../functions/createFile');
const removeFile = require('../functions/removeFile');
const readFile = require('../functions/readFile');
const writeFile = require('../functions/writeFile');
const readJson = require('../functions/readJson');

module.exports = {
     df(req, res){
        try {
            let method = req.body.method;
            let name = req.body.name;
            let path = req.body.path;
            let data;

            if (req.body.data){
               data = req.body.data;
            }

            if(method == 'createDir'){
                let answer = createDir(path, name);
                res.status(200).send(answer);
            }
            else if (method == 'removeDir'){
                let answer = removeDir(path, name);
                res.status(200).send(answer);
            }
            else if (method == 'createFile') {
                let answer = createFile(path, name);
                res.status(200).send(answer);
            }
            else if (method == 'removeFile'){
                let answer = removeFile(path, name);
                res.status(200).send(answer);
            }
            else if (method == 'readFile'){
                let answer = readFile(path, name);
                res.status(200).send(answer);
            }
            else if (method == 'writeFile'){
                let answer = writeFile(path, name, data);
                res.status(200).send(answer);
            }
            else if (method == 'readJson'){
                console.log(method, path, name);
                let answer = readJson(path, name);
                res.status(200).send(answer);
            }

        }catch (error) {
            res.status(400).send(error);
        }
    }
}
