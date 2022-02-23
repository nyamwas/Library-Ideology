/*
    Date created: 23 Feb
    Daate modified: 23 Feb
*/
//express
const express = require('express')
//parse variable before arithmetic operations
const bodyParser = require('body-parser')
//instance
const app = express()
/*HTTP
    method: post
    param: req, res, route
    output: monthlyAllowance
*/
app.post('/', (req,res) => {
//0 or more inputs
    let varAllowance = Number(req.body.varAllowance)
    let varB = Number(req.body.varB)
    res.status(204).send = varAllowance + varB
})
//1 or more output
app.listen(`listening on port 4000`, process.env.PORT || 4000)
