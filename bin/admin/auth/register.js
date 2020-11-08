const userNav = require('gh-user-nav');
const bcrypt = require('bcrypt');
const fs = require('fs');
const path = require('path');
const conf = require('gh-get-config');
require('../../../config/users/admin.json')
const register = (body) => {
    try {
        if(body.token !== conf("dbToken")) return({type: "invalid-token"});
        if(fs.readFileSync(path.join(__dirname, '../../../config/users/admin.json'), 'utf8') !== '[]') return({type: "full"});

        let answerType = 'ok'
        let err;
// hash new password
        bcrypt.hash(body.password, 12, (error, hashPassword) => {
            if (error) answerType = 'bcrypt-err', err = error;
// add new user
            else userNav.addUser({username: body.username, password: hashPassword});
        });

        return({type: answerType, err});
    } catch (err) {
        return({
            type: 'no',
            err: err
        })
    }
}

module.exports = register;