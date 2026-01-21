const http=require("http");
const fs=require("fs");


const app=http.createServer((req,res)=>{
    fs.appendFile("log.txt",`${Date.now()} url :${req.url} \n`,(err)=>{
        console.log(err);
    })
    switch(req.url){
        case "/": res.end("Home Page");
        break;
        case "/about": res.end("About Page");
        break;
        case "/insert" : res.end("Insert Page");
        break;
        case "/product" : res.end("Products Page");
        break;
        default : res.end("404 Not Found!!");
        break;
    }
    // console.log(req.headers);
    // res.end("hello");
});
app.listen(8000,()=>{console.log("server is started");
});