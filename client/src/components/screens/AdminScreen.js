import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AdminTable from '../AdminTable'
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
    const { editable } = this.state.editable
    return (
      <div>
        <h1>Admin</h1>
        <button onClick={this.saveTable}>Speichern</button>
        <button onClick={this.handleEdit}>Bearbeiten</button>
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
