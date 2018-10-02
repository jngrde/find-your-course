import React, { Component } from 'react'
import styled from 'styled-components'
import { Redirect } from 'react-router-dom'

const StyledLogin = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
`

export default class AdminLoginScreen extends Component {
  state = {
    adminUser: 'admin',
    adminPassword: '12345',
    user: '',
    password: '',
    toAdminScreen: false,
  }

  validateForm() {
    return this.state.user.length > 0 && this.state.password.length > 0
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    if (this.user === this.adminUser && this.password === this.adminPassword) {
      this.setState({ toAdminScreen: true })
    }
  }

  renderAdminScreen = () => {
    if (this.state.toAdminScreen) {
      return <Redirect to="/admin" />
    }
  }

  render() {
    return (
      <React.Fragment>
        <StyledLogin>
          <h1>Login</h1>
          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input
                type="text"
                name="user"
                value={this.state.user}
                onChange={this.handleChange}
              />
            </label>
            <label>
              Passwort:
              <input
                name="password"
                type="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </label>
            <input type="submit" value="Los" />
          </form>
        </StyledLogin>
        {this.renderAdminScreen()}
      </React.Fragment>
    )
  }
}
