import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import list from '../icons/list.svg'
import bookmark from '../icons/bookmark_filled.svg'

const StyledNavBar = styled.footer`
  grid-row: 4;
  display: flex;
  background: #f9423a;
  justify-content: space-around;
  align-items: center;
  @media (min-width: 1200px) {
    display: none;
  }
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
