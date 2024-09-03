let http = require('http')
let emails=['anees@gmail.com','rohan@gmail.com','rahul@gmail.com','guvi@gmail.com']

http.createServer((req,res)=>{
    // console.log('Server Started');
    let path=req.url;
    // console.log(path)
    res.writeHead(200,{"Content-Type":"text/plain",'Access-Control-Allow-Origin':'*'});
    if(path!=="/"){
        let email=path.slice(1);
        if(emails.indexOf(email)!==-1){
            res.end(`Eligible ${email}`)
        }
        else{
            res.end(`Not Eligible ${email}`)
        }
    }
    else{
        res.end("Please Enter Email for Eligibility")
    }
}).listen(8001)