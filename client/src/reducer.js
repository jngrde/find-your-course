import ACTIONS from './actions'
import produce from 'immer'

const initialState = {
  isLoading: true,
  courses: [],
}

export default function(state = initialState, action = {}) {
  let index

  switch (action.type) {
  case ACTIONS.TOGGLE_BOOKMARK:
    index = action.payload.index
    return produce(state, draft => {
      draft.courses[index].bookmarked = !draft.courses[index].bookmarked
    })
  case ACTIONS.RECEIVE_COURSES:
    return produce(state, draft => {
      (draft.courses = action.payload.courses), (draft.isLoading = false)
    })
  default:
    return state
  }
}
