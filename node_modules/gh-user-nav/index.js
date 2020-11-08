// add modules
const path = require('path');
// add functions
const {CheckUser} = require('./functions/checkUser');
const {GetUserInfo} = require('./functions/getUserInfo');
const {AddUser} = require('./functions/addUser');
const {DeleteUser} = require('./functions/deleteUser');
// path to the file with a user list
let userListPath;

//connect function
exports.connect = (dirname, ULPath) => {
    userListPath = path.join(dirname, ULPath);
}
// functional functions
exports.checkUser = (key, params) => CheckUser(userListPath, key, params);
exports.getUserInfo = (key, params) => GetUserInfo(userListPath, key, params);
exports.addUser = (params) => AddUser(userListPath, params);
exports.deleteUser = (key, params) => DeleteUser(userListPath, key, params);