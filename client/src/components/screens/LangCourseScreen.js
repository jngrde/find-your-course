import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CourseCard from '../CourseCard'
import styled from 'styled-components'

const StyledCourseOverview = styled.div`
  align-items: start;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-gap: 1rem;
  overflow-y: scroll;
`
export default class LangCourseScreen extends Component {
  static propTypes = {
    courses: PropTypes.arrayOf(PropTypes.object),
    toggleBookmark: PropTypes.func.isRequired,
    loading: PropTypes.bool,
    fetchCourses: PropTypes.any,
  }
  componentDidMount() {
    this.props.fetchCourses()
  }

  createDescription(course) {
    return `${course.duration} (${course.times})`
  }

  renderCourses() {
    const { toggleBookmark, courses, loading } = this.props

    if (!loading) {
      return (
        <StyledCourseOverview>
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              course={course}
              onClick={() => toggleBookmark(index)}
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
