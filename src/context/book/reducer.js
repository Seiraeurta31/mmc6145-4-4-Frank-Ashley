// TODO: import actions and implement reducer for each action
import {
  ADD_BOOK,
  REMOVE_BOOK,
  SEARCH_BOOKS
} from './actions'

export default function reducer(prevState, { action, payload }) {
  const { bookSearchResults, favoriteBooks } = prevState
  let updatedfavBooks = []
  switch(action) {
    case ADD_BOOK:
      const addedBook = [...favoriteBooks, payload]
      saveToLocalStorage(addedBook)
      return {...prevState, favoriteBooks: addedBook}
    case REMOVE_BOOK:
      const removedBook = favoriteBooks.filter(book => book.id !== payload) 
      saveToLocalStorage(removedBook)
      return {...prevState, favoriteBooks: removedBook}
    case SEARCH_BOOKS:
      return {...prevState, bookSearchResults: payload}
    default:
      return prevState
  }

}

// This helper function stores the favoriteBook state in localStorage as a string

function saveToLocalStorage(favBooks) {
  localStorage.setItem('favoriteBooks', JSON.stringify(favBooks))
}

