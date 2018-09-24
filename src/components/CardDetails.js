import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledCardDetails = styled.div``

export default class CardHeader extends Component {
  static propTypes = {
    costs: PropTypes.string,
    teacher: PropTypes.string,
    place: PropTypes.string,
    text: PropTypes.string,
  }
  render() {
    const { costs, teacher, place, text } = this.props
    return (
      <StyledCardDetails data-cy="cardDetails">
        <div>{costs}</div>
        <div>{teacher}</div>
        <div>{place}</div>
        <div>{text}</div>
      </StyledCardDetails>
    )
  }
}
