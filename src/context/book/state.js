// TODO: Load/parse 'favoriteBooks' from localStorage
const favoriteBooks = localStorage.getItem('favoriteBooks')

// TODO: Export initial state object as default
// initial state should have keys bookSearchResults and favoriteBooks
// bookSearchResults should be an empty array
// favoriteBooks should be the value from localStorage or an empty array if localStorage value is falsy
const initialState = {
    bookSearchResults: [],
    favoriteBooks: favoriteBooks ? favoriteBooks : []
}

export default initialState