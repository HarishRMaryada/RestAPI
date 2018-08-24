const express = require('express')
const config = require('config')

const app = express()

var requestTime = function (req, res, next) {
  req.requestTime = Date.now()
  next()
}

app.use(requestTime)

app.get('/', function (req, res) {  
  var data = ""+req.requestTime
  res.send(data)
})



app.listen(config.port, () => console.log(`Example app listening on port ${config.port}!`))
