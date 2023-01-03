/* Date created: 12th




   Date modified: 3rd 
*/





const http = require('http')
const url = require('url')

const T = require('./T.js')

const assert = require('assert')
const async_hooks = require('async_hooks')

const bodyParser = require('body-parser')











http.createServer("."+ bodyParser.parse(url.params, true).pathname, (req, res) => {
 res.end('Hello')
}).listen(4000)



     

