import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import LangCourseScreenContainer from '../containers/LangCourseScreenContainer'
import reducer from '../reducer'
import { injectGlobal } from 'styled-components'
import thunk from 'redux-thunk'

injectGlobal`
body{
  height: 100vH;
  display: flex;
  justify-content: center;
  background: #eeeeee;
  font-family: sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #4a4a4a;
}
`

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
)

class App extends Component {
  render() {
    return (
      <Router>
        <Provider store={store}>
          <div className="App">
            <Route exact path="/" component={LangCourseScreenContainer} />
          </div>
        </Provider>
      </Router>
    )
  }
}

export default App
