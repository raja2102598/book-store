import React, { Component } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Homecomp from "./pages/Homecomp"

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/">
              <Homecomp />
            </Route>
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
