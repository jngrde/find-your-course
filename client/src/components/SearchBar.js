import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledSearchBar = styled.header`
  grid-row: 1;
  display: flex;
  background: #f9423a;
  justify-content: center;
  align-items: center;
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
          <input
            type="search"
            placeholder="Suche"
            onChange={e => search(e.target.value)}
          />
        </form>
      </StyledSearchBar>
    )
  }
}
