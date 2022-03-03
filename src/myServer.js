const express = require('express')
const app = express()
const port = process.env.PORT || 4001

app.post('/', (req,res) => {
    let username = req.body.userName
//    firebase.send(username)
//  let result = firebase.get()
    res.status(204).send = username
})