const { log } = require("console");
const path=require("path");

console.log(__dirname);
console.log(__filename);

const filepath=path.join("Student","RollNo","Marks.txt");
console.log(filepath);

const res=path.resolve(filepath);//abs path
console.log(res);

const res1=path.basename(filepath);
console.log(res1);


const res2=path.dirname(filepath);
console.log(res2);

const res3=path.relative(__dirname,"core.js");
console.log(res3);

const res4=path.parse(filepath);
console.log(res4);

