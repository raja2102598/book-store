export type Action = {
  type: "GET_BOOKS"
  payload: { books: [] }
}

export const getBooks = (book: []): Action => ({
  type: "GET_BOOKS",
  payload: { books: book },
})
