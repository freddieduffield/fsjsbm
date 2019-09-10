const https = require('https');
const crypto = require('crypto')
const fs = require('fs');
 
const start = Date.now();

function doRequest() {   
    https
        .request('http://www.google.com', res => {
        res.on('data', () => {})
        res.on('end', () => {
            console.log(Date.now() - start);
        });
    }).end();
}

function doHash() {
    crypto.pbkdf2('a', 'b', 1000 , 512, 'sha512', () => {
        console.log('1:', Date.now() - start)
    })
}

doRequest();

fs.readFile('multitask.js', 'utf8', () => {
    console.log('FS:', Date.now() - start);
})

doHash();
