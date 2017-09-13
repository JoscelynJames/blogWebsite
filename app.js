const express = require('express')
const app = express()
const port = process.env.PORT || 3210
const routes = require('./routes/routes.js')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dontenv').config()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(routes)

app.use(function (req, res, next) {
  const err = new Error('not found')
  err.status = 404
  next(err)
})

app.listen(port, () => {
  console.log('Listening on port ' + port)
})
