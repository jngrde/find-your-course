import React, { Component } from 'react'
import ToggleCard from './ToggleCard'
import CardDetails from './CardDetails'
import PropTypes from 'prop-types'

export default class CourseCard extends Component {
  static propTypes = {
    course: PropTypes.object,
    i: PropTypes.number,
    onClick: PropTypes.func,
    bookmarked: PropTypes.bool,
  }

  createDescription(course) {
    return `${course.duration} (${course.times})`
  }

  render() {
    const { course, i, onClick } = this.props
    return (
      <div>
        <ToggleCard
          key={i}
          title={`${course.title} (${course.provider})`}
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
      </div>
    )
  }
}
