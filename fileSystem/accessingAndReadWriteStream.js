const fs=require("fs");






try {
    fs.accessSync("text.txt", fs.constants.W_OK);
    console.log("✅ Write access GRANTED");  // No error = access OK
} catch (err) {
    console.log("❌ Write access DENIED");    // Error = no access
    console.log("Error code:", err.code);     // ENOENT, EACCES
}

const myfile=fs.createWriteStream("sahil.txt");
myfile.write("hi from me its a small chunk");

const append = fs.createWriteStream('sahil.txt', { flags: 'a' });
append.write('\nMore data\n');  

const read=fs.createReadStream("sahil.txt","utf-8");
read.on("data",(chunk)=>{
    console.log(chunk);
})
