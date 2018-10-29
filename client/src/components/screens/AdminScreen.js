import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AdminTable from '../AdminTable'
import styled from 'styled-components'
import { Redirect } from 'react-router-dom'

const AdminPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const ButtonWrapper = styled.div`
  align-self: flex-end;
`

const StyledButton = styled.button`
  align-self: right;
  padding: 6px;
  margin: 6px;
  border: 1px solid #f9423a;
  border-radius: 5px;
`
const StyledHeading = styled.h1``

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
<<<<<<< HEAD
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
=======
    const { editable } = this.state
    return (
      <AdminPageWrapper>
        <StyledHeading>Admin-Seite</StyledHeading>
        <ButtonWrapper>
          <StyledButton onClick={this.saveTable}>Speichern</StyledButton>
          <StyledButton onClick={this.handleEdit}>Bearbeiten</StyledButton>
          <StyledButton onClick={this.handleEdit}>Logout</StyledButton>
        </ButtonWrapper>
        <AdminTable
          key={index}
          courses={courses}
          loading={loading}
          editable={editable}
        />
      </AdminPageWrapper>
    )
>>>>>>> master
  }
}
