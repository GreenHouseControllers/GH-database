//add modules
const userNav = require('gh-user-nav');
const bcrypt = require('bcrypt');
const conf = require('gh-get-config');

const login = async(body) => {
    try {
        const {username, password} = body;
// check is there eny user in use list like that who try to login
        if (await userNav.checkUser("username", username)) {
// get info about user
            let userInfo = await userNav.getUserInfo("username", username);
// check password
            let bcryptAnswer = await bcrypt.compare(password, userInfo.password);
// invalid password
            if (!bcryptAnswer) return({type: 'false'});
// successful login
            return conf('dbToken');
// no such user
        } else return({type: 'no-user'});
    } catch (err) {
        return({
            type: "fatal",
            error: err
        });
    }
}

module.exports = login;