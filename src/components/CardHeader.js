import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import imgUp from '../icons/chevron-up.svg'
import imgDown from '../icons/chevron-down.svg'

const StyledCardHeader = styled.div`
  h3 {
    color: red;
    margin-bottom: 5px;
  }
`

export default class CardHeader extends Component {
  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    onToggleDetailedView: PropTypes.func,
    showDetails: PropTypes.bool,
  }

  renderToggleButton = () => {
    const { showDetails, onToggleDetailedView } = this.props
    return showDetails ? (
      <img src={imgUp} alt="Toggle up" onClick={onToggleDetailedView} />
    ) : (
      <img src={imgDown} alt="Toggle down" onClick={onToggleDetailedView} />
    )
  }

  render() {
    const { title, description } = this.props
    return (
      <StyledCardHeader data-cy="cardHeader">
        <h3>{title}</h3>
        <div>{description}</div>
        {this.renderToggleButton()}
      </StyledCardHeader>
    )
  }
}
