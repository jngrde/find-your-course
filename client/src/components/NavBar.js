import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import list from '../icons/list.svg'
import bookmark from '../icons/bookmark_filled.svg'

const StyledNavBar = styled.footer`
  height: 50px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  background: #fff;
  box-shadow: 0 -2px 6px 0 #ebedf0;
  justify-content: space-around;
  align-items: center;
<<<<<<< HEAD
<<<<<<< HEAD
  @media screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 1) {
    display: none;
=======

>>>>>>> master
=======
`
const activeClassName = 'nav-item-active'

const NavItem = styled(NavLink).attrs({
  activeClassName,
})`
  &.${activeClassName} {
    border-bottom: solid 0.5px #f9423a;
>>>>>>> master
  }
`

export default class NavBar extends Component {
  render() {
    return (
      <StyledNavBar>
        <NavItem to="/" exact activeClassName={activeClassName}>
          <img src={list} alt="List symbol" />
        </NavItem>

        <NavItem to="/bookmarked" activeClassName={activeClassName}>
          <img src={bookmark} alt="Bookmark symbol" />
        </NavItem>
      </StyledNavBar>
    )
  }
}
