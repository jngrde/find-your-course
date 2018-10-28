import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import LangCourseScreenContainer from '../containers/LangCourseScreenContainer'
import BookmarkedCourseScreenContainer from '../containers/BookmarkedCourseScreenContainer'
import reducer from '../reducer'
import styled from 'styled-components'
import thunk from 'redux-thunk'
import { saveCoursesToSessionStorage } from '../middlewares'
import AdminScreenContainer from '../containers/AdminScreenContainer'
import AdminLoginScreen from './screens/AdminLoginScreen'
import { injectGlobal } from 'styled-components'

injectGlobal`
* {
  box-sizing: border-box;
}
html, body{
  height: 100vh;
}

body{
    font-family: 'Open Sans', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #314659;
    background: #fff 
}
`

const StyledApp = styled.div``

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(saveCoursesToSessionStorage, thunk)
)

class App extends Component {
  render() {
    return (
      <Router>
        <Provider store={store}>
          <StyledApp>
            <Route exact path="/" component={LangCourseScreenContainer} />
            <Route
              path="/bookmarked"
              component={BookmarkedCourseScreenContainer}
            />
            <Route path="/login" component={AdminLoginScreen} />
            <Route path="/admin" component={AdminScreenContainer} />
          </StyledApp>
        </Provider>
      </Router>
    )
  }
}

export default App
