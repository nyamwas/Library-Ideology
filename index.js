const http = require('http')
const url = require('url')
const fs = require('fs')

http.createServer((req, res) => {
	fs.readFile("." + url.parse(req.url, true).pathname, (err, data) => {
	if(err) console.log(err)	
	res.end(data)
	})
}).listen(4001)
