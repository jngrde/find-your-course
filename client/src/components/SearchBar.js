import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import list from '../icons/list.svg'
import bookmark from '../icons/bookmark_filled.svg'

const StyledSearchBar = styled.header`
  grid-row: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #fff;
  padding: 10px;
  box-shadow: 0 0 20px 5px #f4f5f6;
  @media screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 1) {
    display: none;
  }
`

const StyledInput = styled.input`
  width: 10rem;
  padding: 3px;
  background: #fff;
  border-radius: 5px;
  border: solid, #bfbfbf;
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
          <div>
            <Link to="/">
              <img src={list} alt="List symbol" />
            </Link>
            <Link to="/bookmarked">
              <img src={bookmark} alt="Bookmark symbol" />
            </Link>
          </div>
        </StyledSearchBar>
      </div>
    )
  }
}
