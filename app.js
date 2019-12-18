const express = require('express')

const app = express()
    // middlewares

// app.use('/posts', () => {
//     console.log('This is middleware running')
// })
// mongodb+srv://rest-admin:<password>@cluster0-7lt25.mongodb.net/test
// routes

app.get('/', (req, res) => {
    res.send('We are on home')
})

app.get('/posts', (req, res) => {
    res.send('We are on posts')
})

// how to we start listening to teh server 

app.listen(3000)