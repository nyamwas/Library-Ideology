/*
    Date created: 23 Feb
    Daate modified: 24 Feb
*/

const express = require('express')

const bodyParser = require('body-parser')

const app = express()
/*HTTP
    method: post
    param: req, res, route
    output: monthlyAllowance
*/
app.post('/', (req,res) => {

    let varAllowance = Number(req.body.varAllowance)
    let varB = Number(req.body.varB)
    res.status(204).send = varAllowance + varB
})

app.listen(`listening on port 4000`, process.env.PORT || 4000)
