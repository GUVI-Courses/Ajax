const { error } = require("console");

function authenticate(req,res,next){
    // get the authorization data from browsers request
    const authheader = req.headers.authorization;
    console.log(authheader);
    if(!authheader){
        let err= new Error('you are not authenticated...');
        res.setHeader("WWW-Authenticate","Basic");
        err.status=401;
        next()
    }
    next();
}

module.exports=authenticate;