const express = require('express')

const app = express()
    // middlewares

app.use('/posts', () => {
    console.log('This is middleware running')
})

// routes

app.get('/', (req, res) => {
    res.send('We are on home')
})

app.get('/posts', (req, res) => {
    res.send('We are on posts')
})

// how to we start listening to teh server 

app.listen(3000)