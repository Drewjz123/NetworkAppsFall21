// To create web server, we need to use the HTTP core module

const http = require('http');

//create server; 

const server = http.createServer();

//register event listeners for incoming requests;

server.on('request', (req,res) =>{
//code to handle the incoming requests
});

// req is an object of the http.IncomingMessage  class
// res is an object of the http.ServerResponse

//bind the server to a particular port number; 

// This is done as every application which needs to be connected to a network has a port number assigned, which will let the servers know which application the message needs to go to.


server.listen(port, host, ()=>{
// operation after succesful binding;
});