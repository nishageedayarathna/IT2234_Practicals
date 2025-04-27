(01) asynpro.js

fs.readFile(...) --> Starts reading the file (asynchronously).

console.log("File reading is done...")	--> Runs immediately after the read starts.

console.log(data) -->	Runs later, after file is successfully read.

console.error(err) -->	Runs if there's a problem reading the file.

![filereading(1)](https://github.com/user-attachments/assets/a0a36a07-02b2-47f0-bf2c-8dba57119b8d)

(02)promise.js

1. const fs = require('fs').promises;
   
This imports the Promise-based version of Node.js's File System (fs) module.

Now you can use fs.readFile() which returns a Promise, instead of using a callback.

2. const readFile = (filepath) => { ... }
   
This is a function that takes a file path as input (filepath).

However, it does not use that parameter.

It always reads from 'file1.txt' (hardcoded), not the input file.

3. return fs.readFile('file1.txt', 'utf8');
   
This line starts reading 'file1.txt' in UTF-8 encoding.

It returns a Promise, which will:

resolve with the file content if successful,

or reject with an error if it fails.

4. readFile('file.txt')...
   
You call readFile() with 'file.txt', but again — it still reads 'file1.txt' because of the hardcoded path.

5. .then((data) => { console.log(data); })
   
If the file is read successfully, it logs the file content.

6. .catch((err) => { console.error(err); })
   
If there's an error (e.g. file not found), it catches and logs the error message.

This .catch() is useful especially when dealing with multiple asynchronous file reads, since all errors can be handled in one place.

![promise(2)](https://github.com/user-attachments/assets/1602888d-7a5b-4dc2-8853-0612762c9355)

![promise(3)](https://github.com/user-attachments/assets/70fb9341-d086-44d2-89c9-55ae4b762e98)

(03)asynawait.js

async/await	--> Makes asynchronous code look more like regular sync code.

fs.promises.readFile -->	Reads a file and returns a promise with its content.

Promise.allSettled -->	Waits for all promises to settle (succeed or fail), without short-circuiting on errors.

result.status -->	Tells if the promise was fulfilled or rejected.

result.value / result.reason -->	Contains the result (file content) or the error (why it failed).

![assynawait(4)](https://github.com/user-attachments/assets/988c64d6-f698-41eb-9d7a-f5baee125208)

![assynawait(5)](https://github.com/user-attachments/assets/898bdacd-1ba0-4cd4-bce7-9b13cefe1f33)

![6](https://github.com/user-attachments/assets/b99ea91b-e1a2-47ca-ba3e-bfa640d7dac0)

![7](https://github.com/user-attachments/assets/7da506c5-1cdd-47ab-b226-3835ddc94cd7)





