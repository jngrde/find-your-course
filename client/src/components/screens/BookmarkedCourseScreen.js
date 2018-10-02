import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CourseCard from '../CourseCard'

export default class BookmarkedCourseScreen extends Component {
  static propTypes = {
    courses: PropTypes.arrayOf(PropTypes.object),
    onToggleBookmark: PropTypes.func.isRequired,
    loading: PropTypes.bool,
    onFetchCourses: PropTypes.any,
    bookmarked: PropTypes.bool,
  }
  componentDidMount() {
    this.props.onFetchCourses()
  }

  createDescription(course) {
    return `${course.duration} (${course.times})`
  }

  renderCourses() {
    const { onToggleBookmark, courses, loading } = this.props

    if (!loading) {
      return (
        <React.Fragment>
          {courses
            .filter(course => course.bookmarked === true)
            .map((course, index) => (
              <CourseCard
                key={index}
                course={course}
                onClick={() => onToggleBookmark(index)}
              />
            ))}
        </React.Fragment>
      )
    }
  }

  render() {
    return <React.Fragment>{this.renderCourses()}</React.Fragment>
  }
}
