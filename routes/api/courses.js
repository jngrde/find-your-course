const express = require('express')
const router = express.Router()

const Course = require('../../models/Course')

router.post('/', (req, res) => {
  const newCourse = {
    title: req.body.title,
    provider: req.body.provider,
    number: req.body.number,
    duration: req.body.duration,
    times: req.body.times,
    costs: req.body.costs,
    teacher: req.body.teacher,
    place: req.body.place,
    text: req.body.text,
  }
  Course.create(newCourse)
    .then(data => {
      res.json(data)
    })
    .catch(err => console.log(err))
})

router.get('/getAll', (req, res) => {
  Course.find()
    .then(data => res.json(data))
    .catch(err => console.log(err))
})
router.get('/:id', (req, res) => {
  Course.find({ _id: req.params.id })
    .then(data => res.json(data))
    .catch(err => console.log(err))
})
router.delete('/:id', (req, res) => {
  Course.findByIdAndRemove(req.params.id)
    .then(data => res.json(data))
    .catch(err => console.log(err))
})
router.patch('/:id', (req, res) => {
  Course.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(data => res.json(data))
    .catch(err => console.log(err))
})

router.post('/login', (req, res) => {
  User.find({username: req.params.username}).exec().then().catch(err => console.log(err))
})
module.exports = router
