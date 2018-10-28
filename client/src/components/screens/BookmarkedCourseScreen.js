import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CourseCard from '../CourseCard'
import styled from 'styled-components'
import NavBar from '../NavBar'
import SearchBar from '../SearchBar'

const ScreenWrapper = styled.div`
  width: 105%;
  margin-left: -9px;
  margin-right: -9px;
  min-height: 100vh;
  max-height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 60px 1fr auto 60px;
  grid-gap: 0;
  @media (min-width: 1200px) {
    width: 25%;
  }
`

const StyledCourseOverview = styled.div`
  align-items: start;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-gap: 1rem;
  overflow-x: scroll;
`

export default class BookmarkedCourseScreen extends Component {
  static propTypes = {
    courses: PropTypes.arrayOf(PropTypes.object),
    toggleBookmark: PropTypes.func.isRequired,
    loading: PropTypes.bool,
    fetchCourses: PropTypes.any,
    bookmarked: PropTypes.bool,
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
        <ScreenWrapper>
          <SearchBar />
          <StyledCourseOverview>
            {courses
              .filter(course => course.bookmarked === true)
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
