import { connect } from 'react-redux'
import SearchBar from '../components/SearchBar'
import { search } from '../actions'

const mapStateToProps = state => ({
  courses: state.courses,
  search: state.search,
})
const mapDispatchToProps = {
  search: e => search({ e }),
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar)
