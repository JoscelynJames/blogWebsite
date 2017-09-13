const express = require('express')
const app = express()
const port = process.env.PORT || 3210
const routes = require('./routes/routes.js')
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static('/viwes/landing'))

app.use(routes)

app.listen(port, () => {
  console.log('Listening on port ' + port)
})
