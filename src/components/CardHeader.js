import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import imgUp from '../icons/chevron-up.svg'
import imgDown from '../icons/chevron-down.svg'
import imgBookmarkNotFilled from '../icons/bookmark.svg'
import imgBookmarkFilled from '../icons/bookmark_filled.svg'

const StyledCardHeader = styled.div`
  display: grid;
  grid-template-columns: 4fr, 2fr;
  grid-template-rows: repeat(3, auto);
`
const StyledButtonBar = styled.div`
  grid-column: 2;
  grid-row: 1;
  align-self: start;

  > * {
    margin-left: 2rem;
    transform: scale(1.5);
  }
`
const StyledOverHeadline = styled.div`
  grid-column: 1;
  grid-row: 2;
  font-size: 0.8rem;
  font-weight: 500;
  color: #989898;
`
const StyledTitle = styled.div`
  grid-column: 1;
  grid-row: 2;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  font-size: 1.375rem;
  font-weight: 500;
  line-height: 1.45;
`
const StyledDescription = styled.div`
  grid-column: span 2;
  grid-row: 3;
  font-weight: 500;
  font-size: 0.8rem;
`

export default class CardHeader extends Component {
  static propTypes = {
    title: PropTypes.string,
    overHeadline: PropTypes.string,
    description: PropTypes.any,
    onToggleDetailedView: PropTypes.func,
    showDetails: PropTypes.bool,
    onClick: PropTypes.func,
    bookmarked: PropTypes.bool,
  }

  renderToggleButton = () => {
    const { showDetails, onToggleDetailedView } = this.props
    return showDetails ? (
      <img src={imgUp} alt="Toggle up" onClick={onToggleDetailedView} />
    ) : (
      <img src={imgDown} alt="Toggle down" onClick={onToggleDetailedView} />
    )
  }
  renderToggleBookmark = () => {
    const { bookmarked, onClick } = this.props
    return bookmarked ? (
      <img src={imgBookmarkFilled} alt="Toggle up" onClick={onClick} />
    ) : (
      <img src={imgBookmarkNotFilled} alt="Toggle down" onClick={onClick} />
    )
  }

  render() {
    const { overHeadline, title, description } = this.props
    return (
      <StyledCardHeader data-cy="cardHeader">
        <StyledOverHeadline>{overHeadline}</StyledOverHeadline>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{description}</StyledDescription>
        <StyledButtonBar>
          {this.renderToggleBookmark()}
          {this.renderToggleButton()}
        </StyledButtonBar>
      </StyledCardHeader>
    )
  }
}
