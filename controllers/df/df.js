// add sub-controllers
const dataFile = require('./dirFile');
const json = require('./json');
const connectCheck = require('../../connect/apiConnect');
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
                let data;

                if (req.body.data) {
                    data = req.body.data;
                }
// request to dataFile sub-controller
                let answer = dataFile(method, name, path, data);
//response
                res.status(200).send(answer);
            } catch (error) {
//response
                res.status(400).send(error);
            }
        } else {
            res.status(200).send('connection failed! \n connect with database before sending request.')
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
//response
                res.status(200).send(answer);
            } catch (error) {
//response
                res.status(400).send(error);
            }
        } else {
            res.status(200).send('connection failed! \n connect with database before sending request.')
        }
    }
}
