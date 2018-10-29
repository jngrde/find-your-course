import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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
