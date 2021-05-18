import axios from "axios"
import React, { Component } from "react"
import Header from "./Header"

interface Mystate {
  id: string
  bookName: string
  price: number
  category: string
  author: string
  isLoading: boolean
  isSaved: boolean
}

class EditBook extends Component<any, Mystate> {
  state = {
    id: "",
    bookName: "",
    price: 0,
    category: "",
    author: "",
    isLoading: false,
    isSaved: false,
  }
  componentDidMount() {
    fetch(`https://localhost:5001/api/books/${this.props.match.params.id}`)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data)
        this.setState({
          id: data.id,
          bookName: data.bookName,
          price: data.price,
          category: data.category,
          author: data.author,
        })
        console.log(this.state)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  checkValidation() {
    var forms = document.querySelectorAll(".needs-validation")

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms).forEach(function (form) {
      form.addEventListener(
        "submit",
        function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }

          form.classList.add("was-validated")
        },
        false
      )
    })
  }
  render() {
    // console.log(this.props.match.params.id)
    return (
      <>
        <Header></Header>
        <figure className="text-center m-3">
          <blockquote className="blockquote">
            <h4>Edit Book</h4>
          </blockquote>
        </figure>
        <div className="container">
          <form
            className="needs-validation"
            noValidate
            onSubmit={(e: React.SyntheticEvent) => {
              // debugger
              e.preventDefault()
              this.setState({
                isLoading: true,
              })
              axios
                .put(`https://localhost:5001/api/books/${this.state.id}`, {
                  bookName: this.state.bookName,
                  price: this.state.price,
                  author: this.state.author,
                  category: this.state.category,
                  id: this.state.id,
                })
                .then((response) => {
                  this.setState({
                    isLoading: false,
                    isSaved: true,
                  })
                  console.log(response)
                })
                .catch((error) => {
                  console.log(error)
                })
            }}
          >
            <div className="col-md-auto">
              <div className="mb-3">
                <label htmlFor="bookName" className="form-label">
                  Book Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="bookName"
                  name="bookName"
                  value={this.state.bookName}
                  onChange={(e: React.FormEvent<HTMLInputElement>) => {
                    this.setState({ bookName: e.currentTarget.value })
                  }}
                  required
                />
                <div className="valid-feedback">Looks good!</div>
                <div className="invalid-feedback">
                  Please Enter a book name.
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="author" className="form-label">
                  Author
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="author"
                  value={this.state.author}
                  onChange={(e: React.FormEvent<HTMLInputElement>) => {
                    this.setState({ author: e.currentTarget.value })
                  }}
                  required
                />
                <div className="valid-feedback">Looks good!</div>
                <div className="invalid-feedback">
                  Please enter a author name.
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="category" className="form-label">
                  Category
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="category"
                  value={this.state.category}
                  onChange={(e: React.FormEvent<HTMLInputElement>) => {
                    this.setState({ category: e.currentTarget.value })
                  }}
                  required
                />
                <div className="valid-feedback">Looks good!</div>
                <div className="invalid-feedback">Please Enter a category.</div>
              </div>

              <div className="mb-3">
                <label htmlFor="price" className="form-label">
                  Price
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="price"
                  value={this.state.price}
                  onChange={(e: React.FormEvent<HTMLInputElement>) => {
                    this.setState({ price: parseInt(e.currentTarget.value) })
                  }}
                  required
                />
                <div className="valid-feedback">Looks good!</div>
                <div className="invalid-feedback">Please Enter a price.</div>
              </div>
            </div>
            <div className="text-md-center">
              {this.state.isLoading ? (
                <div className="d-flex justify-content-center">
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              ) : (
                <button
                  className="btn btn-success"
                  onClick={() => {
                    this.checkValidation()
                  }}
                >
                  Save
                </button>
              )}
            </div>
          </form>
        </div>
        {this.state.isSaved ? (
          <figure className="text-center m-3">
            <blockquote className="blockquote">
              <h4 className="text-success">Data Saved</h4>
            </blockquote>
          </figure>
        ) : null}
      </>
    )
  }
}

export default EditBook
