import React, { Component } from "react"

export class Allbooks extends Component {
  state = {
    books: [],
    loading: true,
  }
  componentDidMount() {
    fetch("https://localhost:5001/api/books")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        this.setState({
          books: data,
          loading: false,
        })
        console.log(this.state)
      })
  }
  render() {
    return (
      <>
        {this.state.loading ? (
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <>
            <figure className="text-center m-3">
              <blockquote className="blockquote">
                <h4>List of books</h4>
              </blockquote>
            </figure>
            <div className="container-md p-2">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Book Name</th>
                    <th scope="col">Author</th>
                    <th scope="col">Category</th>
                    <th scope="col">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.books.map((book) => (
                    <tr key={book["id"]}>
                      <th scope="row">{book["id"]}</th>
                      <td>{book["bookName"]}</td>
                      <td>{book["author"]}</td>
                      <td>{book["category"]}</td>
                      <td>{book["price"]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </>
    )
  }
}

export default Allbooks
