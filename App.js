const express = require('express')
const port = process.env.PORT || 4000
const app = express()
const { Client } = require('pg')
const bodyParser = require('body-parser')

const client = new Client({
  host: 'localhost',
  user: 'postgres',
  password: 'secret',
  port: '5432'

})






app.get('/login', (req, res) => {



  res.render(__dirname + '/index.html')
})

app.get('/register', (req, res) => {

  res.render(__dirname + '/register.html')
})

app.post('/billing ', (req, res) =>{
  let qty=req.body.qty
  let price = 100
  client.query(`INSERT INTO billing ( qty, price) VALUES ('${qty}', '${price}')`) 
  client.query(`SELECT * FROM billing`, (err, result, fields) => {
    if (err) throw err
    console.log(result.rows) 



  })




  res.sendStatus(204)
})
app.post('/register', (req, res) => {
  let userName = req.body.userName
  let userPass = req.body.userPass
  client.query(`INSERT INTO demo (username, userpass) VALUES ('${userName}','${userPass}')`)
})

app.listen(port, () => { console.log(`Listening on port ${port}`) })


client.connect(() => { console.log(`Connected!`) })


  
