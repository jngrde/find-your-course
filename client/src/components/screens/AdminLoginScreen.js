import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledLogin = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
`
const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
`
const StyledInput = styled.input``

export default class AdminLoginScreen extends Component {
  static propTypes = {
    history: PropTypes.any,
  }

  state = {
    name: '',
    password: '',
    toAdminScreen: false,
    handleAdmin: true,
  }

  validateForm() {
    return this.state.name.length > 0 && this.state.password.length > 0
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    fetch('http://localhost:5000/api/users/authenticate', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json',
<<<<<<< HEAD
        Authorization: 'Bearer',
=======
>>>>>>> master
      },
    })
      .then(res => {
        if (res.status === 200) {
          this.props.history.push('/admin')
        } else {
          const error = new Error(res.error)
          throw error
        }
      })
      .catch(() => {
        alert('Error logging in please try again')
      })
  }

  /*renderAdminScreen = () => {
    if (this.state.toAdminScreen) {
      return <Redirect to="/admin" />
    }
  }*/

  render() {
    return (
      <React.Fragment>
        <StyledLogin>
          <h1>Admin-Login</h1>
          <form onSubmit={this.handleSubmit}>
            <StyledLabel>
              Name:
              <StyledInput
                type="text"
                name="name"
                value={this.state.user}
                onChange={this.handleChange}
              />
            </StyledLabel>
            <StyledLabel>
              Passwort:
              <StyledInput
                name="password"
                type="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </StyledLabel>
            <input type="submit" value="Los" />
          </form>
        </StyledLogin>
      </React.Fragment>
    )
  }
}
