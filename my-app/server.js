const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = process.env.PORT || 4000

const { Client } = require('pg')
const client = new Client({
  user: 'root',

  host: 'localhost',

  database: 'demo',
  password: 'secret',
  port: '5432'

})


app.use(bodyParser.urlencoded({extended: false}))
app.post('/register', (req, res) => {
  let userName = req.body.userName
  let userPass = req.body.userPass


  client.query(`INSERT INTO users (username varchar(20), userpass varchar(20))`, (err, result, fields) => {

  if (err) throw err
  }) 


  res.sendStatus(204)

})
app.post('/login', (req, res) => {
  let userName = req.body.userName
  let userPass = req.body.userPass
  
  client.query(`SELECT * FROM users`, (err, result, fields) => {




    if (err) throw err
    console.log(result.rows)
  })

 
  res.sendStatus(204)
})
app.post('/billing', (req, res) => {
  let userCard = req.body.userCard
  let userPin = req.body.userPin
  let userExpiry = req.body.userExpiry
  res.sendStatus(204)


}) 
app.post('/checkout', (req, res) => {

  let item = req.body.item
  let price = req.body.price
  let quantity = req.body.quantity

  res.sendStatus(204)

})

app.post('/search', (req, res) => {

  let searchItem = req.body.searchItem
  client.query(`SELECT * FROM demo WHERE username = '${searchItem}'`, (err, result, fields) => {

  if (err) throw err
  console.log(result.rows)
  })
})


app.listen(port, (err) => { 


 if (err) throw err
 console.log(`listening on port ${port}`)
})

client.connect((err) => {
  

  if (err) throw err
  console.log(`connected on port ${client.port}`)


}) 
