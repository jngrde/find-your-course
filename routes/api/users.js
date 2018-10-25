const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
require('dotenv').config()

const User = require('../../models/User')
const secret = process.env.SECRET
const withAuth = require('../../middleware')

router.post('/register', function(req, res) {
  const { name, password } = req.body
  const user = new User({ name, password })
  user.save(function(err) {
    if (err) {
      res.status(500).send('Error registering new user please try again.')
    } else {
      res.status(200).send('Welcome to the club!')
    }
  })
})

router.post('/authenticate', function(req, res) {
  const { name, password } = req.body
  User.findOne({ name }, function(err, user) {
    if (err) {
      console.error(err)
      res.status(500).json({
        error: 'Internal error please try again',
      })
    } else if (!user) {
      res.status(401).json({
        error: 'Incorrect email or password',
      })
    } else {
      user.isCorrectPassword(password, function(err, same) {
        if (err) {
          res.status(500).json({
            error: 'Internal error please try again',
          })
        } else if (!same) {
          res.status(401).json({
            error: 'Incorrect email or password',
          })
        } else {
          const payload = { name }
          const token = jwt.sign(payload, secret, {
            expiresIn: '1h',
          })
          res.cookie('token', token, { httpOnly: true }).sendStatus(200)
        }
      })
    }
  })
})

router.get('/admin', withAuth, function(req, res) {
  res.send('The password is potato')
})
module.exports = router
