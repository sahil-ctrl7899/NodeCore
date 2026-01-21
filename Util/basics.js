const util=require("util");
const formatted = util.format("Hello %s, you are %d years old.", "Alice", 30);
console.log(formatted); // "Hello Alice, you are 30 years old."


const obj = { name: 'Bob', age: 28 };
console.log(util.inspect(obj, { showHidden: false, depth: null }));


//promisify
const fs = require('fs');
const readFile = util.promisify(fs.readFile);

async function load() {
  const data = await readFile('file.txt', 'utf8');
  console.log(data);
}
load();

//callbackify
const asyncFn = async () => "done";
const callbackFn = util.callbackify(asyncFn);
callbackFn((err, result) => {
  console.log(result); // "done"
});


function oldFunc() { /* … */ }
const newFunc = util.deprecate(oldFunc, "oldFunc() is deprecated.");
newFunc();
