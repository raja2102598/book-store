import React, { Component } from "react"
import Allbooks from "./Allbooks"
import Header from "./Header"

export class Homecomp extends Component {
  render() {
    return (
      <>
        <Header></Header>
        <Allbooks></Allbooks>
      </>
    )
  }
}

export default Homecomp
