import React, { Component } from "react"
import { Provider } from "react-redux"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import EditBook from "./pages/EditBook"
import Homecomp from "./pages/Homecomp"
import { store } from "./state/store"

class App extends Component<any, any> {
  render() {
    return (
      <>
        <Provider store={store}>
            <Router>
              <Switch>
                <Route exact path="/">
                  <Homecomp />
                </Route>
                <Route path="/book/:id" component={EditBook}></Route>
              </Switch>
            </Router>
        </Provider>
      </>
    )
  }
}

export default App
