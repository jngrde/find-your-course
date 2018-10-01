import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import list from '../icons/list.svg'
import bookmark from '../icons/bookmark_filled.svg'

const StyledNavBar = styled.div`
  display: flex;
  flex-shrink: 0;
  position: sticky;
  flex-shrink: 0;
  bottom: 0;
  max-width: 200rem;
  margin: 0.5rem -1rem;
  background: green;
  justify-content: space-around;
  align-items: center;
`

export default class NavBar extends Component {
  render() {
    return (
      <StyledNavBar>
        <Link to="/">
          <img src={list} alt="List symbol" />
        </Link>
        <Link to="/bookmarked">
          <img src={bookmark} alt="Bookmark symbol" />
        </Link>
      </StyledNavBar>
    )
  }
}
