import { createAction } from 'redux-actions'

const ACTIONS = {
  TOGGLE_BOOKMARK: 'TOGGLE_BOOKMARK',
}

export const toggleBookmark = createAction(ACTIONS.TOGGLE_BOOKMARK)
export default ACTIONS
