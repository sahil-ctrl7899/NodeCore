const fs=require("fs");



fs.exists("text3.txt",(res)=>{
console.log(res);
});

const res=fs.readdirSync("../fileSystem");
console.log(res);

console.log(fs.statSync("text.txt"));
