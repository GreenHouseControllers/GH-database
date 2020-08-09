// add sub-controllers
const dataFile = require('./dirFile');
const json = require('./json');
//exports
module.exports = {
//dirFile
    df(req, res){
        try {
// get input parameters
            let method = req.body.method;
            let name = req.body.name;
            let path = req.body.path;
            let data;

            if (req.body.data){
               data = req.body.data;
            }
// request to dataFile sub-controller
            let answer = dataFile(method, name, path, data);
//response
            res.status(200).send(answer);
        }catch (error) {
//response
            res.status(400).send(error);
        }
    },
//json
    json(req, res){
        try{
// get input parameters
            let method = req.body.method;
            let name = req.body.name;
            let path = req.body.path;
            let data;

            if (req.body.data){
                data = req.body.data;
            }
// request to dataFile sub-controller
            let answer = json(method, name, path, data);
//response
            res.status(200).send(answer);
        }catch (error) {
//response
            res.status(400).send(error);
        }
    }
}
