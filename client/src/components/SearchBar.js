import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledSearchBar = styled.header`
  grid-row: 1;
  display: flex;
  background: #f9423a;
  justify-content: center;
  align-items: center;
  @media screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 1) {
    display: none;
  }
`

const StyledInput = styled.input`
  width: 15rem;
  padding: 3px;
  background: white;
  border-radius: 5px;
  border: none;
  outline: none !important;
`

export default class SearchBar extends Component {
  static propTypes = {
    search: PropTypes.func,
  }
  render() {
    const { search } = this.props
    return (
      <StyledSearchBar>
        <form>
          <StyledInput
            type="search"
            placeholder="Suche..."
            onChange={e => search(e.target.value)}
          />
        </form>
      </StyledSearchBar>
    )
  }
}
