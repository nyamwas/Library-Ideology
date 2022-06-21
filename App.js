const express = require('express')
const bodyParser = require('body-parser')
const { Client } = require('pg')
const port = process.env.PORT || 4000
const app = express()
const client = new Client({
	host: 'localhost',
	user: 'postgres',
	password: 'secret',
	database: 'postgres',
	port: '5432'
})
app.use(bodyParser.urlencoded({ extended: false }))


app.post('/login', function(req, res) {
	let userName = req.body.userName
	console.log(`${userName}`)
	res.sendStatus(204)
})
app.post('/checkout', (req,res) => {
	let itemName = req.body.itemName
	let itemPrice = req.body.itemPrice
	client.query(`INSERT INTO checkout (id, name, price) VALUES ('${Math.floor(Math.random())}','${itemName}', '${itemPrice}')`, (err, result, fields) => {
		if (err) throw err
		res.sendStatus(204)
	})
	res.json()
})

client.connect((err) => {
	if (err) throw err
	console.log(`connected!`)
})


app.listen(port, (err) => {
  if (err) throw err
  console.log(`listening on port ${port}`)
})
