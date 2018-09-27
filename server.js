const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const courses = require('./routes/api/courses')
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  )
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
  res.setHeader('Access-Control-Allow-Credentials', true)
  next()
})

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api/courses', courses)

mongoose
  .connect('mongodb://jgrade:kF88Wc7i6DIZ6C@ds161700.mlab.com:61700/kursmelder')
  .then(() => console.log('connected'))
  .catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Axel ist der Beste!')
})
app.listen(5000, () => {
  console.log('Server works')
})
