const fs=require("fs");




// fs.writeFileSync("text.txt","hi from file.js ..what are you doing");

// fs.writeFile("text2.txt","hii bhaii",(err)=>{
//     console.log(err);
// });

// const result=fs.readFileSync("text.txt","utf-8");//it returns directly
// console.log(result);

// //it is a void function it will not return but it give a err and res in callback that we can use
// fs.readFile("text2.txt","utf-8",(err,res)=>{
//     console.log(res);
// });

// //buffer as output default..
// fs.readFile("text2.txt",(err,res)=>{
//     console.log(res);
// });

const buf = Buffer.from('hello');
console.log(buf);           // <Buffer 68 65 6c 6c 6f>
console.log(buf.toString()); // 'hello'