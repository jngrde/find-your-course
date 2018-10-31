import ACTIONS from './actions'
import produce from 'immer'

const initialState = {
  isLoading: true,
  courses: [],
  search: '',
}

export default function(state = initialState, action = {}) {
  let index, term, id

  switch (action.type) {
  case ACTIONS.TOGGLE_BOOKMARK:
    id = action.payload.id
    return produce(state, draft => {
      index = draft.courses.findIndex(course => course._id === id)
      draft.courses[index].bookmarked = !draft.courses[index].bookmarked
    })
  case ACTIONS.RECEIVE_COURSES:
    return produce(state, draft => {
      (draft.courses = action.payload.courses), (draft.isLoading = false)
    })
  case ACTIONS.SEARCH:
    term = action.payload.e
    return produce(state, draft => {
      draft.search = term
    })
  default:
    return state
  }
}
