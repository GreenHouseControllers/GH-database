# GH-database

This app gives you possibility to work with your files out of your app.
All files are located in ./file_sistem

## install
1. download the app from the GitHub to folder which you choiced
    Use: git clone https://github.com/GreenHouseControllers/GH-database.git
2. change port in './config/config.json',
default port is 7202.

Then db is ready for work.

To start app open the terminal in the root of the database
    and use command: npm start
Use our npm module to work with db. https://github.com/GreenHouseControllers/gh-db
or use:
    
    npm install ghc-db --save

more about this module: https://www.npmjs.com/package/ghc-db
or: https://github.com/GreenHouseControllers/gh-db

If you don't want to use our npm module - looking for next part of the text.

## usage
### Methods dirFile
1. readFile - getElement file and return its contents.
2. createFile - create file and return message or error.
3. removeFile - remove file and return message or error.
4. createDir - create folder and return message or error.
5. removeDir - remove folder and return message or error.
6. writeFile - write data to file and return message or error. 

### Methods json
1. readJson - getElement and parse json file and return its contents.
2. writeJson - write json file and return message.
3. getElement - return element from array in json file.
4. push - push element to the end of array in json file. 

### Methods collection
**main**
1. createCollection - create collection and return message.
2. removeCollection - remove collection and return message.

**CRUD**
1. create - add object and return message.
2. read - read collection and return its content.
3. update - delete object, add new object and return message.
4. delete - delete object and return message.

**more methods**
1. get - get object by key and value.

### URL
This db has got 3 urls - for working with filesystem, json files and with collections to sand requests.
1. localhost:7202/api/fs/df
2. localhost:7202/api/fs/json 
3. localhost:7202/api/collection   

Port will automatically change to that one, which you chose.

### request to db
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
    
Use localhost:7202/api/fs/json to send request with json methods.
##### arrays

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
        
### collections

To send requests with collection methods use: localhost:7202/api/collection    
        
1. createCollection:

        {
            "method": "createCollection",
            "name": "newCollection",
            "path": "./collections/newCollection.json",
            "fileName": "newCollection.json"
        }

2. removeCollection:

        {
            "method": "removeCollection",
            "name": "newCollection"
        }

### CRUD
    
1. create:
        
        {
            "method": "create",
            "name": "newCollection",
            "data": {
                "name": "jack",
                "age": 15
            }
        }
        
##### or

        {
            "method": "create",
            "name": "newCollection",
            "data": data
        }
        
2. read:

        {
            "method": "read",
            "name": "newCollection"
        }
        
3. update:

        {
            "method": "update",
            "name": "newCollection",
            "key": "name",
            "data": "jony",
            "newData": {
                "name": "jack",
                "ege": 15
            }
        }
    
##### or

        {
            "method": "update",
            "name": "newCollection",
            "key": "name",
            "data": "jony",
            "newData": newData
        }

here data is value of object with key 'name'.

4. delete:

        {
            "method": "delete",
            "name": "newCollection",
            "key": "name",
            "data": "jony"
        }

### more methods for collection

get:
        
        {
            "method": "get",
            "name": "newCollection",
            "key": "name",
            "data": "jack"
        }           
        
This method returns you one object from the collection.

**If you have many objects with the same value with a same key, it will return you the first one**
        
### Creating collections with the Postman

Postman collection for working with db lokated at: ./gh-db.postman_collection.json
Import collection.
Use requests createCollection for create and removeCollection for remove.
        
## errors
        
All methods can return you errors.
if you got message like 'Can not getElement file' and error, look for errors of the fs.

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


  