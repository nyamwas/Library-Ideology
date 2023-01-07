const express = require('express')
const port = process.env.PORT || 4001
const app = express()

app.post('/FirstAid', (req,res) => {
    let userName = req.body.userName
    let userPhone = req.body.userPhone
    let userMedication = req.body.userMedication
    res.status(204).send(`${userName},${userPhone},${userMedication}`)
})