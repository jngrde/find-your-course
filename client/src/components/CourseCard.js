import React, { Component } from 'react'
import ToggleCard from './ToggleCard'
import CardDetails from './CardDetails'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledCourseCard = styled.div`
  background: white;
  border-radius: 5px;
  padding: 0.7rem;
`

export default class CourseCard extends Component {
  static propTypes = {
    course: PropTypes.object,
    i: PropTypes.number,
    onClick: PropTypes.func,
    bookmarked: PropTypes.bool,
  }

  createDescription(course) {
    return (
      <div>
        {course.duration} <br /> {course.times}
      </div>
    )
  }

  render() {
    const { course, i, onClick } = this.props
    return (
      <StyledCourseCard>
        <ToggleCard
          key={i}
          overHeadline={course.provider}
          title={course.title}
          description={this.createDescription(course)}
          onClick={onClick}
          bookmarked={course.bookmarked}
        >
          <CardDetails
            costs={course.costs}
            teacher={course.teacher}
            place={course.place}
            text={course.text}
          />
        </ToggleCard>
      </StyledCourseCard>
    )
  }
}
