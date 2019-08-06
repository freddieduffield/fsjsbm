const express = require('express')
let app = express()

app.all('*', (req, res) => {
    res.send('Welcome to hell')
})

app.listen(3000, 
    () => console.log('Open at localhost:3000')    
)