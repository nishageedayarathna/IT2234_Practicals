const{createServer}= require('node:http'); // import the required module

//define server configuration
const localhost='127.0.0.1'; //set the hostname
const port=3000; //set the port number

//create the server
const server = createServer((req,res) =>{
    res.statusCode=200; // set reponse type
    res.setHeader('Content-Type','text/plain');
    res.end("Hello node JS");
});

//start the server
server.listen(port,localhost,()=>{
    console.log(`Running on:  ${localhost}:${port}`);
});