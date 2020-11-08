// add sub-controllers
const dataFile = require('./dirFile');
const json = require('./json');
const fsState = require('../fsState/fsState');
const connectCheck = require('../../connect/apiConnect');

// add modules
const errorLog = require('gh-logger');

// response block
const response = (res, answer) => {
    // error analysis
    let code;
    if (answer.err) code = 500, errorLog.addLog(answer);
    else code = 200;

//response
    res.status(code).send(answer);
}
//exports
module.exports = {
//dirFile
    df(req, res){
        if (connectCheck(req.ip) == true) {
            try {
// get input parameters
                let method = req.body.method;
                let name = req.body.name;
                let path = req.body.path;
                let newName;
                let data;

                if (req.body.newName) newName = req.body.newName;
                if (req.body.data) data = req.body.data;

// request to dataFile sub-controller
                let answer = dataFile(method, name, path, data, newName);
                response(res, answer);
            } catch (error) {
//response
                res.status(500).send(error);
            }
        } else {
            res.status(400).send('connection failed! \n connect with database before sending request.')
        }
    },
//json
    json(req, res) {
        if (connectCheck(req.ip) == true) {
            try {
// get input parameters
                let method = req.body.method;
                let name = req.body.name;
                let path = req.body.path;
                let data;

                if (req.body.data) {
                    data = req.body.data;
                }
// request to dataFile sub-controller
                let answer = json(method, name, path, data);
                response(res, answer);
            } catch (error) {
//response
                res.status(500).send(error);
            }
        } else {
            res.status(400).send('connection failed! \n connect with database before sending request.')
        }
    },
    fsState(req, res) {
        if(connectCheck(req.ip) == true) {
            try {
                let method = req.body.method;
                let path = req.body.path;

                let answer = fsState(method, path);
                response(res, answer);
            } catch (error) {
//response
                res.status(500).send(error);
            }
        } else {
            res.status(400).send('connection failed! \n connect with database before sending request.')
        }
    }
}
