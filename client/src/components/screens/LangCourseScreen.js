import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CourseCard from '../CourseCard'
import styled from 'styled-components'
import NavBar from '../NavBar'
import SearchBarContainer from '../../containers/SearchBarContainer'

const ScreenWrapper = styled.div`
  margin-top: 55px;
  @media (min-width: 1200px) {
    width: 50%;
  }
`

const StyledCourseOverview = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-gap: 0;
`
export default class LangCourseScreen extends Component {
  static propTypes = {
    courses: PropTypes.arrayOf(PropTypes.object),
    toggleBookmark: PropTypes.func.isRequired,
    loading: PropTypes.bool,
    fetchCourses: PropTypes.any,
    search: PropTypes.string,
  }
  componentDidMount() {
    this.props.fetchCourses()
  }

  createDescription(course) {
    return `${course.duration} (${course.times})`
  }

  renderCourses() {
    const { toggleBookmark, courses, loading, search } = this.props

    if (!loading) {
      return (
        <ScreenWrapper>
          <SearchBarContainer />
          <StyledCourseOverview>
            {courses
              .filter(course =>
                Object.values(course).some(val => {
                  return (
                    typeof val === 'string' &&
                    val.toLowerCase().includes(search)
                  )
                })
              )
              .map((course, index) => (
                <CourseCard
                  key={index}
                  course={course}
                  onClick={() => toggleBookmark(index)}
                />
              ))}
          </StyledCourseOverview>
          <NavBar />
        </ScreenWrapper>
      )
    }
  }

  render() {
    return <React.Fragment>{this.renderCourses()}</React.Fragment>
  }
}
