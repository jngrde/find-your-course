import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledSearchBar = styled.header`
  height: 50px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 6px 0 #ebedf0;
`

const StyledInput = styled.input`
  width: 12rem;
  padding: 3px;
  border-radius: 5px;
  border: solid 0.5px #ebedf0;
  outline: none !important;
`

export default class SearchBar extends Component {
  static propTypes = {
    search: PropTypes.func,
  }

  render() {
    const { search } = this.props
    return (
      <div>
        <StyledSearchBar>
          <form>
            <StyledInput
              type="search"
              placeholder="Suche..."
              onChange={e => search(e.target.value)}
            />
          </form>
        </StyledSearchBar>
      </div>
    )
  }
}
