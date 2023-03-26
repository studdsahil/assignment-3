const http = require('http');
const fs = require('fs');

const server = http.createServer();

// Custom name
let yourName = "Sahil"

//For writing the data to html file
const wstream = fs.createWriteStream('index.html');

wstream.write(`<h1> Hello World </h1><p> This is ${yourName}... </p>`, () => console.log('File has written'));

// Error handling
wstream.on('error', () => console.log("Couldn't write the file, something went wrong"))

wstream.end();

server.on('request', (req, res) => {

    // Reading the file
    const rstream = fs.createReadStream('index.html', { encoding: 'utf-8' });

    // Error handling
    rstream.on("error", (err) => {
        res.end("There is something wrong while reading the file");
    });


    rstream.pipe(res);
    


server.listen(5000, () => console.log('Server is up on 5000'))