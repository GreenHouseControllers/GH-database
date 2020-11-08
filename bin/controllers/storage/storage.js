// add modules
const multer = require('multer');
const errorLog = require('gh-logger');
// add functions
const connectCheck = require('../../connect/apiConnect');
const uploadFile = require('../../functions/function_storage/uploadFile');
const remove = require('../../functions/function_storage/remove');
const getFile = require('../../functions/function_storage/getFile');


module.exports = {
// upload
    upload(req, res) {
// check connection
        if (connectCheck(req.ip) == true){
            let code, data;
// uploading file
            let answer = uploadFile(req.file);
// answer analysis
            if(answer == 'ok') code = 200, data = 'file has been uploaded'
            else if(answer.error) code = 500, data = {
                message: 'Uploading error',
                error: answer
            }
            else if(answer == 'name-taken') code = 400, data = 'Name is already taken'
            else code = 500, data = 'Unknown server error';

            if(code == 500) errorLog.addLog(data);
// sending response
            res.status(code).send(data);
        } else {
// if client was not connect
            res.status(200).send('connection failed! \n connect with database before sending request.')
        }
    },
    methods(req, res){
// check connection
        if (connectCheck(req.ip) == true){
            let method = req.body.method;
            let name = req.body.name;

            let code, data;
            let answer;
            if(method == 'remove') answer = remove(false, name);
// answer analysis

            if(answer == true) code = 200, data = 'file has been removed'
            else if(answer.error) code = 500, data = {
                message: 'Can not remove file',
                error: answer.error
            }

            if(code == 500) errorLog.addLog(data);

            res.status(code).send(data);
        } else {
// if client was not connect
            res.status(200).send('connection failed! \n connect with database before sending request.')
        }
    },
    download(req, res) {
// check connection
        if (connectCheck(req.ip) == true){
            let name = req.body.name;
// get file params
            let answer = getFile(name);
            let code, data;
// answer analysis and sending response
            if(answer.error) {
                code = 500;
                data = {
                    message: 'Can not download file',
                    error: answer.error
                };
                errorLog.addLog(data);
                res.status(code).send(data);
            }else if(answer == 'no-file'){
                code = 400;
                data = 'No such file';
                res.status(code).send(data);
            }else if(answer){
                code = 200;
                let path = answer.path;
                let mimetype = answer.mimetype;
                res.status(code).download(path);
            } else {
                code = 500;
                data = "Unknown db error";
                errorLog.addLog(data);
                res.status(code).send(data);
            }
        } else {
// if client was not connect
            res.status(200).send('connection failed! \n connect with database before sending request.')
        }
    }
}