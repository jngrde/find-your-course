import { createAction } from 'redux-actions'

const ACTIONS = {
  TOGGLE_BOOKMARK: 'TOGGLE_BOOKMARK',
  RECEIVE_COURSES: 'RECEIVE_COURSES',
}

export const toggleBookmark = createAction(ACTIONS.TOGGLE_BOOKMARK)
export const receiveCourses = createAction(ACTIONS.RECEIVE_COURSES)

export const fetchCourses = () => async dispatch => {
  const savedCourses = sessionStorage.getItem('courses')
  if (savedCourses) {
    dispatch(receiveCourses({ courses: JSON.parse(savedCourses) }))
  } else {
    const res = await fetch('http://localhost:5000/api/courses/getall')
    const courses = await res.json()
    dispatch(receiveCourses({ courses }))
  }
}

export default ACTIONS
