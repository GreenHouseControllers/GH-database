# gh-user-nav

This module helps you to work with user list.

## install

To install gh-user-nav use:

       npm i gh-user-nav
       
or (if you want to add module to package.json)

       npm i gh-user-nav --save     
       
## usage  

#### add to the project

        const userNav = require('gh-user-nav');
        

#### connect
 You need to give module information about your file, before you will work with it.
 
        userNav.connect(__dirname, './someDir/userList.json'
        
#### checkUser
Checks is there eny users with the same parameters as you give.

        userNav.checkUser("username", "Jack");
        
#### getUserInfo
Returns information about user.

        userNav.checkUser("username", "Jack");
        
#### addUser
Add user to user list.

        const newUserInfo = {
            "id": "qwet1325",
            "username": "Nick",
            "password": "PASSWORD"
        }

        userNav.checkUser(newUserInfo);
        
#### deleteUser
Deletes user from user list.       

        userNav.checkUser("username", "Jony");
        
## example of user list 
       
       [
            {
             "id": "qwe132",
             "username": "Jack",
             "password": "123abc"
            },
            {
             "id": "fsa468",
             "username": "Jony",
             "password": "fadf55"
            },
            {
             "id": "hdt631",
             "username": "Julia",
             "password": "agfa21"
            }
       ]
