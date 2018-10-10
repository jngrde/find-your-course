import { connect } from 'react-redux'
import AdminScreen from '../components/screens/AdminScreen'
import { fetchCourses } from '../actions'

const mapStateToProps = state => ({
  courses: state.courses,
  loading: state.isLoading,
})
const mapDispatchToProps = {
  fetchCourses,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminScreen)
