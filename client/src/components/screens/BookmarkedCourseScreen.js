import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CourseCard from '../CourseCard'
import styled from 'styled-components'
import NavBar from '../NavBar'
import SearchBar from '../SearchBar'

const ScreenWrapper = styled.div`
  margin-top: 55px;
  @media (min-width: 1200px) {
    width: 50%;
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
              .map(course => (
                <CourseCard
                  key={course._id}
                  course={course}
                  onClick={() => toggleBookmark(course._id)}
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
