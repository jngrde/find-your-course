import { createAction } from 'redux-actions'

const ACTIONS = {
  TOGGLE_BOOKMARK: 'TOGGLE_BOOKMARK',
  RECEIVE_COURSES: 'RECEIVE_COURSES',
}

export const toggleBookmark = createAction(ACTIONS.TOGGLE_BOOKMARK)
export const receiveCourses = createAction(ACTIONS.RECEIVE_COURSES)

export const fetchCourses = () => dispatch => {
  fetch('http://localhost:5000/api/courses/getall')
    .then(res => res.json())
    .then(courses => {
      dispatch(receiveCourses({ courses }))
    })
}

export default ACTIONS
