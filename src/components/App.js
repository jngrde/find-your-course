import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import LangCourseScreenContainer from '../containers/LangCourseScreenContainer'
import reducer from '../reducer'

const store = createStore(reducer)

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
