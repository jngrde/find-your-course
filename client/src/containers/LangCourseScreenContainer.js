import { connect } from 'react-redux'
import LangCourseScreen from '../components/screens/LangCourseScreen'
import { toggleBookmark, fetchCourses } from '../actions'

const mapStateToProps = state => ({
  courses: state.courses,
  loading: state.isLoading,
  search: state.search,
})
const mapDispatchToProps = {
  toggleBookmark: id => toggleBookmark({ id }),
  fetchCourses,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LangCourseScreen)
