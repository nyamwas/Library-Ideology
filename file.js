/* Date created: 17th
   Date modified: 17th
*/
const url = require('url')
const http = require('http')
const port = 4000
const host = 192.168.0.1
http.createServer(function (req, res){
  const a = url.parse(req.url).pathname
  res.write(a)
  res.write(req)
  res.write(res)
  }).listen(port, () => console.log(req)
}

