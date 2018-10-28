import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import list from '../icons/list.svg'
import bookmark from '../icons/bookmark_filled.svg'

const NavBarWrapper = styled.div`
  grid-row: 4;
  @media (min-width: 1200px) {
    display: none;
  }
`
const StyledHR = styled.hr`
  height: 12px;
  border: 0;
  box-shadow: inset 0 12px 12px -12px #ebedf0;
`

const StyledNavBar = styled.footer`
  height: 90%;
  display: flex;
  background: #fff;
  justify-content: space-around;
  align-items: center;

  }
`

export default class NavBar extends Component {
  render() {
    return (
      <NavBarWrapper>
        <StyledHR />
        <StyledNavBar>
          <Link to="/">
            <img src={list} alt="List symbol" />
          </Link>
          <Link to="/bookmarked">
            <img src={bookmark} alt="Bookmark symbol" />
          </Link>
        </StyledNavBar>
      </NavBarWrapper>
    )
  }
}
