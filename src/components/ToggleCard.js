import React, { Component } from 'react'
import styled from 'styled-components'
import CardHeader from './CardHeader'
import PropTypes from 'prop-types'

const CardWrapper = styled.section`
  border: solid 0.03rem;
  border-radius: 4px;
  margin-bottom: 10px;
  padding: 2rem;
`

export default class ToggleCard extends Component {
  state = {
    showDetails: false,
  }

  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    children: PropTypes.any,
    bookmarked: PropTypes.bool,
    onClick: PropTypes.func,
  }

  toggleDetailedView = () => {
    this.setState({ showDetails: !this.state.showDetails })
  }
  render() {
    const { title, description, bookmarked, onClick } = this.props
    return (
      <CardWrapper>
        <CardHeader
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
