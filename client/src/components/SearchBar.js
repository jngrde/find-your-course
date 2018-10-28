import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const HeaderWrapper = styled.div`
  grid-row: 1;
  @media (min-width: 1200px) {
    display: none;
  }
`
const StyledHR = styled.hr`
  height: 12px;
  border: 0;
  box-shadow: inset 0 12px 12px -12px #ebedf0;
`

const StyledSearchBar = styled.header`
  height: 80%;
  display: flex;
  background: #fff;
  justify-content: center;
  align-items: center;
`

const StyledInput = styled.input`
  width: 12rem;
  padding: 3px;
  background: #fff;
  border-radius: 5px;
  border: solid 0.5px #ebedf0;
`

export default class SearchBar extends Component {
  static propTypes = {
    search: PropTypes.func,
  }
  render() {
    const { search } = this.props
    return (
      <HeaderWrapper>
        <StyledSearchBar>
          <form>
            <StyledInput
              type="search"
              placeholder="Suche..."
              onChange={e => search(e.target.value)}
            />
          </form>
        </StyledSearchBar>
        <StyledHR />
      </HeaderWrapper>
    )
  }
}
