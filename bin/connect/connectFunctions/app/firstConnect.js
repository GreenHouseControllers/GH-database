//add modules
const getConfig = require('gh-get-config');
const userConfig = require('gh-config');

// get token
const token = getConfig('dbToken');

const failedConnection = (res, err) => {
    res.status(400).send({
        message: "connection failed",
        error: err
    });
}

const firstConnect = (req, res) => {
    try {
// token is correct
        if (req.body.token == token) {
//add user ip to user list
            userConfig.add({ip: req.ip});
            res.status(200).send('connection successfully');
        } else {
// token is not correct
            failedConnection(res, 'invalid token');
        }
    } catch(err){
// other errors
        failedConnection(res, err);
    }
}

module.exports = firstConnect;