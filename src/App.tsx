import React, { Component } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import EditBook from "./pages/EditBook"
import Homecomp from "./pages/Homecomp"

class App extends Component<any, any> {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/">
              <Homecomp />
            </Route>
            <Route path="/book/:id" component={EditBook}></Route>
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
