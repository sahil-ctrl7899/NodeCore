const fs=require("fs");




fs.appendFile("text.txt","this is coming from append function \n",(err)=>{
    console.log(err);
});

fs.appendFileSync("text2.txt","hi it is from sync append\n");

console.log(fs.existsSync("text.txt"));