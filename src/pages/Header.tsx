import React, { Component } from "react"
import { Link } from "react-router-dom"

export class Header extends Component<any, any> {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link to="/" style={{ textDecoration: "none" }}>
              <span className="navbar-brand">Book Store</span>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/" style={{ textDecoration: "none" }}>
                    <span
                      className="nav-link"
                      aria-current="page"
                      id="all"
                    >
                      All Books
                    </span>
                  </Link>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" href="/#" id="add">
                    Add Book
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    )
  }
}

export default Header
