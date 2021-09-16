const http = require('http');
const fs = require('fs');
const port = 8084;
const host = 'localhost';
const server = http.createServer( (req,res) => {
 //console.log(req);
 // console.log('method', req.method);
 // console.log('url', req.url);
 // console.log('header', req.headers);

 res.statusCode = 200;
 res.statusMessage= 'OK';
 res.setHeader('Content-Type', 'text/html');
fs.readFile('./ProjectProtoype/index.html', (err,data) => {
    if(err){
        console.log(err);
        res.end();
    }
    else{
        res.write(data);
        res.end();
    }
});
// res.setHeader('Content-type', 'text/html');
 //res.write('<p><h1>HelloWorld</h1></p>');
 //res.end();
});


server.listen(port, host, () =>{
    console.log('The server is running on port', port);
});