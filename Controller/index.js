const express = require( 'express')
const router = express.Router()

const _ = require('lodash')
const filesystem  = require('fs')
const path = require('path')
// router.use(function (req, res, next) {
//     next()
// })
//
// router.use(function (err, req, res, next) {
//   console.error(err.stack)
//   res.status(500).send('Something broke!')
// })


// function getCurrentVersionFolder(srcpath){
//   return filesystem.readdirSync(srcpath).filter(function (file) {
//         return filesystem.statSync(path.join(srcpath, file)).isDirectory();
//     });
// }


findFile = function(dir)
{
  let dirs = filesystem.readdirSync(dir)
  let files = _.forEach(dirs,function(file){
      console.log(file);
  })
    return files
};
var list = findFile(__dirname);


var controller = function(){

  //let dirs = findFile(__dirname)
}

module.exports = controller
