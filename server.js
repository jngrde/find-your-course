const express = require('express')
require('dotenv').config()
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const courses = require('./routes/api/courses')
const users = require('./routes/api/users')
const withAuth = require('./middleware')

const url = process.env.MONGO_DB_URI

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
app.use(cookieParser())

app.use('/api/courses', courses)
app.use('/api/users', users)

mongoose
  .connect(url)
  .then(() => console.log('connected'))
  .catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Server works')
})
app.get('/checkToken', withAuth, function(req, res) {
  res.sendStatus(200)
})
app.listen(process.env.PORT, () => {
  console.log('Server works')
})
