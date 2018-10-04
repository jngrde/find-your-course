import { createAction } from 'redux-actions'

const ACTIONS = {
  TOGGLE_BOOKMARK: 'TOGGLE_BOOKMARK',
  RECEIVE_COURSES: 'RECEIVE_COURSES',
}

export const toggleBookmark = createAction(ACTIONS.TOGGLE_BOOKMARK)
export const receiveCourses = createAction(ACTIONS.RECEIVE_COURSES)

export const fetchCourses = () => async dispatch => {
  let savedCourses
  try {
    savedCourses = JSON.parse(sessionStorage.getItem('courses'))
  } catch (error) {
    savedCourses = []
  }
  if (savedCourses.length) {
    dispatch(receiveCourses({ courses: savedCourses }))
  } else {
    const res = await fetch('http://localhost:5000/api/courses/getall')
    const courses = await res.json()
    dispatch(receiveCourses({ courses }))
  }
}

export default ACTIONS
