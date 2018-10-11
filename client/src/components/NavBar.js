import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import list from '../icons/list.svg'
import bookmark from '../icons/bookmark_filled.svg'

const StyledNavBar = styled.footer`
  grid-row: 4;
  display: flex;
  background: rgb(246, 243, 234);
  border-top: 1px solid #f9423a;
  justify-content: space-around;
  align-items: center;
  @media (min-width: 600px) {
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
