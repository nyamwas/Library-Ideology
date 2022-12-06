const http = require('http')

const A = require('./A.js')
http.createServer((req, res) => {

  let a = new A([0, 1, 2], 'y')
  res.end(a.getX(req.params.id))
}).listen(4000)

console.log(`listening on port 4000`)
 
