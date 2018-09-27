import { connect } from 'react-redux'
import LangCourseScreen from '../components/screens/LangCourseScreen'
import { toggleBookmark, fetchCourses } from '../actions'

const mapStateToProps = state => ({
  courses: state.courses,
  loading: state.isLoading,
})
const mapDispatchToProps = dispatch => ({
  onToggleBookmark: index => dispatch(toggleBookmark({ index })),
  onFetchCourses: () => dispatch(fetchCourses()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LangCourseScreen)
