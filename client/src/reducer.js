import ACTIONS from './actions'
const initialState = {
  isLoading: true,
  courses: [],
}

export default function(state = initialState, action = {}) {
  let index, courses

  switch (action.type) {
  case ACTIONS.TOGGLE_BOOKMARK:
    index = action.payload.index
    courses = state.courses
    return {
      courses: [
        ...courses.slice(0, index),
        {
          ...courses[index],
          bookmarked: !courses[index].bookmarked,
        },
        ...courses.slice(index + 1),
      ],
    }
  case ACTIONS.RECEIVE_COURSES:
    return {
      ...state,
      courses: action.payload.courses,
      isLoading: false,
    }

  default:
    return state
  }
}
