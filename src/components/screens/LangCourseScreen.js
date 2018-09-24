import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CourseCard from '../CourseCard'

export default class LangCourseScreen extends Component {
  static propTypes = {
    courses: PropTypes.arrayOf(PropTypes.object),
    onToggleBookmark: PropTypes.func.isRequired,
  }

  createDescription(course) {
    return `${course.duration} (${course.times})`
  }

  render() {
    const { onToggleBookmark, courses } = this.props
    return (
      <div>
        {courses.map((course, index) => (
          <CourseCard
            key={index}
            course={course}
            onClick={() => onToggleBookmark(index)}
          />
        ))}
      </div>
    )
  }
}
