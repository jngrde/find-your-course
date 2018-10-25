import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AdminTable from '../AdminTable'
import styled from 'styled-components'
import { Redirect } from 'react-router-dom'

const StyledButton = styled.button`
  background: rgb(246, 243, 234);
  padding: 6px;
  margin: 6px;
  border: 1px solid #f9423a;
  border-radius: 5px;
`

export default class AdminScreen extends Component {
  state = {
    verified: false,
    redirect: true,
    editable: false,
    handleAdmin: true,
  }

  static propTypes = {
    courses: PropTypes.arrayOf(PropTypes.object),
    loading: PropTypes.bool,
    fetchCourses: PropTypes.any,
    index: PropTypes.number,
    editable: PropTypes.bool,
  }
  componentDidMount() {
    fetch('http://localhost:5000/checkToken')
      .then(res => {
        if (res.status === 200) {
          this.setState({ verified: true })
          this.props.fetchCourses()
        }
      })
      .catch(() => {
        this.setState({ verified: false, redirect: true })
      })
  }

  handleEdit = () => {
    this.setState({ editable: !this.state.editable })
  }
  render() {
    const { index, courses, loading } = this.props
    const { verified, redirect, editable } = this.state
    let view = <h1>Loading...</h1>
    if (!verified) {
      if (redirect) {
        view = <Redirect to="/login" />
      } else {
        view = (
          <div>
            <StyledButton onClick={this.saveTable}>Speichern</StyledButton>
            <StyledButton onClick={this.handleEdit}>Bearbeiten</StyledButton>
            <AdminTable
              key={index}
              courses={courses}
              loading={loading}
              editable={editable}
            />
          </div>
        )
      }

      return <React.Fragment>{view}</React.Fragment>
    }
  }
}
