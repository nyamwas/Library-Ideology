const express = require('express')
const { Client } = require('pg')
const port = process.env.PORT || 4000
const app = express()
const client = new Client({
	host: 'localhost',
 	port: '5432',
	user: 'postgres',
	database: 'mydb',
	password: 'secret'
})
app.use(bodyparser.urlencoded({ extended: false }))
app.use(express.json())
app.use(multer().none())

app.get('/:id', (req, res) => {
	client.query(`SELECT name FROM items WHERE id = ${req.params.id}`, (err, result) => {
		if(err) console.log(err.message)
		res.send(result.rows)
	})
})


client.connect((err) => {
	if(err) console.log(err)
	console.log(`Connected!`)
})
app.listen(port, (err) => {
  if (err) throw err
  console.log(`listening on port ${port}`)
})
