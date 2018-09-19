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
    detailedCardView: false,
  }

  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    children: PropTypes.any,
  }

  toggleDetailedView = () => {
    this.setState({ showDetails: !this.state.showDetails })
  }
  render() {
    const { title, description } = this.props
    return (
      <CardWrapper>
        <CardHeader
          title={title}
          description={description}
          onToggleDetailedView={this.toggleDetailedView}
          showDetails={this.state.showDetails}
        />
        {this.state.showDetails && this.props.children}
      </CardWrapper>
    )
  }
}
