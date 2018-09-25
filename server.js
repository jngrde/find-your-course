const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const courses = require('./routes/api/courses')

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
app.listen(3000, () => {
  console.log('Server works')
})
