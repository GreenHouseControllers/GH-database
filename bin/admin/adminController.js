// add modules
const register = require('./auth/register');
const login = require('./auth/login');

const errorLog = require('gh-logger');



module.exports = {
    register(req, res){
        let code, data;
// call register module
        let answer = register(req.body);
// error analysis
        if(answer.type == 'ok') code = 200, data = 'user has been created'
        else if(answer.type == 'full') code = 400, data ='User is already created'
        else if(answer.type =='invalid-token') code = 400, data = 'Invalid token'
        else if (answer.type == 'bcrypt-err') {
            code = 500;
            data = {
                message: 'bcrypt error',
                error: answer.err
            }
            errorLog.addLog(data);
        }
        else if(answer.type == 'no') {
            code = 500;
            data = {
                message: 'can not add user',
                error: answer.err
            }
            errorLog.addLog(data);
        }
        else code = 500, data = 'inside server error';
// response
        res.status(code).send(data);
    },
    async login (req, res){
        let code, data;
// call register module
        let answer = await login(req.body)
// error analysis
        if(answer.type == "false") code = 400, data = "Invalid password"
        else if(answer.type == "no-user") code = 400, data = "No such user"
        else if(answer.type == "fatal") {
            code = 500;
            data = {
                message: "Can not login",
                error: answer.err
            }
            errorLog.addLog(data);
        }
        else code = 200, data = answer;
// response
        res.status(code).send(data);
    },
    getErrorLog (req, res){
        try {
            let code, data;
// get error log
            let errorLogAnswer = errorLog.getFullLog()
// error analysis
            if(errorLogAnswer) code = 200, data = errorLogAnswer;
            else code = 500, data = "Can not get error log", errorLog.addLog(data);

            res.status(code).send(data);
        } catch (err) {
            const answer = {
                message: "Can not get error log",
                error: err
            }
            errorLog.addLog(answer);
            res.status(500).send(answer);
        }
    }

}
