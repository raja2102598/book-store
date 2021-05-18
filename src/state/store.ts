import { createStore } from "redux"
import { booksReducer } from "./booksReducer"

export const store = createStore(booksReducer)
