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



app.post('/register', (req, res) => {
  let userName = req.body.userName
  let userPass = req.body.userPass
  client.query(`INSERT INTO demo (username, userpass) VALUES ('${userName}','${userPass}')`)
})

app.listen(port, () => { console.log(`Listening on port ${port}`) })


client.connect(() => { console.log(`Connected!`) })


  
