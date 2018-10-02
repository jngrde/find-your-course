import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledCardDetails = styled.div``
const StyledText = styled.span``

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
        <StyledText>{text}</StyledText>
        <div> Kosten: {costs}</div>
        <div> Lehrer: {teacher}</div>
        <div>Adresse: {place}</div>
      </StyledCardDetails>
    )
  }
}
