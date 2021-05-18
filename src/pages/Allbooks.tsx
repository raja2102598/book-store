import React, { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { BooksState } from "../state/booksReducer"
import { getBooks } from "../state/actions"

function Allbooks() {
  const [loading, isLoading] = useState(true)
  const bookR = useSelector<BooksState, BooksState["books"]>(
    (state) => state.books
  )
  const dispatch = useDispatch()

  const  fetchBooks = async () => {
    await fetch("https://localhost:5001/api/books")
      .then((res) => res.json())
      .then((data) => {
        dispatch(getBooks(data))
        isLoading(false)
      })
  }
  useEffect(() => {
    fetchBooks()
  }, [])
  return (
    <>
      {loading ? (
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
            <table className="table table-striped text-center">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Book Name</th>
                  <th scope="col">Author</th>
                  <th scope="col">Category</th>
                  <th scope="col">Price</th>
                  <th scope="col">Edit</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                   {bookR[0].books.map((book) => (
                      <tr key={book["id"]}>
                        <th scope="row">{book["id"]}</th>
                        <td>{book["bookName"]}</td>
                        <td>{book["author"]}</td>
                        <td>{book["category"]}</td>
                        <td>{book["price"]}</td>
                        <td>
                          <Link to={`/book/${book["id"]}`}>
                            <button className="btn btn-outline-primary">
                              Edit Book
                            </button>
                          </Link>
                        </td>
                        <td>
                          <button
                            className="btn btn-outline-danger"
                            onClick={() => {
                              //DELETE Book
                              axios
                                .delete(
                                  `https://localhost:5001/api/books/${book["id"]}`
                                )
                                .then((response) => {
                                  fetchBooks()
                                  console.log(response)
                                })
                                .catch((error) => {
                                  console.log(error)
                                })
                            }}
                          >
                            Delete Book
                          </button>
                        </td>
                      </tr>
                    ))
                  }
              </tbody>
            </table>
          </div>
        </>
      )}
    </>
  )
}

export default Allbooks
