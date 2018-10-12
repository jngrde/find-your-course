import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AdminTable from '../AdminTable'
import styled from 'styled-components'

const StyledButton = styled.button`
  background: rgb(246, 243, 234);
  padding: 6px;
  margin: 6px;
  border: 1px solid #f9423a;
  border-radius: 5px;
`

export default class AdminScreen extends Component {
  state = {
    editable: false,
  }

  static propTypes = {
    courses: PropTypes.arrayOf(PropTypes.object),
    loading: PropTypes.bool,
    fetchCourses: PropTypes.any,
    index: PropTypes.number,
    editable: PropTypes.bool,
  }
  componentDidMount() {
    this.props.fetchCourses()
  }

  handleEdit = () => {
    this.setState({ editable: !this.state.editable })
  }
  render() {
    const { index, courses, loading } = this.props
    const { editable } = this.state
    return (
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
}
