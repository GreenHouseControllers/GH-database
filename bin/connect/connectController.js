// add modules
const appFirstConnect = require('./connectFunctions/app/firstConnect');

//const appConnector = require('./connectors/tokenVerificator');

module.exports = {
    appConnect(req, res) {
        appFirstConnect(req, res);
    }
}