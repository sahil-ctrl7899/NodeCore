const express = require("express");
const fs = require("fs");
const multer = require('multer')


const app = express();

app.use(express.urlencoded({ extended: true }));

const upload = multer({ dest: 'uploads/' });

//for custom filename or orignal filename
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/");
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.originalname); // keep original name
//   }
// });

app.get("/", (req, res) => {
    fs.readFile("formData.txt", "utf-8", (err, result) => {
        if (err) { console.log(err); return res.send("Cannot read file.."); }
        else {
            console.log(result);
            res.setHeader("Content-Type", "text/plain");
            return res.end(result);
        }
    })

});

app.post("/", (req, res) => {
    console.log(req.body);
    if (
        req.body.Name === undefined ||
        req.body.Class === undefined ||
        req.body.Rollno === undefined
    ) {
        return res.status(400).json({
            error: "Name, Class and Rollno are required"
        });
    }
    fs.appendFile(
        "formData.txt",
        `\n${Date.now()} REQ-> ${req.method} DATA -> Name-${req.body.Name}, Class-${req.body.Class}, Rollno-${req.body.Rollno}\n`,
        (err) => {
            if (err) {
                console.log(err);
                return res.status(500).send("Error in appending data...");
            }

            return res.end("Data is Saved...");
        }
    );
});

app.post('/file', upload.single("file"), (req, res) => {
    console.log(req.file);
    fs.readFile(req.file.path, "utf-8", (error, result) => {
        if (error) { console.log("Failed to read file.."); return res.status(500).end("Failed to read file.."); }

        res.setHeader("Content-Type", "text/plain");
        console.log("uploaded file readed successfully..")
        return res.end(result);

    })
});

app.post('/fileChunk', upload.single("file"), (req, res) => {
    console.log(req.file);

    const reader = fs.createReadStream(req.file.path, {
        encoding: "utf-8",
        highWaterMark: 16 // 16 bytes per chunk (small chunks)
    });

    reader.on("data", (chunk) => {
        console.log("Chunk:", chunk);
        res.write(chunk); // send chunk to client
    });

    reader.on("end", () => {
        res.end("\n\n--- File streaming completed ---");
    });

    reader.on("error", (err) => {
        console.log(err);
        res.status(500).end("Error reading file");
    });
});

app.listen(8000, () => {
    console.log("server is running...");
});
