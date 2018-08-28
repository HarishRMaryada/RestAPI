const bodyParser = require('body-parser')
const config = require('config')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const express = require('express')
const events = require('events')
const fs = require('fs')
const logger = require('morgan')
const mongoose = require('mongoose')
const path = require('path')

require('app-module-path').addPath(__dirname)


process.on('uncaughtException',(err)=>{
  console.log(err.stack)
  if(err && err.message){
      process.exit(1)
      console.log(err.message)
  }
})



const eventEmitter = new events.EventEmitter()

// Database Connections
var EventTest = () =>{
  console.log('Test Events');
}
eventEmitter.on('scream', EventTest);
eventEmitter.emit('scream');


const app = express()

app.use(cors())

app.use(logger('dev'))
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//parse cookie
app.use(cookieParser())

var start = function(){
  app.use(require('./Controller'))
}
start()

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
