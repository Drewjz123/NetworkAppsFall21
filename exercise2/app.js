const http = require('http'); // importing the http module 
const fs = require('fs');       // importing the file module    
const host = 'localhost';       // assigning the host name
const port = 8080;              // assigning the port number

let path = './';

const server = http.createServer((req,res) =>{
    res.statusCode = 200;                           // When there is no error status will be 200
    res.setHeader('Content-Type','text/html');
    res.statusMessage = 'OK';
    
    if(req.url === '/about'){                       //if else for different url requests
        path = path + 'views/about.html';
    }
    else if(req.url === '/contact'){
        path = path + 'views/contact.html';
    }
    else {
        req.statusCode = 404;
        path = path + 'views/404.html';
    }

    fs.readFile(path, (err, data)=>{
        if(err){                                // error handling and writing data if no error 
            console.log(err);
            res.end();
        }else{
            res.write(data);
            res.end();
        }
    })

}); // creating a server



server.listen(port, host, () =>{      // This is used to bind the server with the ports. 
    console.log('The server is running on port', port);
})

