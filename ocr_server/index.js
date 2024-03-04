const express = require('express')
const cors = require('cors')
const multer = require('multer')
const fs = require('fs')

const app = express()
const PORT = 4000

const storage = multer.diskStorage({
    destination: "./uploads/",
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage });

app.use(cors())

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post("/upload/file", upload.single("image"), async (req, res) => {
    console.log(req.file);
    let output = await recognize("./uploads/" + req.file.originalname)

    console.log(output)
    
    res.send({ 
        message: "Image uploaded successfully!",
        output: output 
    });
});

app.post("/upload/dataURL", upload.any(), async (req, res) => {
    // console.log(req.body.imageSrc)
    var string = req.body.imageSrc
    var regex = /^data:.+\/(.+);base64,(.*)$/;

    var matches = string.match(regex);
    var ext = matches[1];
    var data = matches[2];
    var buffer = Buffer.from(data, 'base64');

    fs.writeFile('./uploads/data.' + ext, buffer, function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log('The file has been saved!');
        }
    });

    var output = await recognize('./uploads/data.' + ext)
    res.send({ 
        message: "Image uploaded successfully!",
        output: output 
    });
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})

async function recognize(imgPath) {
    const Tesseract = require('tesseract.js');

    let output = ""

    await Tesseract.recognize(
    
        imgPath,
        
        'eng',
        { logger: m => console.log(m) }
        ).then(({ data: { text } }) => {
            console.log(text);
            output = text
    })

    return output
}