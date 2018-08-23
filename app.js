const express = require('express')

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



app.listen(7979, () => console.log('Example app listening on port 7979!'))
