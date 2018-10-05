import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactTable from 'react-table'

export default class AdminScreen extends Component {
  static propTypes = {
    courses: PropTypes.arrayOf(PropTypes.object),
    loading: PropTypes.bool,
    fetchCourses: PropTypes.any,
  }
  /*componentDidMount() {
    this.props.fetchCourses()
  }*/

  renderTable() {
    const { courses, loading } = this.props
    const columns = [
      {
        Header: 'Titel',
        accessor: 'title',
      },
      {
        Header: 'Anbieter',
        accessor: 'provider',
      },
      {
        Header: 'Nummer',
        accessor: 'number',
      },
      {
        Header: 'Dauer',
        accessor: 'duration',
      },
      {
        Header: 'Kosten',
        accessor: 'costs',
      },
      {
        Header: 'Kurszeiten',
        accessor: 'times',
      },
      {
        Header: 'Lehrer',
        accessor: 'teacher',
      },
      {
        Header: 'Ort',
        accessor: 'place',
      },
      {
        Header: 'Beschreibung',
        accessor: 'text',
      },
    ]

    if (!loading) {
      return (
        <ReactTable
          data={courses}
          columns={columns}
          manual
          onFetchData={this.fetchCourses()}
        />
      )
    }
  }

  render() {
    return (
      <React.Fragment>
        <h1>Hello, Admin</h1>
        <React.Fragment>{this.renderTable()}</React.Fragment>
      </React.Fragment>
    )
  }
}
