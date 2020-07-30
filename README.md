# GH-database

This app gives you possibility to work with your files out of your app.
All files are located in ./file_sistem

### install
1. download the app from the GitHub to folder which you choiced
    Use: git clone https://github.com/GreenHouseControllers/GH-database.git
2. change port in './config/config.json',
default port is 7202.

Then db is ready for work.

To start app open the terminal in the root of the database

and use command: 

        npm start
        
Use our npm module to work with db. https://github.com/GreenHouseControllers/gh-db
or use:
    
    npm install ghc-db --save

more about this module: https://www.npmjs.com/package/ghc-db
or: https://github.com/GreenHouseControllers/gh-db

If you don't want to use our npm module - looking for next part of the text.

### usage
#### Methods dirFile
1. readFile - read file and return its contents.
2. createFile - create file and return message or error.
3. removeFile - remove file and return message or error.
4. createDir - create folder and return message or error.
5. removeDir - remove folder and return message or error.
6. writeFile - write data to file and return message or error. 

#### Methods json
1. readJson - read and parse json file and return its contents.
2. writeJson - write json file and return message.
3. getElement - return element from array in json file.
4. pushElement - push element to the end of array in json file. 
5. deleteElement - deleteElement from array in json file.

#### URL
This db has got 2 urls - for working with file sistem and with json filesand arrays.
1. localhost:7202/api/fs/df
2. localhost:7202/api/fs/json

Port will automatically change to that one, which you chose.

#### request to db
 Use localhost:7202/api/fs/df with requests with dirFile methods.
 To send request with all method except writeFile us have to send:
    
    {
       method: "readJson",
       path: "a/b/c",
       name: "exemple.txt"
    }

To send request with writeFile you have to use one more parameter - data.

    {
        "method": "writeFile",
        "path": "exemple",
        "name": "exemple.json",
        "data": "SOME TEXT"
    }
    
To send request with json methods, you have to send:

1. readJson:

        {
            "method": "readJson",
            "path": "exemple",
            "name": "exemple.json"
        }

2. writeJson

        {
            "method": "writeJson",
            "path": "exemple",
            "name": "exemple.json",
            "data": data
        }
        
3. getElement

        {
            "method": "getElement",
            "path": "exemple",
            "name": "exemple.json",
            "data": "name_of_element"
        }

4. pushElement 

        {
            "method": "pushElement",
            "path": "exemple",
            "name": "exemple.json",
            "data": "new_element"
        }
        
5. deleteElement

        {
              "method": "deleteElement",
              "path": "exemple",
              "name": "exemple.json",
              "data": "element"          
        }
        
All methods can return you errors.
if you got message like 'Can not read file' and error, look for errors of the fs.

### exemple of err:

    {
        "message": "Can not create directory",
        "err": {
            "errno": -17,
            "code": "EEXIST",
            "syscall": "mkdir",
            "path": "/home/glab/Рабочий стол/Glab/jarvis/DB/1.0/DB/db/file_sistem/exemple"
        }
    }


