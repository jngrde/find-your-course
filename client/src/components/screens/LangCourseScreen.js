import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CourseCard from '../CourseCard'
import styled from 'styled-components'

const StyledCourseOverview = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-gap: 1rem;
  overflow: scroll;
`
export default class LangCourseScreen extends Component {
  static propTypes = {
    courses: PropTypes.arrayOf(PropTypes.object),
    onToggleBookmark: PropTypes.func.isRequired,
    loading: PropTypes.bool,
    onFetchCourses: PropTypes.any,
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
        <StyledCourseOverview>
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              course={course}
              onClick={() => onToggleBookmark(index)}
            />
          ))}
        </StyledCourseOverview>
      )
    }
  }

  render() {
    return <React.Fragment>{this.renderCourses()}</React.Fragment>
  }
}
