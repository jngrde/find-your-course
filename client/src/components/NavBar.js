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
`
const activeClassName = 'nav-item-active'
const svgWrapper = styled.div`
  height: 25px;
  width: 25px;
`

const NavItem = styled(NavLink).attrs({
  activeClassName,
})`
  &.${activeClassName} {
    border-bottom: solid 0.5px #f9423a;
  }
`

export default class NavBar extends Component {
  render() {
    return (
      <StyledNavBar>
        <NavItem to="/" exact activeClassName={activeClassName}>
          <svgWrapper>
            <img src={list} alt="List symbol" />
          </svgWrapper>
        </NavItem>

        <NavItem to="/bookmarked" activeClassName={activeClassName}>
          <svgWrapper>
            <img src={bookmark} alt="Bookmark symbol" />
          </svgWrapper>
        </NavItem>
      </StyledNavBar>
    )
  }
}
