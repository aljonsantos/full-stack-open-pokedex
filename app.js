const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.get('/health', (req, res) => {
  res.send('ok')
})

app.get('/new-feature', (req, res) => {
  res.send('this is a new updated feature')
})

app.get('/more-feature', (req, res) => {
  res.send('more feature: patch 1')
})

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server started on port ${PORT}`)
})

module.exports = app