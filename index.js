require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('hey shii')
})

app.get('/login' , (req, res) => {
    res.send('pathakshivi2003@gmail.com')
})


app.listen(process.env.PORT , () => {
    console.log(`app is running on ${port}`);
})


