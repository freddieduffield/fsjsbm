process.env.UV_THREADPOOL_SIZE = 1;
const cluster = require('cluster')

// is the file being executed in master mode? 
if (cluster.isMaster) {
    // cause index.js to executed *again* but in child mode
    cluster.fork()
}else {
    // I'm child Im going to act like a server and nothing else. 
    const express = require('express'); 
    const app = express();
    const crypto = require('crypto')
    
    // function doWork(duration) {
    //     const start = Date.now();
    //     while(Date.now() - start < duration) {}
    // }
    
    app.get('/', (req, res) => {
    crypto.pbkdf2('a', 'b', 1000 , 512, 'sha512', () => {
    res.send('Hi there');
}) 
        // doWork(5000);
    });

    app.get('/fast', (req, res) => {
        res.send('it was fast');
    })
    
    app.listen(3000);
}

