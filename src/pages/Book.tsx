import React, { Component } from "react"
import { RouteComponentProps } from "react-router"

interface MyProps {
  id: string
}

class Book extends Component<RouteComponentProps<MyProps>> {
  render() {
    return <div></div>
  }
}

export default Book
