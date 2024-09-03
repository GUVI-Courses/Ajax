const http = require('http');
const express = require('express');
const authenticate = require('./authenticate')

const app = express();

// set up the node server
const server = http.createServer(app);

server.listen(3001,'localhost',()=>{
    console.log('Server is listening at port 3001....')
});

app.get('/',(req,res)=>{
    res.statusCode=200;
    res.end('Node is used for basic auth');
})

//middleware
app.use(authenticate)
app.get('/guvi',(req,res)=>{
    res.statusCode=200;
    res.end('Guvi is the best training platform');
})