import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledCardDetails = styled.div``
const StyledButton = styled.button``

export default class CardHeader extends Component {
  static propTypes = {
    costs: PropTypes.string,
    teacher: PropTypes.string,
    place: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func,
  }
  render() {
    const { costs, teacher, place, text, onClick } = this.props
    return (
      <StyledCardDetails data-cy="cardDetails">
        <div>{costs}</div>
        <div>{teacher}</div>
        <div>{place}</div>
        <div>{text}</div>
        <StyledButton onClick={onClick}>Merken</StyledButton>
      </StyledCardDetails>
    )
  }
}
