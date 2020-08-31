//add modules
const getConfig = require('gh-get-config');
const userConfig = require('gh-config');

// get token
const token = getConfig('dbToken');

const firstConnect = (req, res) => {
    try {
// token is correct
        if (req.body.token == token) {
//add user ip to user list
            userConfig.add({ip: req.ip});
            res.status(200).send('connection successfully');
        } else {
// token id not correct
            res.status(200).send({
                message: "connection failed",
                error: "invalid token"
            });
        }
    } catch(err){
// other errors
        res.status(200).send({
            message: "connection failed",
            error: err
        });
    }
}

module.exports = firstConnect;