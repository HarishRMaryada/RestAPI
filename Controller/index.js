const express = require( 'express')
const router = express.Router()
router.use(function (req, res, next) {
  console.log('controller')
    next()
})
module.exports = router
