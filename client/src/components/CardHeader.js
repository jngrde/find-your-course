import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import imgUp from '../icons/chevron-up.svg'
import imgDown from '../icons/chevron-down.svg'
import imgBookmarkNotFilled from '../icons/bookmark.svg'
import imgBookmarkFilled from '../icons/bookmark_filled.svg'

const StyledCardHeader = styled.div`
  display: flex;
  flex-direction: column;
`
const StyledButtonBar = styled.div`
  align-self: flex-end;
  padding: 5px;

  > * {
    margin-left: 1rem;
    fill: #06ac42;
  }
`
const StyledOverHeadline = styled.div`
  font-size: 0.8rem;
  font-weight: 500;
  color: #f9423a;
`
const StyledTitle = styled.div`
  align-self: start;
  font-size: 1.375rem;
  margin-bottom: 0.5rem;
  font-weight: 500;
  line-height: 1.2;
`
const StyledDescription = styled.div`
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
      <img src={imgBookmarkFilled} alt="Bookmark" onClick={onClick} />
    ) : (
      <img src={imgBookmarkNotFilled} alt="Bookmarked" onClick={onClick} />
    )
  }

  render() {
    const { overHeadline, title, description } = this.props
    return (
      <StyledCardHeader data-cy="cardHeader">
        <StyledButtonBar>
          {this.renderToggleBookmark()}
          {this.renderToggleButton()}
        </StyledButtonBar>
        <StyledOverHeadline>{overHeadline}</StyledOverHeadline>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{description}</StyledDescription>
      </StyledCardHeader>
    )
  }
}
