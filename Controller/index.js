const express = require( 'express')
const router = express.Router()
router.use(function (req, res, next) {
    next()
})

router.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

module.exports = router
