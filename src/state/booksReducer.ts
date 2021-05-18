import { Action } from "./actions"

export interface BooksState {
  books: any[]
}
const defaultState: BooksState = {
  books: [],
}
export const booksReducer = (
  state: BooksState = defaultState,
  action: Action
) => {
  switch (action.type) {
    case "GET_BOOKS":
      return { books: [action.payload] }
    default:
      return state
  }
}
