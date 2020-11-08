// add modules
const fs = require('fs');

module.exports = {
    AddUser(userListPath, params){
        try {
// read user list
            let userListFile = fs.readFileSync(userListPath, 'utf8');
            let userList = JSON.parse(userListFile);
// add user
            userList.push(params);
// write new user list
            let writeData = JSON.stringify(userList, null, 4);
            fs.writeFileSync(userListPath, writeData);
            return;
        } catch (err) {
            return;
        }
    }
}