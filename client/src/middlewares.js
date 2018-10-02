import { saveToSessionStorage } from './services'

export const saveCoursesToSessionStorage = store => next => action => {
  let result = next(action)
  const newState = store.getState()
  saveToSessionStorage('courses', newState.courses)
  return result
}
