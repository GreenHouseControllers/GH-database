// add modules
const fs = require('fs');

module.exports = {
    DeleteUser(userListPath, key, params){
        try {
// read user list
            let userListFile = fs.readFileSync(userListPath, 'utf8');
            let userList = JSON.parse(userListFile);
// user number in userList
            let element;
// finding user number in userList
            for (i = 0; i < userList.length; i++) {
                if (userList[i][key] == params) {
                    element = userList.indexOf(userList[i]);
                }
            }
// remove user
            userList.splice(element, 1);
// write new  userList
            let writeData = JSON.stringify(userList, null, 4);
            fs.writeFileSync(userListPath, writeData);
            return;
        } catch (err) {
            return;
        }
    }
}