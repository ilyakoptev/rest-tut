const express = require('express')

const app = express()

// routes

app.get('/', (req, res) => {
    res.send('We are on home')
})

// how to we start listening to teh server 

app.listen(3000)