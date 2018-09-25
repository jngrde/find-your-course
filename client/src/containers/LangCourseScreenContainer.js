import { connect } from 'react-redux'
import LangCourseScreen from '../components/screens/LangCourseScreen'
import { toggleBookmark } from '../actions'

const mapStateToProps = state => ({
  courses: state.courses,
})
const mapDispatchToProps = dispatch => ({
  onToggleBookmark: index => dispatch(toggleBookmark({ index })),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LangCourseScreen)
