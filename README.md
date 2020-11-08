# GH-database 2.0.0

This app gives you possibility to work with your files and database out of your app.

## Foreword
App has 3 directories with data

1. file_system - you can create, read, write and do other operations with files and directories. 
Location: ./data/file_system

2. collections - you can  work with this app as with database, create collections and realize CRUD. All collection will locate in the 
separate file.
Location: ./data/collections

3. storage - also you can use the app as a storage for your files images, archives and all other types. You can upload, download and remove files in the storage.
Location: ./data/storage

## install
1. download the app from the GitHub to folder.
    Use: 
    
        git clone https://github.com/GreenHouseControllers/GH-database.git
        
2. change port of this app in './config/config.json',
default port is 7202.

3. change token in './config/config.json' , key - "dbToken", use this token when you will connect with GH-database
default token is "t111"

Then db is ready for work.

To start app open the terminal in the root of the database
    and use command: 
    
    npm start
        
Use our npm module to work with gh-database in your app. https://github.com/GreenHouseControllers/gh-db
or use:
    
    npm install ghc-db --save

more about this module: https://www.npmjs.com/package/ghc-db
or: https://github.com/GreenHouseControllers/gh-db

If you don't want to use our npm module - looking for next part of the text.

## Postman

You can test db using postman. We give you postman collection, that you can import to your postman.
collection located: ./gh-db.postman_collection.json

## Usage
**DB receive just post requests**
### connect with db
You have to do connect before work with it.
To do connect you have to send request with token.
```js
    {
        token: "TOKEN"
    }
```

### Methods dirFile
1. readFile - getElement file and return its contents.
2. createFile - create file and return message or error.
3. removeFile - remove file and return message or error.
4. createDir - create directory and return message or error.
5. removeDir - remove directory and return message or error.
6. writeFile - write data to file and return message or error. 
7. rename - rename file or directory and return message or error. 
8. getDirContent - get content of directory (the same as ls in terminal).

### Methods json
1. readJson - getElement and parse json file and return its contents.
2. writeJson - write json file and return message.
3. getElement - return element from array in json file.
4. pushElement - push element to the end of array in json file. 
5. deleteElement - delete element from json array.

### Methods collection
**main**
1. createCollection - create collection and return message.
2. removeCollection - remove collection and return message.

**CRUD**
1. create - add object and return message.
2. read - read collection and return its content.
3. update - delete object and add new object and return message.
4. delete - delete object and return message.

**more methods**
1. get - get object by key and value.
2. renameCollection - rename collection.

### Methods storage
1. upload - upload your file to the storage.
2. download - download file from the storage.
3. remove - remove file from the storage. 

### Methods admin 
1. register - register user that can work with db without token, but you need token for register. 
2. login - authorizes the user without token and returns you token.
3. getErrorLog - returns full error log list.

### Json objects for requests to db
All requests are divided into groups by functionality and addresses.

#### dirFile

Url: /api/fs/df

**createDir**
```json
{
    "method": "createDir",
    "path": "/some/path",
    "name": "exampleDir"
}
```

**removeDir**
```json
{
    "method": "removeDir",
    "path": "/some/path",
    "name": "exampleDir"
}
```

**createFile**
```json
{
    "method": "createFile",
    "path": "/some/path",
    "name": "exampleFile.txt"
}
```

**removeFile**
```json
{
    "method": "removeFile",
    "path": "/some/path",
    "name": "exampleFile.txt"
}
```

**readFile**
```json
{
    "method": "readFile",
    "path": "/some/path",
    "name": "exampleFile.txt"
}
```

**writeFile**
```json
{
    "method": "writeFile",
    "path": "/some/path",
    "name": "exampleFile.txt",
    "data": "Hallo World ! ! !"
}
```

**rename**

This method can rename and files and directories
```json
{
    "method": "rename",
    "path": "/some/path",
    "name": "exampleFile.txt",
    "newName": "newFile.txt"
}
```

Url: /api/fs/fsState

**getDirContent**
```json
{
    "method": "getDirContent",
    "path": "/some/path"
}
```

#### Json

Url: /api/fs/json

**readJson**
```json
{    
    "method": "readJson",
    "path": "/some/path",
    "name": "example.json"
}
```

**writeJson**
```json
{
    "method": "writeJson",
    "path": "/some/path",
    "name": "example.json",
    "data": {
        "name": "jony",
        "age": "26"
    }
}
```

**getElement**
Here data is key of element in the object.
```json
{
    "method": "getElement",
    "path": "/some/path",
    "name": "example.json",
    "data": "name"
}
```

**pushElement**
Here data is element that you will push (as in an array)
```json
{
    "method": "pushElement",
    "path": "/some/path",
    "name": "example.json",
    "data": "newElement"
}
```

**deleteElement**
Here data is number of element. 
```json
{
    "method": "deleteElement",
    "path": "/some/path",
    "name": "example.json",
    "data": 0
}
```

#### Collections

Url: /api/collection

**createCollection**
```json
{
    "method": "createCollection",
    "name": "newCollection",
    "path": "/some/path/newCollection.json",
    "fileName": "newCollection.json"
}
```

**removeCollection**
```json
{
    "method": "removeCollection",
    "name": "newCollection"
}
```

**renameCollection**
```json
{
    "method": "renameCollection",
    "name": "newCollection",
    "newName": "otherCollection"
}
```

**get**
```json
{
    "method": "get",
    "name": "newCollection",
    "key": "name",
    "data": "jack"
}           
```

#### crud

Url: /api/collection

**create**
```json
{
    "method": "create",
    "name": "newCollection",
    "data": {
        "name": "jack",
        "age": 15
    }
}   
```

**read**
```json
{
    "method": "read",
    "name": "newCollection"
}
```

**update**
```json
{
    "method": "update",
    "name": "newCollection",
    "key": "name",
    "data": "jack",
    "newData": {
        "name": "joseph",
        "ege": 15
    }
}
```

**delete**
```json
{
    "method": "delete",
    "name": "newCollection",
    "key": "name",
    "data": "joseph"
}
```

#### storage

Url: /api/storage/methods

**upload** 
You have to use content type: multipart/form-data, to upload files to storage.
Example of uploading will be shown in block examples of code.

**download**
```json
{
    "name": "image.jpg"
}
```

**remove**
```json
{
    "method": "remove",
    "name": "image.jpg"
}
```

#### admin

**register**

Url: /admin/register
```json
{
    "username": "joseph",
    "password": "123a",
    "token": "t111"
}
```

**login**

Url: /admin/login
```json
{
    "username": "joseph",
    "password": "123a"
}
```

**getErrorLog**

Url: /admin/getErrorLog

You have to send empty body.
```json
{}
```

### NodeJs code examples

#### sending usual request 

**Native**

```js
var https = require('follow-redirects').https;
var fs = require('fs');

var options = {
  'method': 'POST',
  'hostname': 'localhost',
  'port': 7202,
  'path': '/api/fs/df',
  'headers': {
    'Content-Type': 'application/json'
  },
  'maxRedirects': 20
};

var req = https.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function (chunk) {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });

  res.on("error", function (error) {
    console.error(error);
  });
});

var postData = JSON.stringify({"method":"createDir","path":"","name":"exemple"});

req.write(postData);

req.end();
```

**Request**

```js
var request = require('request');
var options = {
  'method': 'POST',
  'url': 'localhost:7202/api/fs/df',
  'headers': {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({"method":"createDir","path":"","name":"exemple"})

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
```

**Axios**

```js
var axios = require('axios');
var data = JSON.stringify({"method":"createDir","path":"","name":"exemple"});

var config = {
  method: 'post',
  url: 'localhost:7202/api/fs/df',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
```

#### Sending request gor uploading file 

**Native**

```js
var https = require('follow-redirects').https;
var fs = require('fs');

var options = {
  'method': 'POST',
  'hostname': 'localhost',
  'port': 7202,
  'path': '/api/storage/upload',
  'headers': {
  },
  'maxRedirects': 20
};

var req = https.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function (chunk) {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });

  res.on("error", function (error) {
    console.error(error);
  });
});

var postData = "------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"filedata\"; filename=\"file.ods\"\r\nContent-Type: \"{Insert_File_Content_Type}\"\r\n\r\n" + fs.readFileSync('/home/jack/file.ods') + "\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW--";

req.setHeader('content-type', 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW');

req.write(postData);

req.end();
```

**Request**

```js
var request = require('request');
var fs = require('fs');
var options = {
  'method': 'POST',
  'url': 'localhost:7202/api/storage/upload',
  'headers': {
  },
  formData: {
    'filedata': {
      'value': fs.createReadStream('/home/jack/file.ods'),
      'options': {
        'filename': 'file.ods',
        'contentType': null
      }
    }
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
```

**Axios**

```js
var axios = require('axios');
var FormData = require('form-data');
var fs = require('fs');
var data = new FormData();
data.append('filedata', fs.createReadStream('/home/jack/file.ods'));

var config = {
  method: 'post',
  url: 'localhost:7202/api/storage/upload',
  headers: { 
    ...data.getHeaders()
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

```

## DB answers

### Normal answer
If all is ok db returns message or some data if you want to get something.

example of message: File has been created.


### Errors 

```json
{
    "message": "Can not remove file",
    "error": {
        "code": "ERR_INVALID_ARG_TYPE"
    }
}
```

### Example of error log file

```json
[
    {
        "time": "10-29-2020, 12:57:01 pm",
        "log": {
            "message": "Can not remove collection",
            "err": {}
        }
    },
    {
        "time": "11-06-2020, 12:43:39 pm",
        "log": {
            "message": "Can not remove file",
            "error": {
                "code": "ERR_INVALID_ARG_TYPE"
            }
        }
    },
    {
        "time": "11-06-2020, 12:44:10 pm",
        "log": {
            "message": "Can not remove directory",
            "err": {
                "errno": -2,
                "syscall": "rmdir",
                "code": "ENOENT",
                "path": "/home/glab/Рабочий стол/Glab/Grean House Controller/apps/gh-db/database/GH-database/data/file_system/exemple"
            }
        }
    },
    {
        "time": "11-06-2020, 12:44:26 pm",
        "log": {
            "message": "Can not get collection path",
            "err": "invalid collection name"
        }
    }
]
```
