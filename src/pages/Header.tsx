import React, { Component } from "react"

export class Header extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="/#">
              Book Store
            </a>
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
                  <a className="nav-link active" aria-current="page" href="/#">
                    All Books
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#">
                    Add Book
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#">
                    Update Book
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#">
                    Delete Book
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
