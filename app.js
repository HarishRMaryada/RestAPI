const config = require('config')
const express = require('express')
const fs = require('fs')

const app = express()


app.use(require('./Controller'))

app.get('/', function (req, res) {
  res.send('Controller Aded')
})



app.listen(config.port, () => console.log(`Example app listening on port ${config.port}!`))
