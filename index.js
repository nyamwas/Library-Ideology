/* Date created: 12th


   Date modified: 17th
*/





const http = require('http')
const url = require('url')

const bodyParser = require('body-parser')






http.createServer("."+ bodyParser.parse(url.params).pathname, (req, res) => {
 res.end('Hello')
}).listen(4000)



     

