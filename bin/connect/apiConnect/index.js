const config = require('gh-config');

const apiConnector = (ip) => {
    let userList = config.getFull();
    for (i = 0; i < userList.length; i++){
        if(userList[i]["ip"] == ip){
            return true;
        }
    }
    return false;
}

module.exports = apiConnector;