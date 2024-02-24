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
      updatedfavBooks = [...favoriteBooks, payload]
      saveToLocalStorage(updatedfavBooks)
      return {...prevState, favoriteBooks: updatedfavBooks}
    case REMOVE_BOOK:
      updatedfavBooks = favoriteBooks.filter(book => book.id !== payload) 
      saveToLocalStorage(updatedfavBooks)
      return {...prevState, favoriteBooks: updatedfavBooks}
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

