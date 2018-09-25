const mongoose = require('mongoose')

const CourseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  provider: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  costs: {
    type: String,
    required: true,
  },
  times: {
    type: String,
    required: true,
  },
  teacher: {
    type: String,
    required: true,
  },
  place: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  bookmarked: {
    type: Boolean,
    required: true,
    default: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
})

module.exports = Course = mongoose.model('course', CourseSchema)
