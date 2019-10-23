
    const express = require('express'); 
    const app = express();
    const crypto = require('crypto')
    

    app.get('/', (req, res) => {
        crypto.pbkdf2('a', 'b', 1000 , 512, 'sha512', () => {
            res.send('Hi there');
        }) 
    });

    app.get('/fast', (req, res) => {
        res.send('it was fast');
    })
    
    app.listen(3000);
}

