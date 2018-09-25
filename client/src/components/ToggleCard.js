import React, { Component } from 'react'
import styled from 'styled-components'
import CardHeader from './CardHeader'
import PropTypes from 'prop-types'

const CardWrapper = styled.section`
  max-width: 20rem;
  border: solid 0.03rem;
  margin: 0.5rem -1rem;
  padding: 1rem;
  background: white;
  border-radius: 5px;
  }
`

export default class ToggleCard extends Component {
  state = {
    showDetails: false,
  }

  static propTypes = {
    overHeadline: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.any,
    children: PropTypes.any,
    bookmarked: PropTypes.bool,
    onClick: PropTypes.func,
  }

  toggleDetailedView = () => {
    this.setState({ showDetails: !this.state.showDetails })
  }
  render() {
    const { overHeadline, title, description, bookmarked, onClick } = this.props
    return (
      <CardWrapper>
        <CardHeader
          overHeadline={overHeadline}
          title={title}
          description={description}
          onToggleDetailedView={this.toggleDetailedView}
          showDetails={this.state.showDetails}
          onClick={onClick}
          bookmarked={bookmarked}
        />
        {this.state.showDetails && this.props.children}
      </CardWrapper>
    )
  }
}
