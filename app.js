const config = require('config')
const express = require('express')
const fs = require('fs')

const app = express()


app.use(require('./Controller'))

//Error Handler - MiddleWare
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})
//Log Handler - MiddleWare
app.use(logErrors)
function logErrors (err, req, res, next) {
  console.error(err.stack)
  next(err)
}

app.listen(config.port, () => console.log(`Example app listening on port ${config.port}!`))
