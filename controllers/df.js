const dataFile = require('./dirFile');
const json = require('./json');

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

            let answer = dataFile(method, name, path, data);
            res.status(200).send(answer);
        }catch (error) {
            res.status(400).send(error);
        }
    },
    json(req, res){
        try{
            let method = req.body.method;
            let name = req.body.name;
            let path = req.body.path;
            let data;

            if (req.body.data){
                data = req.body.data;
            }

            let answer = json(method, name, path, data);
            res.status(200).send(answer);
        }catch (error) {
            res.status(400).send(error);
        }
    }
}
