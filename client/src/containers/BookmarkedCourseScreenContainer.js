import { connect } from 'react-redux'
import BookmarkedCourseScreen from '../components/screens/BookmarkedCourseScreen'
import { toggleBookmark, fetchCourses } from '../actions'

const mapStateToProps = state => ({
  courses: state.courses,
  loading: state.isLoading,
})
const mapDispatchToProps = {
  toggleBookmark: id => toggleBookmark({ id }),
  fetchCourses,
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookmarkedCourseScreen)
