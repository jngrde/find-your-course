import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
export default class AdminScreen extends Component {
  static propTypes = {
    courses: PropTypes.arrayOf(PropTypes.object),
    loading: PropTypes.bool,
    fetchCourses: PropTypes.any,
  }
  componentDidMount() {
    this.props.fetchCourses()
  }

  renderTable() {
    const { courses, loading } = this.props
    const columns = [
      {
        Header: 'Titel',
        accessor: 'title',
        Cell: this.renderEditable,
      },
      {
        Header: 'Anbieter',
        accessor: 'provider',
        Cell: this.renderEditable,
      },
      {
        Header: 'Nummer',
        accessor: 'number',
        Cell: this.renderEditable,
      },
      {
        Header: 'Dauer',
        accessor: 'duration',
        Cell: this.renderEditable,
      },
      {
        Header: 'Kosten',
        accessor: 'costs',
        Cell: this.renderEditable,
      },
      {
        Header: 'Kurszeiten',
        accessor: 'times',
        Cell: this.renderEditable,
      },
      {
        Header: 'Lehrer',
        accessor: 'teacher',
        Cell: this.renderEditable,
      },
      {
        Header: 'Ort',
        accessor: 'place',
        Cell: this.renderEditable,
      },
      {
        Header: 'Beschreibung',
        accessor: 'text',
        Cell: this.renderEditable,
      },
    ]

    const extendedCourses = [...courses, { title: null, provider: null }]

    if (!loading) {
      return <ReactTable data={extendedCourses} columns={columns} />
    }
  }

  renderEditable = cellInfo => {
    const extendedCourses = [
      ...this.props.courses,
      { title: null, provider: null },
    ]

    return (
      <div
        style={{ backgroundColor: '#fafafa' }}
        contentEditable
        suppressContentEditableWarning
        /*onBlur={e => {
          const data = [this.extendedCourses]
          data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML
          //this.setState({ data })
        }}*/
        dangerouslySetInnerHTML={{
          __html: extendedCourses[cellInfo.index][cellInfo.column.id],
        }}
      />
    )
  }
  render() {
    return (
      <div>
        <h1>Hello, Admin</h1>
        {this.renderTable()}
      </div>
    )
  }
}
