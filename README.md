This app gives you possibility to work with your files out of your app.
All files are located in ./file_sistem

##### install
download the app from the GitHub to folder which you choiced
	Use: git clone https://github.com/GreenHouseControllers/GH-database.git
Then db is ready for work.

To start app open the terminal in the root of the database
	and use command: npm start
Use our npm module to work with db.
##### More about it: 

If you can't, or don't want to use our npm module, below will be info for you.

To send requests use url: localhost:7202/api/fs/df 

###### To do request to the db, you have to send object like:
    {
       method: "readJson",
       path: "a/b/c",
       name: "exemple.txt"
    }

##### Methods
1. readFile - read file and return its contents.
2. createFile - create file and return message or error.
3. removeFile - remove file and return message or error.
4. readJson - read and parse json file and return its contents.
5. createDir - create folder and return message or error.
6. removeDir - remove folder and return message or error.
7. writeFile - write data to file and return message or error. 

To write file, first you have to create a variable or object - data

let data = 'some text'

##### or
    let data = {
    	name: "jack",
    	age: "16",
    }

##### Then send:
    {
        "method": "writeFile",
        "path": "exemple",
        "name": "exemple.json",
        "data": data
    }

if you got message like 'Can not read file' and error, look for errors of the fs.

##### exemple of err:
    {
        "message": "Can not create directory",
        "err": {
            "errno": -17,
            "code": "EEXIST",
            "syscall": "mkdir",
            "path": "/home/glab/Рабочий стол/Glab/jarvis/DB/1.0/DB/db/file_sistem/exemple"
        }
    }
