import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CourseCard from '../CourseCard'

export default class LangCourseScreen extends Component {
  static propTypes = {
    courses: PropTypes.arrayOf(PropTypes.object),
  }

  createDescription(course) {
    return `${course.duration} (${course.times})`
  }

  render() {
    return (
      <div>
        {this.props.courses.map((course, i, toggleBookmark) => (
          <CourseCard key={i} course={course} onClick={toggleBookmark} />
        ))}
      </div>
    )
  }
}
