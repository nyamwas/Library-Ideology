const express = require('express')
const app = express()
const port = process.env.PORT || 4001

app.post('http://localhost:3000/login-form', (req,res) => {
    let username = req.body.userName
    let password = req.body.userPass
    console.log(`${username}`)
    res.send(`${username}, ${passkey} added`)
})

app.listen(port, () => {console.log(`listening on port ${port}`)})
