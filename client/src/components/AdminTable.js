import React, { Component } from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import PropTypes from 'prop-types'

export default class AdminTable extends Component {
  static propTypes = {
    courses: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    editable: PropTypes.any,
  }
  renderTable() {
    const { courses, loading, editable } = this.props
    const columns = [
      {
        Header: '',
        Cell: <button>x</button>,
      },
      {
        Header: 'Titel',
        accessor: 'title',
        Cell: editable && this.renderEditable,
      },
      {
        Header: 'Anbieter',
        accessor: 'provider',
        Cell: editable && this.renderEditable,
      },
      {
        Header: 'Nummer',
        accessor: 'number',
      },
      {
        Header: 'Dauer',
        accessor: 'duration',
        Cell: editable && this.renderEditable,
      },
      {
        Header: 'Kosten',
        accessor: 'costs',
        Cell: editable && this.renderEditable,
      },
      {
        Header: 'Kurszeiten',
        accessor: 'times',
        Cell: editable && this.renderEditable,
      },
      {
        Header: 'Lehrer',
        accessor: 'teacher',
        Cell: editable && this.renderEditable,
      },
      {
        Header: 'Ort',
        accessor: 'place',
        Cell: editable && this.renderEditable,
      },
      {
        Header: 'Beschreibung',
        accessor: 'text',
        Cell: editable && this.renderEditable,
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
    return <div>{this.renderTable()}</div>
  }
}
