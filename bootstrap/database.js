const config = require('config')
const events = require('events')
const mongoose = require('mongoose')

const uri = 'mongodb://localhost:27017/dbname'

const options = {
  socketTimeoutMS: 0,
  keepAlive: true,
  reconnectTries: 30
};


mongoose.connect(uri, options , (error)=>{
  console.log(error);
})
