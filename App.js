const express = require('express')
const bodyParser = require('body-parser')
const port = process.env.PORT || 4000
const app = express()
let users = new Array()
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/register', (req, res) => {
	let userName = req.body.userName
	let userPass = req.body.userPass
	users.push({ userName, userPass})
	console.log(`Username: ${userName}, Userpass: ${userPass}`)
	res.sendStatus(204)
})
app.post('/login', (req, res) => {
	let userName = req.body.userName
	let userPass = req.body.userPass
	let existingUserName
	let existingUserPass
	for(let i = 0; i < users.length; i++){
		if(userName == users[i].userName){
			existingUserName = true
		} else {
			existingUserName = false
		}
		if(userPass == users[i].userPass)
	}

	if(existingUserName && existingUserPass){
		console.log(`Username: ${userName}`)
		res.sendStatus(204)
	}
	else{
		console.log(`Invalid`)
		res.sendStatus(300)
	}
})
app.listen(port, (err) => {
  if (err) throw err
  console.log(`listening on port ${port}`)
})

