import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledSearchBar = styled.header`
  grid-row: 1;
  display: flex;
  background: #f9423a;
  justify-content: center;
  align-items: center;
  @media (min-width: 600px) {
    display: none;
  }
`

const StyledInput = styled.input`
  width: 15rem;
  padding: 3px;
  background: rgb(246, 243, 234);
  border-radius: 5px;
  border: none;
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
